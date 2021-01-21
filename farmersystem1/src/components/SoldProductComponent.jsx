import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class SoldProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            invoiceId: this.props.match.params.invoiceId,
            userName: '',
            productName: '',
            quotePrice: '',
            quantity: '',  
            supplierQuote: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeQuotePriceHandler = this.changeQuotePriceHandler.bind(this);
        this.changeSupplierQuoteHandler =this.changeSupplierQuoteHandler.bind(this);
        this.saveOrUpdateQuote = this.saveOrUpdateQuote.bind(this);
    }

   
    saveOrUpdateQuote = (e) => {
        e.preventDefault();
        let supplierQuote = { userName: this.state.userName, productName: this.state.productName, quantity: this.state.quantity, quotePrice: this.state.quotePrice }; //product: this.state.product
        console.log('supplierQuote => ' + JSON.stringify(supplierQuote));

    }

       

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    changeProductNameHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    changeQuantityHandler = (event) => {
        this.setState({ quantity: event.target.value });
    }

    changeQuotePriceHandler = (event) => {
        this.setState({ quotePrice: event.target.value });
    }

    changeSupplierQuoteHandler = (event) => {
        this.setState({ supplierQuote: event.target.value });
    }

    cancel() {
        this.props.history.push('/soldProductList'); //doubt
    }

    getTitle() {
        if (this.state.quoteId === '_add') { //doubt
            return <h3 className="quote">Add Quote</h3>
        } else {
            return <h3 className="text-center">Sell Product </h3>

        }
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
                                        <input placeholder="User Name" name="UserName" className="form-control"
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
                                    <button className="btn btn-success"  onClick={this.saveOrUpdateQuote}>Save</button>
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

export default SoldProductComponent