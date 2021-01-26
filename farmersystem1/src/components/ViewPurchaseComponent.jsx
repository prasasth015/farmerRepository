import React, { Component } from 'react'
import PurchaseService from '../service/PurchaseService'

class ViewPurchaseComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            invoiceId: this.props.match.params.invoiceId,
            productName: '',
            quantity: '',
            quotePrice: '',
            userName: '',
            soldProduct: {}
        }
    }

    componentDidMount(){
        PurchaseService.getSoldProductById(this.state.invoiceId).then( res => {
            this.setState({soldProduct: res.data});
            
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Purchase Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Product Name: </label>
                            <div> { this.state.soldProduct.productName }</div>
                            
                        </div>
                        <div className = "row">
                            <label> User Name </label>
                            <div> { this.state.soldProduct.quantity }</div>
                        </div>
                        <div className = "row">
                            <label> Quantity: </label>
                            <div> { this.state.soldProduct.quotePrice }</div>
                        </div>
                        <div className = "row">
                            <label> Quote Price </label> &nbsp;
                            <div> { this.state.soldProduct.userName }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }



}
export default ViewPurchaseComponent