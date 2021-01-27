import React, { Component } from 'react'
import PurchaseService from '../service/PurchaseService'
import "./viewPurchase.css";

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
    
    cancel() {
        this.props.history.push('/purchase');
    }
    

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{ height: '40vh', borderRadius: '20px' }}>
                    <h3 className = "text-center"> View Purchase Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label className="viewLabel"> Product Name: </label>
                            <div style={{ "marginTop": "7px", "marginLeft": "5px" }}> { this.state.soldProduct.productName }</div>
                            
                        </div>
                        <div className = "row">
                            <label className="viewLabel"> User Name </label>
                            <div style={{ "marginTop": "7px", "marginLeft": "5px" }}> { this.state.soldProduct.userName }</div>
                        </div>
                        <div className = "row">
                            <label className="viewLabel"> Quantity: </label>
                            <div style={{ "marginTop": "7px", "marginLeft": "5px" }}> { this.state.soldProduct.quantity }</div>
                        </div>
                        <div className = "row">
                            <label className="viewLabel"> Quote Price </label> &nbsp;
                            <div style={{ "marginTop": "7px", "marginLeft": "5px" }}> { this.state.soldProduct.quotePrice }</div>
                        </div>
                        <div className="cancel"> <button className="btn btn-danger" onClick={this.cancel.bind(this)}  >Back</button></div>
                    </div>

                </div>
            </div>
        )
    }



}
export default ViewPurchaseComponent