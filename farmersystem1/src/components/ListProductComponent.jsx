import React, { Component } from 'react'


class ListProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                products: []
        }
        this.addProduct = this.addProduct.bind(this);
       
      //  this.deleteProduct= this.deleteProduct.bind(this);
       
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
                                <th> Product Id</th>
                                <th> Product Name</th>
                                <th> Product Description</th>
                               
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
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProduct(product.id)} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(product.id)} className="btn btn-info">View </button>
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