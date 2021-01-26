import React, { Component } from 'react'
import SupplierQuoteService from '../service/SupplierQuoteService'
import "./ListQuote.css";

class ListQuoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quote: []
        }
        this.addQuote = this.addQuote.bind(this);
        this.viewProduct = this.viewProduct.bind(this);
        this.viewPurchase = this.viewPurchase.bind(this);
        this.editPrice = this.editPrice.bind(this);
        this.deleteQuote = this.deleteQuote.bind(this);
    }

    deleteQuote(quoteId) {
        SupplierQuoteService.deleteQuote(quoteId).then(res => {
            this.setState({ quote: this.state.quote.filter(supplierQuote => supplierQuote.quoteId !== quoteId) });
        });
    }
    viewQuote(quoteId) {
        this.props.history.push(`/view-supplierQuote/${quoteId}`);
    }
    editPrice(quoteId) {
        this.props.history.push(`/update-supplierQuote/${quoteId}`);
    }

    componentDidMount() {
        SupplierQuoteService.getAllQuote().then((res) => {
            this.setState({ quote: res.data });
        });
    }

    addQuote() {
        this.props.history.push('/add-supplierQuote/_add');
    }
    viewProduct() {
        this.props.history.push('/supplierProduct');
    }

    viewPurchase(){
        this.props.history.push('/purchase')
    }

    render() {
        return (
            <div className="body_wrap ">
                <div>
                    <h2 className="box_title">Quote List</h2>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addQuote}> Add Quote</button>
                        <button style={{ "marginLeft": "10px" }} className="btn btn-primary" onClick={this.viewProduct}> View Product</button>
                        <button style={{ "marginLeft": "10px" }} className="btn btn-primary" onClick={this.viewPurchase}> View Purchase</button>
                    </div>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product name</th>
                                    <th> Quantity</th>
                                    <th> Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.quote.map(
                                        supplierQuote =>
                                            <tr key={supplierQuote.quoteId}>                                               
                                                <td> {supplierQuote.productName} </td>
                                                <td> {supplierQuote.quantity}</td>
                                                <td> {supplierQuote.quotePrice}</td>
                                                <td>
                                                    <button onClick={() => this.editPrice(supplierQuote.quoteId)} className="btn btn-info">Update </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteQuote(supplierQuote.quoteId)} className="btn btn-danger">Delete </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewQuote(supplierQuote.quoteId)} className="btn btn-info">View </button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListQuoteComponent
