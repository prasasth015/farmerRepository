import React, { Component } from 'react'
// import SupplierQuoteService from '../service/SupplierQuoteService';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SupplierQuote.css";

class SupplierQuoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            quoteId: this.props.match.params.quoteId,
            userName: '',
            productName: '',
            quantity: '',
            quotePrice: '',
            product: ''
        }
        this.saveOrUpdateQuote = this.saveOrUpdateQuote.bind(this);
    }

    render() {
        return (
            <div className="body">
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="box_value" >
                                <form >
                                    <div className="userName">
                                        <label> User Name: </label>
                                        <input placeholder="User Name" name="userName" className="form-control"
                                            value={this.state.userName} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <div className="Product">
                                        <label> Product Name: </label>
                                        <input placeholder="Product Name" name="ProductName" className="form-control"
                                            value={this.state.productName} onChange={this.changeProductNameHandler} />
                                    </div>
                                    <div className="quantity">
                                        <label>Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control"
                                            value={this.state.quantity} onChange={this.changeQuantityHandler} />
                                    </div>
                                    <div className="quotePrice">
                                        <label>Quote Price: </label>
                                        <input placeholder="Quote Price" name="quotePrice" className="form-control"
                                            value={this.state.quotePrice} onChange={this.changeQuotePriceHandler} />
                                    </div>
                                    {/* <div className = "form-group">
                                            <label>Product: </label>
                                            <input placeholder="Product" name="product" className="form-control" 
                                                value={this.state.product} onChange={this.changeProductHandler}/>
                                        </div> */}
                                    <div className="button">
                                        <button className="btn btn-success" onClick={this.saveOrUpdateQuote}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SupplierQuoteComponent