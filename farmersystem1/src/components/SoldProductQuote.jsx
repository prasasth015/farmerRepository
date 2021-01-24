import React, { Component } from 'react'
import SupplierQuoteService from '../service/SupplierQuoteService';
import SoldProductService from '../service/SoldProductService';
import "./ListQuote.css";


class SoldProductQuote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quote: []
        }
        this.addQuote = this.addQuote.bind(this);

    }



    componentDidMount() {
        SupplierQuoteService.getAllQuote().then((res) => {
            this.setState({ quote: res.data });
        });
    }

    addQuote() {
        this.props.history.push('/soldProduct');
    }


    render() {
        return (
          
              
                <div className="body_wrap ">
                    <div>
                        <h2 className="box_title">Product List</h2>
                        <div className="row">
                            <button    className="btn btn-primary" onClick={this.addQuote}> Sell product</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> User Name</th>

                                <th> Product Name</th>
                                <th> Quantity</th>
                                <th> quote Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.quote.map(
                                    quote =>
                                        <tr key={quote.quoteId}>
                                            <td> {quote.userName} </td>
                                            <td> {quote.productName} </td>
                                            <td> {quote.quantity}</td>
                                            <td> {quote.quotePrice} </td>
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

export default SoldProductQuote
