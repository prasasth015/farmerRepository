import React, { Component } from 'react'
import PurchaseService from '../services/PurchaseService'

class ViewPurchaseComponent extends Component{
    constructor(props) {
        super(props)

        this.state = {
            purchaseId: this.props.match.params.purchaseId,
            productName: '',
            quantity: '',
            quotePrice: '',
            userName: '',
            employee: {}
        }
    }

    componentDidMount(){
        PurchaseService.findPurchaseById(this.state.purchaseId).then( res => {
            this.setState({employee: res.data});
            
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
                            <div> { this.state.employee.productName }</div>
                            
                        </div>
                        <div className = "row">
                            <label> Quantity: </label>
                            <div> { this.state.employee.quantity }</div>
                        </div>
                        <div className = "row">
                            <label> Quote price: </label>
                            <div> { this.state.employee.quotePrice }</div>
                        </div>
                        <div className = "row">
                            <label> User Name: </label>
                            <div> { this.state.employee.userName }</div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }



}
export default ViewPurchaseComponent