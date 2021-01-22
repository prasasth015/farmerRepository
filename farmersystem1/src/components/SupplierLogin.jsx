import React, { Component } from 'react'
// import SupplierService from '../service/SupplierService'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';


const passwordRegex = RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
);

class SupplierLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      supplierUserName: "",
      password: ""

    }
    this.quoteList = this.quoteList.bind(this);
  }

  changeSupplierUserNameHandler = (event) => {
    this.setState({ supplierUserName: event.target.value });

}
changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
}

quoteList() {
  this.props.history.push('/supplierQuote');
}

handleChange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  let formErrors = { ...this.state.formErrors };

  switch (name) {
   
    case "supplierUserName":
      formErrors.supplierUserName =
        value.length < 5 ? "minimum 5 characters required" : "";
      break;
 
    case "password":
      formErrors.password = passwordRegex.test(value)
        ? ""
        : "Enter valid password";
      break;
   

    default:
      break;
  }

  this.setState({ formErrors, [name]: value }, () => console.log(this.state));
};



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
                required
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
               required
                onChange={this.handleChange}
              />
              {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )} */}
            </div>
            <div className="createAccount">
            <Button className="button"  disabled={ this.state.supplierUserName.length === 0 || this.state.password.length === 0 } onClick={this.quoteList}>Log-In</Button>
              <small><Link to="/add-supplier/:supplierUserName">New Supplier? - Sign-Up</Link></small>

            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SupplierLogin;