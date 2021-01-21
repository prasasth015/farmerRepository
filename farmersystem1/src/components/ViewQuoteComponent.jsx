import React, { Component } from 'react'
//import SupplierQuoteService from '../service/SupplierQuoteService'
import "./ViewQuote.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

class ViewQuoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quoteId: this.props.match.params.quoteId,
            supplierQuote: {}
        }
    }
    render() {
        return (
            <div className="box">
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Quote Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> User Name :  </label>
                            <div> {this.state.supplierQuote.userName}</div>
                        </div>
                        <div className="row">
                            <label>  product Name :  </label>
                            <div> {this.state.supplierQuote.productName}</div>
                        </div>
                        <div className="row">
                            <label> Quantity :  </label>
                            <div> {this.state.supplierQuote.quantity}</div>
                        </div>
                        <div className="row">
                            <label>Quote Price :  </label>
                            <div> {this.state.supplierQuote.quotePrice}</div>
                        </div>
                    </div>
                </div>
                <div className="cancel"> <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button></div>
            </div>
        )
    }
}

export default ViewQuoteComponent
