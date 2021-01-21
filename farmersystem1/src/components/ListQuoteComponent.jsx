import React, { Component } from 'react'
// import SupplierQuoteService from '../service/SupplierQuoteService'
import "./ListQuote.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

class ListQuoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quote: []
        }
    }
    render() {
        return (
            // <div className="body_wrapper">
            <div className="body_wrap ">
                <div>
                    <h2 className="box_title">Quote List</h2>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addQuote}> Add Quote</button>
                    </div>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User Name</th>
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
                                                <td> {supplierQuote.userName} </td>
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
            // </div>
        )
    }
}

export default ListQuoteComponent
