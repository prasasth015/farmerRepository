import React, { Component } from 'react'
import SupplierQuoteService from '../service/SupplierQuoteService'
import "./ViewQuote.css";

class ViewQuoteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quoteId: this.props.match.params.quoteId,
            supplierQuote: {}
        }
    }

    componentDidMount() {
        SupplierQuoteService.getQuoteById(this.state.quoteId).then(res => {
            this.setState({ supplierQuote: res.data });
        })
    }

    cancel() {
        this.props.history.push('/supplierQuote');
    }
    render() {
        return (
            <div className="box">
                <br></br>
                <div className="card col-md-6 offset-md-3" style={{ height: '30vh', borderRadius: '20px' }}>
                    <h3 className="text-center"> View Quote Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label className="viewLabel"> User Name :  </label>
                            <div style={{ "marginTop": "2px", "marginLeft": "5px" }}> {this.state.supplierQuote.userName}</div>
                        </div>
                        <div className="row">
                            <label className="viewLabel">  Product Name :  </label>
                            <div style={{ "marginTop": "2px", "marginLeft": "5px" }}> {this.state.supplierQuote.productName}</div>
                        </div>
                        <div className="row">
                            <label className="viewLabel"> Quantity :  </label>
                            <div style={{ "marginTop": "2px", "marginLeft": "5px" }}> {this.state.supplierQuote.quantity}</div>
                        </div>
                        <div className="row">
                            <label className="viewLabel">Quote Price :  </label>
                            <div style={{ "marginTop": "2px", "marginLeft": "5px" }}> {this.state.supplierQuote.quotePrice}</div>
                        </div>
                        <div className="cancel"> <button className="btn btn-danger" onClick={this.cancel.bind(this)}  >Cancel</button></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewQuoteComponent
