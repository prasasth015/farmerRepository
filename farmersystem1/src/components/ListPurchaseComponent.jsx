import React, { Component } from 'react'
import PurchaseService from '../services/PurchaseService'
import "./ListPurchase.css";


class ListPurchaseComponent extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            purchase: []
    }
}
viewEmployee(purchaseId){
    this.props.history.push(`/view-employee/${purchaseId}`);
}

componentDidMount(){
    PurchaseService.getPurchase().then((res) => {
        this.setState({ purchase: res.data});
    });
}

render() {
    return (
        <div className="wrapper">
             <h2 className="text-center">Purchase History</h2>
             
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Product Name</th>
                                <th> Quantity</th>
                                <th> Quote Price</th>
                                <th> User Name</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.purchase.map(
                                    employee => 
                                    <tr key = {employee.purchaseId}>
                                         <td> { employee.soldProduct.productName} </td>   
                                         <td>{employee.soldProduct.quantity}</td>
                                         <td>{employee.soldProduct.quotePrice}</td>
                                         <td>{employee.soldProduct.userName}</td>
                                         <td>
                                             
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.purchaseId)} className="btn btn-info">View </button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>

        </div>
    )
}



}
export default ListPurchaseComponent;