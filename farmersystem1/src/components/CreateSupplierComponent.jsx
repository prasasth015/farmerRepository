import React, { Component } from 'react'
// import SupplierService from '../service/SupplierService';
import "./CreateSupplier.css";
import { Link } from "react-router-dom";


const addressRegex = RegExp(
  /^[#.0-9a-zA-Z\s,-]+$/
);

const numberRegex = RegExp(
  /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
);

const passwordRegex = RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class CreateSupplierComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      supplierName: '',
      supplierUserName: this.props.match.params.supplierUserName,
      supplierAddress: '',
      supplierContactNumber: '',
      password: '',
      confirmPassword: '',
      formErrors: {
        supplierName: "",
        supplierUserName: "",
        supplierAddress: "",
        supplierContactNumber: "",
        password: "",
        confirmPassword: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
          --SUBMITTING--
          Supplier Name: ${this.state.name}
          User Name: ${this.state.supplierUserName}
          Address: ${this.state.Address}
          Contact Number: ${this.state.contactNumber}
          password:${this.state.password}
          confirmPassword:${this.state.confirmPassword}
        `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "supplierName":
        formErrors.supplierName =
          value.length < 5 ? "minimum 5 characters required" : "";
        break;
      case "supplierUserName":
        formErrors.supplierUserName =
          value.length < 5 ? "minimum 5 characters required" : "";
        break;
      case "supplierAddress":
        formErrors.supplierAddress = addressRegex.test(value)
          ? ""
          : "Invalid Address ";
        break;
      case "supplierContactNumber":
        formErrors.supplierContactNumber = numberRegex.test(value)
          ? ""
          : "invalid Contact Number";
        break;
      case "password":
        formErrors.password = passwordRegex.test(value)
          ? ""
          : "Enter valid password";
        break;
      case "confirmPassword":
        formErrors.confirmPassword = passwordRegex.test(value) ? "" : "Enter valid password";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (

      <div className="wrap">
        <div className="form_wrapper">
          <div> <h1 className="title">Sign-Up</h1></div>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <label htmlFor="firstName" className="Lable">Supplier Name</label>
              <input
                className={formErrors.supplierName.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="supplierName"
                value={this.state.supplierName}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.supplierName.length > 0 && (
                <span className="errorMessage">{formErrors.supplierName}</span>
              )}
            </div>

            <div className="supplierUserName">
              <label htmlFor="supplierUserName" className="Lable">UserName</label>
              <input
                className={formErrors.supplierUserName.length > 0 ? "error" : null}
                placeholder="UserName"
                type="text"
                name="supplierUserName"
                value={this.state.supplierUserName}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.supplierUserName.length > 0 && (
                <span className="errorMessage">{formErrors.supplierUserName}</span>
              )}
            </div>

            <div className="Address">
              <label htmlFor="Address" className="Lable">Address</label>
              <input
                className={formErrors.supplierAddress.length > 0 ? "error" : null}
                placeholder="Address"
                type="Address"
                name="supplierAddress"
                value={this.state.supplierAddress}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.supplierAddress.length > 0 && (
                <span className="errorMessage">{formErrors.supplierAddress}</span>
              )}
            </div>

            <div className="contactNumber">
              <label htmlFor="contactNumber" className="Lable">Contact Number</label>
              <input
                className={formErrors.supplierContactNumber.length > 0 ? "error" : null}
                placeholder="contactNumber"
                type="contactNumber"
                name="supplierContactNumber"
                value={this.state.supplierContactNumber}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.supplierContactNumber.length > 0 && (
                <span className="errorMessage">{formErrors.supplierContactNumber}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password" className="Lable">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="password"
                type="password"
                name="password"
                value={this.state.password}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage" >{formErrors.password}</span>
              )}
            </div>

            <div className="confirmPassword">
              <label htmlFor="password" className="Lable">Confirm Password</label>
              <input
                className={formErrors.confirmPassword.length > 0 ? "error" : null}
                placeholder="confirmPassword"
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.confirmPassword.length > 0 && (
                <span className="errorMessage">{formErrors.confirmPassword}</span>
              )}
            </div>

            <div className="createAccount">
              <button className="button"  disabled={this.state.supplierName.length === 0 || this.state.supplierUserName.length === 0|| this.state.supplierAddress.length === 0 || this.state.supplierConatactNumber.length === 0 || this.state.password.length === 0|| this.state.confirmPassword.length === 0} ><Link to="/supplierLogin" className="link">Create Account</Link></button>
              <small><Link to="/supplierLogin">Already Have an Account? - Log-in</Link></small>
              
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateSupplierComponent
