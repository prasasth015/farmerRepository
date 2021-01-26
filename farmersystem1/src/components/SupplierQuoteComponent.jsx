import React, { Component } from 'react'
import SupplierQuoteService from '../service/SupplierQuoteService';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SupplierQuote.css";
import ProductService from '../service/ProductService'

class SupplierQuoteComponent extends Component {
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

        this.state = {
            product: []
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeQuotePriceHandler = this.changeQuotePriceHandler.bind(this);
        this.changeProductHandler = this.changeProductHandler.bind(this);
        this.saveOrUpdateQuote = this.saveOrUpdateQuote.bind(this);
    }
    componentDidMount() {
        if (this.state.quoteId === '_add') {
            fetch('http://localhost:8082/api/v1/addproduct')
                .then(response => response.json())
                .then(product => this.setState({ product: product }))
            return
        } else {
            SupplierQuoteService.getQuoteById(this.state.quoteId).then((res) => {
                let supplierQuote = res.data;
                this.setState({
                    productName: supplierQuote.productName,
                    quantity: supplierQuote.quantity,
                    quotePrice: supplierQuote.quotePrice,
                });
            });
        }
    }


    saveOrUpdateQuote = (e) => {
        e.preventDefault();
        let supplierQuote = { productName: this.state.productName, quantity: this.state.quantity, quotePrice: this.state.quotePrice }; //product: this.state.product
        console.log('supplierQuote => ' + JSON.stringify(supplierQuote));
        ProductService.getAllProduct(this.state.productName);

        fetch('http://localhost:8082/api/v1/addproduct')
            .then(response => response.json())
            .then(product => this.setState({ product: product }))

        SupplierQuoteService.insertQuote(supplierQuote).then(res => {
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

    addQuote() {
        this.props.history.push('/add-supplierQuote/_add');
    }


    cancel() {
        this.props.history.push('/supplierQuote');
    }

    componentDidMount() {
        fetch('http://localhost:8082/api/v1/addproduct')
            .then(response => response.json())
            .then(product => this.setState({ product: product }))
    }

    render() {
        return (
            <div >
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 style={{ "textAlign": "center" }}>Add Quote</h3>
                            <div className="card-body">
                                <form >
                                    <div className="Product">
                                        <label className="Label"> Product Name: </label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Product Name" name="Product Name" className="form-control" onChange={this.changeProductNameHandler}>{
                                            this.state.product.map(products =>
                                            <option value={this.state.productName}
                                                onChange={this.changeProductNameHandler} >{products.productName}
                                            </option>)
                                        }product
                                        </select>
                                    </div>

                                    <div className="quantity">
                                        <label className="Label">Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" type="number" className="form-control"
                                            value={this.state.quantity} onChange={this.changeQuantityHandler} />
                                    </div>

                                    <div className="quotePrice">
                                        <label className="Label">Quote Price: </label>
                                        <input placeholder="Quote Price" name="quotePrice" type="number" className="form-control"
                                            value={this.state.quotePrice} onChange={this.changeQuotePriceHandler} />
                                    </div>

                                    <div className="button">
                                        <button className="btn btn-success" onClick={this.saveOrUpdateQuote} >Save</button>
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































