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
        this.back = this.back.bind(this);


    }



    componentDidMount() {
        SupplierQuoteService.getAllQuote().then((res) => {
            this.setState({ quote: res.data });
        });
    }

    addQuote() {
        this.props.history.push('/soldProduct');
    }

    back() {
        this.props.history.push('/soldProductList');
    }

    addSellProduct = (quoteId) => {
        let sellProduct = { userName: this.state.userName, productName: this.state.productName,quantity: this.quantity,quotePrice: this.quotePrice};
        console.log('sellProduct => ' + JSON.stringify(sellProduct));
    
            SoldProductService.insertSoldProduct(quoteId).then(res =>{
                this.props.history.push('/soldProductList');
            });
    }
    

    render() {
        return (
          
              
                <div className="body_wrap ">
                    <div>
                        <h2 className="box_title">Supplier Quote List</h2>
                        <div className="row">
                            <button    className="btn btn-primary" onClick={this.addQuote}> Sell product</button>
                            <button   style={{"marginLeft":"10px"}}  className="btn btn-primary" onClick={this.back}> Back</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> User Name</th>
                                <th> Product Name</th>
                                <th> Quantity</th>
                                <th> Quote Price</th>
                              

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
