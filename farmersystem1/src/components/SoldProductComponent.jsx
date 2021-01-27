import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SupplierQuoteService from '../service/SupplierQuoteService';
import SoldProductService from '../service/SoldProductService';


class SoldProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            invoiceId: this.props.match.params.invoiceId,
            userName: '',
            productName: '',
            quotePrice: '',
            quantity: '',  
            // supplierQuote: '',
            
        }
        this.state = {
            supplier: []
        
        }
      
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeQuotePriceHandler = this.changeQuotePriceHandler.bind(this);
        this.changeSupplierQuoteHandler =this.changeSupplierQuoteHandler.bind(this);
        // this.saveOrUpdateQuote = this.saveOrUpdateQuote.bind(this);
        this.saveSellProduct=this.saveSellProduct.bind(this);
    }

    // step 3
    componentDidMount() {
        fetch('http://localhost:8082/api/v1/addQuote')
            .then(response => response.json())
            .then(supplier => this.setState({ supplier: supplier }))
    }
    saveSellProduct=(e) =>{
        e.preventDefault();
        let soldProduct = { userName: this.state.userName, productName: this.state.productName, quantity: this.state.quantity, quotePrice: this.state.quotePrice }; //product: this.state.product
        console.log('supplier => ' + JSON.stringify(soldProduct));
     
        SupplierQuoteService.getAllQuote(this.state.userName,this.state.productName);
        if (this.state.userName == null || this.state.productName == null || this.state.quantity == null || this.state.quotePrice == null) {
            this.props.history.push('/soldProduct');
            alert("Please fill all the Mandatory Fields")
          
        }else{
        fetch('http://localhost:8082/api/v1/addQuote')
                .then(response => response.json())
                .then(supplier => this.setState({ supplier: supplier }))
        
            SoldProductService.saveSoldProduct(soldProduct).then(res =>{
                this.props.history.push('/soldProductList');
            });
        }
    
    }

/* 
    saveOrUpdateQuote = (e) => {
        e.preventDefault();
        let quoteId = { userName: this.state.userName, productName: this.state.productName, quantity: this.state.quantity, quotePrice: this.state.quotePrice }; //product: this.state.product
        console.log('supplierQuote => ' + JSON.stringify(quoteId));

        SoldProductService.insertSoldProduct(quoteId).then(res =>{
            this.props.history.push('/soldProductList');
        });
    } */

 

    changeUserNameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }

    changeProductNameHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    changeQuantityHandler = (event) => {
        this.setState({ quantity: event.target.value });
    }

    changeQuotePriceHandler = (event) => {
        this.setState({ quotePrice: event.target.value });
    }

    changeSupplierQuoteHandler = (event) => {
        this.setState({ supplierQuote: event.target.value });
    }

    cancel() {
        this.props.history.push('/soldProductList'); //doubt
    }

    
    

    getTitle() {
        if (this.state.quoteId === '_add') { //doubt
            return <h3 className="quote">Add Product</h3>
        } else {
            return <h3 className="text-center">Sell Product </h3>

        }
    }
    render() {
        return (
            <div >
           
            <br></br>
               <div className = "container">
               
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form >
                                <div className="Product">
                                        <label >Supplier UserName </label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Supplier UserName" name="UserName" className="form-control" onChange={this.changeUserNameHandler}><option selected disabled>Choose Supplier</option>{
                                            this.state.supplier.map(suppliers =>
                                            <option value={this.state.userName}
                                                onChange={this.changeNameHandler} >{suppliers.userName}
                                            </option>)
                                        }
                                        </select>
                                    </div>
                                    
                                    <div className="Product">
                                        {/* <label style={{ "fontWeight": "bold" }}> Product Name: </label>
                                        <input placeholder="Product Name" name="ProductName" className="form-control"
                                            value={this.state.productName} onChange={this.changeProductNameHandler} required/> */}

                                    <label >Product Name </label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Product Name" name="UserName" className="form-control" onChange={this.changeProductNameHandler}><option selected disabled>Choose Product</option>{
                                            this.state.supplier.map(suppliers =>
                                            <option value={this.state.productName}
                                                onChange={this.changeProductNameHandler} >{suppliers.productName}
                                            </option>)
                                        }
                                        </select>
                                    </div>
                                   
                                    <div  className="quotePrice">
                                 <label >Quantity </label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Quantity" name="quotePrice" className="form-control" onChange={this.changeQuantityHandler}><option selected disabled>Choose Quantity</option>{
                                            this.state.supplier.map(suppliers =>
                                            <option value={this.state.quantity}
                                                onChange={this.changeQuantityHandler} >{suppliers.quantity}
                                            </option>)
                                        }
                                        </select>
                                    </div><br></br>

                                    <div className="quotePrice">
                                 <label >Quote Price </label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Quote Price" name="quotePrice" className="form-control" onChange={this.changeQuotePriceHandler}><option selected disabled>Select Quote Price</option>{
                                            this.state.supplier.map(suppliers =>
                                            <option value={this.state.quotePrice}
                                                onChange={this.changeQuotePriceHandler} >{suppliers.quotePrice}
                                            </option>)
                                        }
                                        </select>
                                    </div>
                                    
                                    <div className="button">
                                    <button className="btn btn-success" onClick={this.saveSellProduct} >Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
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

export default SoldProductComponent