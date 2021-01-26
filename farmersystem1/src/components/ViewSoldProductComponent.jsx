/* import React, { Component } from 'react'
import "./ViewQuote.css";
import SoldProductService from '../service/SoldProductService';


class ViewSoldProductComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            invoiceId: this.props.match.params.invoiceId,
            soldProduct: {}
        }
        // this.viewSoldProduct = this.viewSoldProduct.bind(this);
    }

    componentDidMount() {
          SoldProductService.getSoldProductById(this.state.invoiceId).then(res => {
            this.setState({ soldProduct: res.data });
        })
    }
    cancel() {
        this.props.history.push('/soldProductList');
    }
    // viewSoldProduct() {
    //     this.props.history.push('/ViewSoldProduct');
    // }

    render() {
        return (
            <div className="box">
                <br></br>
                <div className="card col-md-6 offset-md-3" style={{height:'30vh',borderRadius: '20px'}}>
                    <h3 className="text-center"> View Sold Product Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> User Name :  </label>
                            <div> {this.state.soldProduct.userName}</div>
                        </div>
                        <div className="row">
                            <label>  Product Name :  </label>
                            <div> {this.state.soldProduct.productName}</div>
                        </div>
                        <div className="row">
                            <label> Quantity :  </label>
                            <div> {this.state.soldProduct.quantity}</div>
                        </div>
                        <div className="row">
                            <label>Quote Price :  </label>
                            <div> {this.state.soldProduct.quotePrice}</div>
                        </div>
                        <div className="cancel"> <button className="btn btn-danger" onClick={this.cancel.bind(this)}  >Back</button></div>
                    </div>
                   
                </div>
               
            </div>
        )
    }
}

export default ViewSoldProductComponent
 */