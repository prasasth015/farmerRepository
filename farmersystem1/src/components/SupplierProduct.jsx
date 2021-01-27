import React, { Component } from 'react'
import "./ListQuote.css";
import ProductService from '../service/ProductService';


class SupplierProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: []
        }
        this.addQuote = this.addQuote.bind(this);
        this.goBack = this.goBack.bind(this);

    }

    componentDidMount() {
        ProductService.getAllProduct().then((res) => {
            this.setState({ product: res.data });
        });
    }

    addQuote() {
        this.props.history.push('/add-supplierQuote/_add');
    }

    goBack() {
        this.props.history.push('/supplierQuote');
    }


    render() {
        return (
            <div className="body_wrap ">
                <div>
                    <h2 className="box_title">Product List</h2>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addQuote}> Add Quote</button>
                        <button className="btn btn-primary" style={{ "marginLeft": "10px" }} onClick={this.goBack}> Go Back</button>
                    </div>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Product Name</th>
                                    <th> Product Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.product.map(
                                        products =>
                                            <tr key={products.productId}>
                                                <td> {products.productName} </td>
                                                <td> {products.productDescription}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default SupplierProduct
