import React, { Component } from 'react'
import FarmerService from '../service/FarmerService';


import { Link } from "react-router-dom";


import { Row, Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faEnvelope, faLock, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";



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
          : "Enter valid password (A-z),(!@#),(0-9)";
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
                    <FormControl className={formErrors.farmerName.length > 0 ? "error" : null} autoComplete="off" type="text" name="farmerName" value={this.state.farmerName} onChange={this.handleChange}
                      className={"bg-white text-dark "} placeholder="Enter Name" />
                  </InputGroup>
                  {formErrors.farmerName.length > 0 && (
                    <span className="errorMessage">{formErrors.farmerName}</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.farmerUserName.length > 0 ? "error" : null} required autoComplete="off" type="text" name="farmerUserName" value={this.state.farmerUserName} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter User Name" />
                  </InputGroup>
                  {formErrors.farmerUserName.length > 0 && (
                    <span className="errorMessage">{formErrors.farmerUserName}</span>
                  )}
                </Form.Group>
              </Form.Row>

              

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.farmerContactNo.length > 0 ? "error" : null} autoComplete="off" type="contactNumber"
                      name="farmerContactNo" value={this.state.farmerContactNo} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter Contact Number" />
                  </InputGroup>
                  {formErrors.farmerContactNo.length > 0 && (
                    <span className="errorMessage">{formErrors.farmerContactNo}</span>
                  )}
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.farmerPassword.length > 0 ? "error" : null} autoComplete="off" type="password"
                      name="farmerPassword" value={this.state.farmerPassword} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter Password" />
                  </InputGroup>
                  {formErrors.farmerPassword.length > 0 && (
                    <span className="errorMessage">{formErrors.farmerPassword}</span>
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl className={formErrors.farmerAddress.length > 0 ? "error" : null} required autoComplete="off" type="textarea" name="farmerAddress" value={this.state.farmerAddress} onChange={this.handleChange}
                      className={"bg-white text-dark"} placeholder="Enter Address" />
                  </InputGroup>
                  {formErrors.farmerAddress.length > 0 && (
                    <span className="errorMessage">{formErrors.farmerAddress}</span>
                  )}
                </Form.Group>
              </Form.Row>

              
            </Card.Body>
            <Card.Footer style={{ "text-align": "center"}}>
              <Button size="sm" type="button" variant="success" style={{ "width":"80%","padding":"10px"}} onClick={this.saveFarmer}disabled={this.state.farmerPassword.length === 0 || this.state.farmerName.length === 0 || this.state.farmerUserName.length === 0 || this.state.farmerAddress.length === 0 || this.state.farmerContactNo.length === 0}>
                <FontAwesomeIcon icon={faUserPlus} /> SIGN-UP
                            </Button>{' '}<br></br>
                            <small><Link to="/farmerLogin">Already Have an Account? - Log-in</Link></small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );

     
    
  }
}



export default FarmerRegistration
