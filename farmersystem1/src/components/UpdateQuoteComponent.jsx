import React, { Component } from 'react'
// import SupplierQuoteService from '../service/SupplierQuoteService';
class UpdateQuoteComponent extends Component {
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
        this.updatePrice = this.updatePrice.bind(this);
    }

    render() {
        return (
            // <div className="fo">
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div >
                                <form>
                                    <div className="form-group">
                                        <label> User Name: </label>
                                        <input placeholder="User Name" name="userName" className="form-control"
                                            value={this.state.userName} onChange={this.changeUserNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Product Name: </label>
                                        <input placeholder="Product Name" name="ProductName" className="form-control"
                                            value={this.state.productName} onChange={this.changeProductNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control"
                                            value={this.state.quantity} onChange={this.changeQuantityHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Quote Price: </label>
                                        <input placeholder="Quote Price" name="quotePrice" className="form-control"
                                            value={this.state.quotePrice} onChange={this.changeQuotePriceHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updatePrice}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateQuoteComponent
