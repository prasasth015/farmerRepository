import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            productId: '',
            productName: '',
            productDescription: ''
        }
        this.saveProduct=this.saveProduct.bind(this);
    
    };
    saveProduct=(e) =>{
        alert("hello");
    }
    cancel(){
        this.props.history.push('/employees');
    }
    
    

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                                <div className = "card-body">
                                    <form>
                                        {/*<div className = "form-group">
                                            <label>Farmer UserName </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                            </div>*/}
                                        <div className = "adminUserName" >
                                            <label>Enter Product Name </label>
                                            <input placeholder="Product Name" name="ProductName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeNameHandler}/>
                                        </div>
                                        <br></br> 
                                        <div className = "password" >
                                            <label>Enter Product Description </label>
                                            <input placeholder="Product Description" name="Description" className="form-control" 
                                                value={this.state.productDescription} onChange={this.changeComplaintHandler}/>
                                        </div>
                                        <div className = "form-group" >
    
                                        <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
                                        
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
    
                   </div>
          
        )
    }
    }
    
    
    
    
    export default ProductComponent