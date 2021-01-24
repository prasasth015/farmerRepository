import React, { Component } from 'react'
 import SupplierQuoteService from '../service/SupplierQuoteService';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SupplierQuote.css";
import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

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
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeQuotePriceHandler = this.changeQuotePriceHandler.bind(this);
        this.changeProductHandler = this.changeProductHandler.bind(this);
        this.saveOrUpdateQuote = this.saveOrUpdateQuote.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.quoteId === '_add') {
            return
        } else {
            SupplierQuoteService.getQuoteById(this.state.quoteId).then((res) => {
                let supplierQuote = res.data;
                this.setState({
                    userName: supplierQuote.userName,
                    productName: supplierQuote.productName,
                    quantity: supplierQuote.quantity,
                    quotePrice: supplierQuote.quotePrice,
                    // product:supplierQuote.product
                });
            });
        }
    }
    saveOrUpdateQuote = (e) => {
        e.preventDefault();
        let supplierQuote = { userName: this.state.userName, productName: this.state.productName, quantity: this.state.quantity, quotePrice: this.state.quotePrice }; //product: this.state.product
        console.log('supplierQuote => ' + JSON.stringify(supplierQuote));

        // SupplierQuoteService.insertQuote(supplierQuote).then(res => {
        // this.props.history.push('/addQuote');

        // step 5
        if (this.state.quoteId === '_add') {
            SupplierQuoteService.insertQuote(supplierQuote).then(res => {
                this.props.history.push('/supplierQuote');
            });
        }
        else {
            SupplierQuoteService.updatePrice(supplierQuote, this.state.quoteId).then(res => {
                this.props.history.push('/supplierQuote');
            });
        }
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
    
    getTitle() {
        if (this.state.quoteId === '_add') {
            return <h3 className="quote">Add Quote</h3>
        } else {
            return <h3 className="text-center">Update </h3>

        }
    }

    render() {
        return (
            <div >
           
            <br></br>
               <div className = "container">
               
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form >
                                    <div className="userName">
                                        <label className="Label"> User Name: </label>
                                        <input placeholder="User Name" name="userName" className="form-control"
                                            value={this.state.userName} onChange={this.changeUserNameHandler} />
                                    </div>
                                    <div className="Product">
                                        <label className="Label"> Product Name: </label>
                                        <input placeholder="Product Name" name="ProductName" className="form-control"
                                            value={this.state.productName}  onChange={this.changeProductNameHandler} />
                                    </div>
                                    <div className="quantity">
                                        <label className="Label">Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control"
                                            value={this.state.quantity} onChange={this.changeQuantityHandler} />
                                    </div>
                                    <div className="quotePrice">
                                        <label className="Label">Quote Price: </label>
                                        <input placeholder="Quote Price" name="quotePrice" className="form-control"
                                            value={this.state.quotePrice}  onChange={this.changeQuotePriceHandler} />
                                    </div>
                                    {/* <div className = "form-group">
                                            <label>Product: </label>
                                            <input placeholder="Product" name="product" className="form-control" 
                                                value={this.state.product} onChange={this.changeProductHandler}/>
                                        </div> */}
                                    <div className="button">
                                    <button className="btn btn-success"  onClick={this.saveOrUpdateQuote} disabled={this.state.userName.length === 0||this.state.productName.length === 0||this.state.quantity.length === 0||this.state.quotePrice.length === 0}>Save</button>
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