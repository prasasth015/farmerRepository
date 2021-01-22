import React, { Component } from 'react'
import FarmerService from '../service/FarmerService';
import "./FarmerRegistration.css";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


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

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class FarmerRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      farmerName: '',
      //farmerUserName: this.props.match.params.farmerUserName,
      farmerUserName:'',
      farmerAddress: '',
      farmerContactNo: '',
      farmerPassword: '',
      
      formErrors: {
        farmerName: "",
        farmerUserName: "",
        farmerAddress: "",
        farmerContactNo: "",
        farmerPassword: ""
        
      }
    };

   
  
    this.saveFarmer =this.saveFarmer.bind(this);
  }


  componentDidMount() {

    // step 4
    if (this.state.farmerUserName === '_add') {
      return
      
    }
  }


  saveFarmer = (e) => {
    e.preventDefault();
    let farmer = { farmerName: this.state.farmerName, farmerUserName: this.state.farmerUserName, farmerAddress: this.state.farmerAddress, farmerContactNo: this.state.farmerContactNo, farmerPassword: this.state.farmerPassword };
    if(this.state.password !== this.state.password)
    alert("Given password and confirm password should be same ");
    console.log('farmer => ' + JSON.stringify(farmer));

    FarmerService.register(farmer).then(res => {
      this.props.history.push('/farmerLogin');

    });
  }



  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
          --SUBMITTING--
          farmer Name: ${this.state.name}
          User Name: ${this.state.farmerUserName}
          Address: ${this.state.Address}
          Contact Number: ${this.state.contactNumber}
          password:${this.state.password}
          
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
      case "farmerName":
        formErrors.farmerName =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "farmerUserName":
        formErrors.farmerUserName =
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "farmerAddress":
        formErrors.farmerAddress = addressRegex.test(value)
          ? ""
          : "Invalid Address ";
        break;
      case "farmerContactNo":
        formErrors.farmerContactNo = numberRegex.test(value)
          ? ""
          : "invalid Contact Number";
        break;
      case "farmerPassword":
        formErrors.farmerPassword = passwordRegex.test(value)
          ? ""
          : "Enter valid password";
        break;
     

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {
    const { formErrors } = this.state;
    return (

      <div className="wrapper">
        <div className="form-wrapper">
          <div> <h3 className="title">Farmer Registration</h3></div>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <label htmlFor="firstName">Farmer Name</label>
              <input
                className={formErrors.farmerName.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="farmerName"
                value={this.state.farmerName}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.farmerName.length > 0 && (
                <span className="errorMessage">{formErrors.farmerName}</span>
              )}
            </div>

            <div className="farmerUserName">
              <label htmlFor="farmerUserName">UserName</label>
              <input
                className={formErrors.farmerUserName.length > 0 ? "error" : null}
                placeholder="UserName"
                type="text"
                name="farmerUserName"
                value={this.state.farmerUserName}
                
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.farmerUserName.length > 0 && (
                <span className="errorMessage">{formErrors.farmerUserName}</span>
              )}
            </div>

            <div className="Address">
              <label htmlFor="Address">Address</label>
              <input
                className={formErrors.farmerAddress.length > 0 ? "error" : null}
                placeholder="Address"
                type="Address"
                name="farmerAddress"
                value={this.state.farmerAddress}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.farmerAddress.length > 0 && (
                <span className="errorMessage">{formErrors.farmerAddress}</span>
              )}
            </div>

            <div className="contactNumber">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                className={formErrors.farmerContactNo.length > 0 ? "error" : null}
                placeholder="contactNumber"
                type="contactNumber"
                name="farmerContactNo"
                value={this.state.farmerContactNo}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.farmerContactNo.length > 0 && (
                <span className="errorMessage">{formErrors.farmerContactNo}</span>
              )}
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.farmerPassword.length > 0 ? "error" : null}
                placeholder="farmerPassword"
                type="farmerPassword"
                name="farmerPassword"
                value={this.state.farmerPassword}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.farmerPassword.length > 0 && (
                <span className="errorMessage">{formErrors.farmerPassword}</span>
              )}
            </div>

            

            <div className="createAccount">
              <button className="button" onClick={this.saveFarmer}>Create Account</button>
              <small>Already Have an Account?  <Link to="/farmerLogin" >Log In</Link></small>
              

            </div>
          </form>
        </div>
      </div>


    )
  }
}



export default FarmerRegistration
