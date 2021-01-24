import React, { Component } from 'react'

class ListSoldProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                soldProducts: []
        }
        this.listSellProduct = this.listSellProduct.bind(this);
        this.addComplaint=this.addComplaint.bind(this);
       
      //  this.deleteProduct= this.deleteProduct.bind(this);
       
    }

    listSellProduct(){
        this.props.history.push('/soldProduct'); //doubt
    }
    addComplaint(){
        this.props.history.push('/complaint-list');
    }

    

   

render() {
    return (
        <div>
             <h2 className="text-center">Product List</h2>
             <div className = "row">
                <button className="btn btn-primary" onClick={this.listSellProduct}>Sell Product</button>
                <button className="btn btn-primary" onClick={this.addComplaint} style={{marginLeft:"10px"}}>Complaint Page</button>
             </div>
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Quote Id </th>
                                <th>Supplier UserName</th>
                                <th> Product Name</th>
                                <th> Quantity </th>
                                <th> Quoted Price </th> 
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.soldProducts.map(
                                    soldProduct => 
                                    <tr key = {soldProduct.quoteId}>
                                        <td> {soldProduct.supplierUserName} </td>   
                                         <td> {soldProduct.productName} </td>   
                                         <td> {soldProduct.quantity}</td>
                                         <td> {soldProduct.quotePrice}</td>
                                        
                                         <td>
                                            
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.ViewSoldProduct(soldProduct.id)} className="btn btn-info">View </button>
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

export default ListSoldProductComponent