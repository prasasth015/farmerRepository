import React, { Component } from 'react'
import PurchaseService from '../service/PurchaseService'
import "./ListPurchase.css";


class ListPurchaseComponent extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            purchase: []
    }
    this.addPurchase = this.addPurchase.bind(this);
}
viewEmployee(pId){
    this.props.history.push(`/view-employee/${pId}`);
}

componentDidMount(){
    PurchaseService.getPurchase().then((res) => {
        this.setState({ purchase: res.data});
    });
}

addPurchase() {
    this.props.history.push('/supplierQuote');
}


render() {
    return (
        <div className="wrapper">
            <br></br>
             <h2 className="text-center">Purchase History</h2>
             <div className="row">
                        <button style={{"marginLeft":"-350px"}}   className="btn btn-primary" onClick={this.addPurchase}> Go Back</button>
                        
                    </div>
                    
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Product Name</th>
                                <th> Quantity</th>
                                <th> Quote Price</th>
                                <th> User Name</th>
                                <th> farmer UserName</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.purchase.map(
                                    employee => 
                                    <tr key = {employee.pId}>
                                         <td> { employee.soldProduct.productName} </td>   
                                         <td>{employee.soldProduct.quantity}</td>
                                         <td>{employee.soldProduct.quotePrice}</td>
                                         <td>{employee.soldProduct.userName}</td>
                                         <td>{employee.farmer.farmerUserName}</td>
                                        
                                         <td>
                                             
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.pId)} className="btn btn-info">View </button>
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