import React, { Component } from 'react'
import ProductService from '../service/ProductService'


class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProduct = this.addProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(productId){
        ProductService.deleteProduct(productId).then( res => {
            this.setState({products: this.state.products.filter(product => product.productId !== productId)});
        });
    }
   
   

    componentDidMount(){
        ProductService.getAllProduct().then((res) => {
            this.setState({ products: res.data});
        });
    }
  

    addProduct(){
        this.props.history.push('/addProduct');
    }
    

render() {
    return (
        <div>
             <h2 className="text-center">Product List</h2>
             <div className = "row">
                <button className="btn btn-primary" onClick={this.addProduct}> Add Product</button>
             </div>
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                
                                <th> Product Name</th>
                                <th> Product Description</th>
                                <th>Actions</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product => 
                                    <tr key = {product.productId}>
                                         <td> {product.productName} </td>   
                                         <td> {product.productDescription}</td>
                                        
                                         <td>
                                        
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.productId)} className="btn btn-danger">Delete </button>
                                                
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

export default ListProductComponent