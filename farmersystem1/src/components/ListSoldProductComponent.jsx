import React, { Component } from 'react'
import SoldProductService from '../service/SoldProductService';
import SupplierQuoteService from '../service/SupplierQuoteService';

class ListSoldProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                soldProducts: []
        }
        this.listSellProduct = this.listSellProduct.bind(this);
        this.viewSoldProduct = this.viewSoldProduct.bind(this);
        this.viewSupplierQuote = this.viewSupplierQuote.bind(this);
        
       
       
      
       
    }

    listSellProduct(){
        this.props.history.push('/soldProduct'); 
    }

    viewSoldProduct(invoiceId) {
        this.props.history.push(`/viewSoldProduct/${invoiceId}`);
    }

    viewSupplierQuote(){
        this.props.history.push('/quoteList'); 
    }

    
    
    
    componentDidMount() {
        SoldProductService.getAllQuote().then((res) => {
            this.setState({ soldProducts: res.data });
        });
    }

   

render() {
    return (
        <div>
             <h2 className="text-center">Product List</h2>
             <div className = "row">
                <button className="btn btn-primary" onClick={this.listSellProduct}>Sell Product</button>
                <button   style={{"marginLeft":"10px"}} className="btn btn-primary" onClick={this.viewSupplierQuote}> View Supplier Quote</button>
             </div>
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                               
                                <th>Supplier UserName</th>
                                <th> Product Name</th>
                                <th> Quantity </th>
                                <th> Quoted Price </th> 
                                <th> Actions</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.soldProducts.map(
                                    soldProduct => 
                                    <tr key = {soldProduct.invoiceId}>
                                        <td> {soldProduct.userName} </td>   
                                         <td> {soldProduct.productName} </td>   
                                         <td> {soldProduct.quantity}</td>
                                         <td> {soldProduct.quotePrice}</td>
                                        
                                         <td>
                                            
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewSoldProduct(soldProduct.invoiceId)} className="btn btn-info">View </button>
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