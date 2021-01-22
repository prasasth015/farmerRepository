// import React, { Component } from 'react'
//  import SupplierService from '../service/SupplierService';
// import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
// import "./CreateSupplier.css";
// import { Link } from "react-router-dom";


// const addressRegex = RegExp(
//   /^[#.0-9a-zA-Z\s,-]+$/
// );

// const numberRegex = RegExp(
//   /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
// );

// const passwordRegex = RegExp(
//   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
// );

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

// class CreateSupplierComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       supplierName: '',
//       supplierUserName: this.props.match.params.supplierUserName,
//       supplierAddress: '',
//       supplierContactNumber: '',
//       password: '',
//       confirmPassword: '',
//       formErrors: {
//         supplierName: "",
//         supplierUserName: "",
//         supplierAddress: "",
//         supplierContactNumber: "",
//         password: "",
//         confirmPassword: ""
//       }
//     };
//     this.saveSupplier = this.saveSupplier.bind(this);
//     this.supplierLogin = this.supplierLogin.bind(this);
//   }


//   componentDidMount() {

//     // step 4
//     if (this.state.supplierUserName === '_add') {
//       return
//       // }else{
//       //     SupplierService.getSupplierById(this.state.supplierUserName).then( (res) =>{
//       //         let supplier = res.data;
//       //         this.setState({name: supplier.name,
//       //           supplierUserName: supplier.supplierUserName,
//       //           Address : supplier.Address,
//       //           contactNumber : supplier.contactNumber,
//       //           password : supplier.password,
//       //           confirmPassword : supplier.confirmPassword
//       //         });
//       //     });
//     }
//   }

//   saveSupplier = (e) => {
//     e.preventDefault();
//     let supplier = { supplierName: this.state.supplierName, supplierUserName: this.state.supplierUserName, supplierAddress: this.state.supplierAddress, supplierContactNumber: this.state.supplierContactNumber, password: this.state.password, confirmPassword: this.state.confirmPassword };
//     if (this.state.password !== this.state.confirmPassword)
//       alert("Given password and confirm password should be same ");
//     console.log('supplier => ' + JSON.stringify(supplier));
    
//     SupplierService.createSupplier(supplier).then(res => {
//       this.props.history.push('/createSupplier');

//     });
//   }


//   handleSubmit = e => {
//     e.preventDefault();

//     if (formValid(this.state)) {
//       console.log(`
//           --SUBMITTING--
//           Supplier Name: ${this.state.name}
//           User Name: ${this.state.supplierUserName}
//           Address: ${this.state.Address}
//           Contact Number: ${this.state.contactNumber}
//           password:${this.state.password}
//           confirmPassword:${this.state.confirmPassword}
//         `);
//     } else {
//       console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
//     }
//   };

//   handleChange = e => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };

//     switch (name) {
//       case "supplierName":
//         formErrors.supplierName =
//           value.length < 5 ? "minimum 5 characters required" : "";
//         break;
//       case "supplierUserName":
//         formErrors.supplierUserName =
//           value.length < 5 ? "minimum 5 characters required" : "";
//         break;
//       case "supplierAddress":
//         formErrors.supplierAddress = addressRegex.test(value)
//           ? ""
//           : "Invalid Address ";
//         break;
//       case "supplierContactNumber":
//         formErrors.supplierContactNumber = numberRegex.test(value)
//           ? ""
//           : "invalid Contact Number";
//         break;
//       case "password":
//         formErrors.password = passwordRegex.test(value)
//           ? ""
//           : "Enter valid password";
//         break;
//       case "confirmPassword":
//         formErrors.confirmPassword = passwordRegex.test(value) ? "" : "Enter valid password";
//         break;

//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//   };


//   supplierLogin() {
//     this.props.history.push('/supplierLogin');
//   }
  

//   render() {
//     const { formErrors } = this.state;

//     return (

//       <div className="wrapper">
//         <div className="supplierForm">
//           <div> <h3 className="supplierTitle">Sign-Up</h3></div>
//           <form onSubmit={this.handleSubmit}>
//             <div className="name">
//               <label htmlFor="firstName" className="Lable">Supplier Name<span className="asterisk">*</span></label>
//               <input className="supplierInput"
//                 className={formErrors.supplierName.length > 0 ? "error" : null}
//                 placeholder="Name"
//                 type="text"
//                 name="supplierName"
//                 value={this.state.supplierName}
//                 required
//                 onChange={this.handleChange}
//               />
//               {formErrors.supplierName.length > 0 && (
//                 <span className="errorMessage">{formErrors.supplierName}</span>
//               )}
//             </div>

//             <div className="supplierUserName">
//               <label htmlFor="supplierUserName" className="Lable">UserName<span className="asterisk">*</span></label>
//               <input className="supplierInput" 
//                 className={formErrors.supplierUserName.length > 0 ? "error" : null}
//                 placeholder="User Name"
//                 type="text"
//                 name="supplierUserName"
//                 value={this.state.supplierUserName}
//                 required
//                 onChange={this.handleChange}
//               />
//               {formErrors.supplierUserName.length > 0 && (
//                 <span className="errorMessage">{formErrors.supplierUserName}</span>
//               )}
//             </div>

//             <div className="contactNumber">
//               <label htmlFor="contactNumber" className="addressLable">Contact Number<span className="asterisk">*</span></label>
//               <input className="supplierInput"
//                 className={formErrors.supplierContactNumber.length > 0 ? "error" : null}
//                 placeholder="contactNumber"
//                 type="contactNumber"
//                 name="supplierContactNumber"
//                 value={this.state.supplierContactNumber}
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.supplierContactNumber.length > 0 && (
//                 <span className="errorMessage">{formErrors.supplierContactNumber}</span>
//               )}
//             </div>

//             <div className="password">
//               <label htmlFor="password" className="Lable">Password<span className="asterisk">*</span></label>
//               <input className="supplierInput"
//                 className={formErrors.password.length > 0 ? "error" : null}
//                 placeholder="password"
//                 type="password"
//                 name="password"
//                 value={this.state.password}
//                required
//                 onChange={this.handleChange}
//               />
//               {formErrors.password.length > 0 && (
//                 <span className="errorMessage" >{formErrors.password}</span>
//               )}
//             </div>

//             <div className="confirmPassword">
//               <label htmlFor="password" className="Lable">Confirm Password<span className="asterisk">*</span></label>
//               <input className="supplierInput"
//                 className={formErrors.confirmPassword.length > 0 ? "error" : null}
//                 placeholder="confirmPassword"
//                 type="password"
//                 name="confirmPassword"
//                 value={this.state.confirmPassword}
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.confirmPassword.length > 0 && (
//                 <span className="errorMessage">{formErrors.confirmPassword}</span>
//               )}
//             </div>

//             <div className="Address">
//               <label htmlFor="Address"  className="Lable">Address<span className="asterisk">*</span></label>
//               <textarea className="supplierInput"
//                 className={formErrors.supplierAddress.length > 0 ? "error" : null}
//                 placeholder="Address"
//                 type="text"
//                 name="supplierAddress"
//                 value={this.state.supplierAddress}
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.supplierAddress.length > 0 && (
//                 <span className="errorMessage">{formErrors.supplierAddress}</span>
//               )}
//             </div>

//             <div className="createAccount">
//               <Button className="button"  onClick={this.saveSupplier} disabled={this.state.supplierName.length === 0 || this.state.supplierUserName.length === 0|| this.state.supplierAddress.length === 0 || this.state.supplierContactNumber.length === 0 || this.state.password.length === 0|| this.state.confirmPassword.length === 0}>Create Account </Button>
//               <small><Link to="/supplierLogin">Already Have an Account? - Log-in</Link></small>
              
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }


// export default CreateSupplierComponent





import React, { Component } from 'react';
import { Row, Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SupplierService from '../service/SupplierService';
import { faPhone, faEnvelope, faLock, faUndo, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
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
      supplierUserName:'',
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
    if (this.state.password !== this.state.confirmPassword)
      alert("Given password and confirm password should be same ");
    console.log('supplier => ' + JSON.stringify(supplier));

    SupplierService.createSupplier(supplier).then(res => {
      this.props.history.push('/createSupplier');

    });
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
          : "Enter valid password (A-z),(!@#),(0-9)";
        break;
      case "confirmPassword":
        formErrors.confirmPassword = passwordRegex.test(value) ? "" : "Enter valid password (A-z),(!@#),(0-9)";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <Row className="justify-content-md-center" style={{ "margin-top": "60px" }}>
        <Col xs={5}>
          <Card className={"border border-dark bg-white-dark"} >
            <Card.Header style={{ "text-align": "center" ,"fontSize":"20px"}}>
              <FontAwesomeIcon icon={faUsers} />SIGN-UP
                        </Card.Header>
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.supplierName.length > 0 ? "error" : null} autoComplete="off" type="text" name="supplierName" value={this.state.supplierName} onChange={this.handleChange}
                      className={"bg-white text-dark "} placeholder="Enter Name" />
                  </InputGroup>
                  {formErrors.supplierName.length > 0 && (
                    <span className="errorMessage">{formErrors.supplierName}</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.supplierUserName.length > 0 ? "error" : null} required autoComplete="off" type="text" name="supplierUserName" value={this.state.supplierUserName} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter User Name" />
                  </InputGroup>
                  {formErrors.supplierUserName.length > 0 && (
                    <span className="errorMessage">{formErrors.supplierUserName}</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.supplierAddress.length > 0 ? "error" : null} required autoComplete="off" type="textarea" name="supplierAddress" value={this.state.supplierAddress} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter Address" />
                  </InputGroup>
                  {formErrors.supplierAddress.length > 0 && (
                    <span className="errorMessage">{formErrors.supplierAddress}</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.supplierContactNumber.length > 0 ? "error" : null} autoComplete="off" type="contactNumber"
                      name="supplierContactNumber" value={this.state.supplierContactNumber} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter Contact Number" />
                  </InputGroup>
                  {formErrors.supplierContactNumber.length > 0 && (
                    <span className="errorMessage">{formErrors.supplierContactNumber}</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.confirmPassword.length > 0 ? "error" : null} autoComplete="off" type="password"
                      name="password" value={this.state.password} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter password" />
                  </InputGroup>
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.confirmPassword.length > 0 ? "error" : null} autoComplete="off" type="password" name="confirmPassword"
                      value={this.state.confirmPassword} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter Confirm password" />
                  </InputGroup>
                  {formErrors.confirmPassword.length > 0 && (
                    <span className="errorMessage">{formErrors.confirmPassword}</span>
                  )}
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ "text-align": "center"}}>
              <Button size="sm" type="button" variant="success" style={{ "width":"80%","padding":"10px"}} onClick={this.saveSupplier}>
                <FontAwesomeIcon icon={faUserPlus} /> SIGN-UP
                            </Button>{' '}<br></br>
                            <small><Link to="/supplierLogin">Already Have an Account? - Log-in</Link></small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default CreateSupplierComponent