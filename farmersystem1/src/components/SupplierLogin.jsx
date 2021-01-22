import React, { Component } from 'react'
// import SupplierService from '../service/SupplierService'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreateSupplier.css";
import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';


class SupplierLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      supplierUserName: "",
      password: ""

    }

  }

  changeNameHandler = (event) => {
    this.setState({ supplierUserName: event.target.value });

}
changeUserPasswordHandler = (event) => {
    this.setState({ password: event.target.value });
}

  render() {
    return (
      <div className="login-wrap">
        <div className="login_wrapper">
          <div> <h1 className="loginTitle">Log-In</h1></div>
          <form>
            <div className="supplierUserName">
              <label htmlFor="supplierUserName" className="loginLable">UserName</label>
              <input
                //className={formErrors.supplierUserName.length > 0 ? "error" : null}
                placeholder="UserName"
                type="text"
                name="supplierUserName"
                value={this.state.supplierUserName}
                
                onChange={this.handleChange}
              />
              {/* {formErrors.supplierUserName.length > 0 && (
                <span className="errorMessage">{formErrors.supplierUserName}</span>
              )} */}
            </div>

            <div className="password">
              <label htmlFor="password" className="loginLable">Password</label>
              <input
                // className={formErrors.password.length > 0 ? "error" : null}
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
                noValidate
                onChange={this.handleChange}
              />
              {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )} */}
            </div>
            <div className="createAccount">
            <Button className="button"  disabled={ this.state.supplierUserName.length === 0 || this.state.password.length === 0 } onClick={this.saveSupplier}><Link to="/supplierQuote" className="link">Log-In</Link></Button>
              <small><Link to="/add-supplier/:supplierUserName">New Supplier? - Sign-Up</Link></small>

            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SupplierLogin;