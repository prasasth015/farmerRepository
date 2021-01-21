import React, { Component } from 'react'
import SupplierService from '../service/SupplierService';
import "./CreateSupplier.css";


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

    // this.changeSupplierNameHandler = this.changeSupplierNameHandler.bind(this);
    // this.changeSupplierUserNameHandler = this.changeSupplierUserNameHandler.bind(this);
    // this.changeSupplierAddressHandler = this.changeSupplierAddressHandler.bind(this);
    // this.changeSupplierContactNumberHandler = this.changeSupplierContactNumberHandler.bind(this);
    // this.changePasswordHandler = this.changePasswordHandler.bind(this);
    // this.changeConfirmPasswordHandler = this.changeConfirmPasswordHandler.bind(this);
    this.saveSupplier = this.saveSupplier.bind(this);
  }


  componentDidMount() {

    // step 4
    if (this.state.supplierUserName === '_add') {
      return
      // }else{
      //     SupplierService.getSupplierById(this.state.supplierUserName).then( (res) =>{
      //         let supplier = res.data;
      //         this.setState({name: supplier.name,
      //           supplierUserName: supplier.supplierUserName,
      //           Address : supplier.Address,
      //           contactNumber : supplier.contactNumber,
      //           password : supplier.password,
      //           confirmPassword : supplier.confirmPassword
      //         });
      //     });
    }
  }


  saveSupplier = (e) => {
    e.preventDefault();
    let supplier = { supplierName: this.state.supplierName, supplierUserName: this.state.supplierUserName, supplierAddress: this.state.supplierAddress, supplierContactNumber: this.state.supplierContactNumber, password: this.state.password, confirmPassword: this.state.confirmPassword };
    if(this.state.password !== this.state.confirmPassword)
    alert("Given password and confirm password should be same ");
    console.log('supplier => ' + JSON.stringify(supplier));

    SupplierService.createSupplier(supplier).then(res => {
      this.props.history.push('/createSupplier');

    });
  }

  // changeSupplierNameHandler= (event) => {
  //     this.setState({supplierName: event.target.value});
  // }

  // changeSupplierUserNameHandler= (event) => {
  //     this.setState({supplierUserName: event.target.value});
  // }

  // changeSupplierAddressHandler= (event) => {
  //     this.setState({supplierAddress: event.target.value});
  // }


  // changeSupplierContactNumberHandler= (event) => {
  //     this.setState({supplierContactNumber: event.target.value});
  // }



  // changePasswordHandler= (event) => {
  //     this.setState({password: event.target.value});
  // }

  // changeConfirmPasswordHandler= (event) => {
  //     this.setState({confirmPassword: event.target.value});
  // }

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
          value.length < 5 ? "minimum 5 characaters required" : "";
        break;
      case "supplierUserName":
        formErrors.supplierUserName =
          value.length < 5 ? "minimum 5 characaters required" : "";
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

      <div className="wrapper">
        <div className="form-wrapper">
          <div> <h1 className="title">Farmer Assistance System</h1></div>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="name">
              <label htmlFor="firstName">Supplier Name</label>
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
              <label htmlFor="supplierUserName">UserName</label>
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
              <label htmlFor="Address">Address</label>
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
              <label htmlFor="contactNumber">Contact Number</label>
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
              <label htmlFor="password">Password</label>
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
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="confirmPassword">
              <label htmlFor="password">Confirm Password</label>
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
              <button className="button" onClick={this.saveSupplier}>Create Account</button>
              <small>Already Have an Account? - Log-in</small>

            </div>
          </form>
        </div>
      </div>


    )
  }
}

export default CreateSupplierComponent