import React, { Component } from 'react'
import SupplierQuoteService from '../service/SupplierQuoteService';

class UpdateQuoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quoteId: this.props.match.params.quoteId,
            userName: '',
            productName: '',
            quantity: '',
            quotePrice: '',
            product: ''
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeQuotePriceHandler = this.changeQuotePriceHandler.bind(this);
        this.changeProductHandler = this.changeProductHandler.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
    }
    componentDidMount() {
        SupplierQuoteService.getQuoteById(this.state.quoteId).then((res) => {
            let supplierQuote = res.data;
            this.setState({

                productName: supplierQuote.productName,
                quantity: supplierQuote.quantity,
                quotePrice: supplierQuote.quotePrice,

            });
        });
    }

    updatePrice = (e) => {
        e.preventDefault();
        let supplierQuote = { productName: this.state.productName, quantity: this.state.quantity, quotePrice: this.state.quotePrice };
        console.log('supplierQuote => ' + JSON.stringify(supplierQuote));
        console.log('quoteId => ' + JSON.stringify(this.state.quoteId));

        SupplierQuoteService.updatePrice(supplierQuote, this.state.quoteId).then(res => {
            this.props.history.push('/supplierQuote');
        });
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

    changeProductHandler = (event) => {
        this.setState({ product: event.target.value });
    }

    cancel() {
        this.props.history.push('/supplierQuote');
    }


    
    render() {
        return (
            <div>
                <br></br>
                <div className="container" style={{ "width": "80%" }}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 style={{ "textAlign": "center" }}>Update Quote</h3>
                            <div className="card-body">
                                <form >

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

                                    <div style={{
                                        "marginTop": "20px",
                                        "marginBottom": "10px", "marginLeft": "100px"
                                    }}>
                                        <button className="btn btn-success" onClick={this.updatePrice} > Save</button>
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

export default UpdateQuoteComponent
