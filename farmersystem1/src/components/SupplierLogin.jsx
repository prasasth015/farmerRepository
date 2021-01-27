import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SupplierService from '../service/SupplierService';
import { faLock, faUserPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

class SupplierLogin extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")
    let loggedIn = true
    if (token == null) {
      loggedIn = false
    }

    this.state = {
      supplierUserName: "",
      password: "",
      loggedIn

    }
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  changeUserNameHandler = (event) => {
    this.setState({ supplierUserName: event.target.value });

  }
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }
  verifyLogin = (e) => {
    e.preventDefault();

    let supplier = { supplierUserName: this.state.supplierUserName, password: this.state.password };
    console.log('supplier => ' + JSON.stringify(supplier));

    SupplierService.supplierLogin(this.state.supplierUserName, this.state.password);
    SupplierService.supplierLogin(this.state.supplierUserName, this.state.password).then((res) => {
      this.setState({ supplier: res.data });

      console.log(res.data);
      if ( res.data.supplierUserName === this.state.supplierUserName ||
        res.data.password === this.state.password) {
        localStorage.setItem("token", "supplier")
        this.setState({
          loggedIn: true
        })
      }
      else {
        alert("InValid User Name and password");
      }

    })

  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/supplierQuote" />
    }
    return (
      <Row className="justify-content-md-center" style={{ "margin-top": "100px" }}>
        <Col xs={5}>
          <Card className={"border border-dark bg-white-dark"} >
            <Card.Header style={{ "text-align": "center", "fontSize": "20px" }}>
              <FontAwesomeIcon icon={faUser} /> LOG-IN
                </Card.Header>
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl required autoComplete="off" type="text" name="supplierUserName"
                      value={this.state.supplierUserName} onChange={this.changeUserNameHandler}
                      className={"bg-white text-dark"} placeholder="Enter User Name" />
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><FontAwesomeIcon icon={faLock} /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl autoComplete="off" type="password"
                      name="password" value={this.state.password} onChange={this.changePasswordHandler}
                      className={"bg-white text-dark"} placeholder="Enter password" />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ "text-align": "center" }}>
              <Button size="sm" type="button" variant="success" style={{ "width": "80%", "padding": "10px" }} onClick={this.verifyLogin} disabled={this.state.supplierUserName.length === 0 || this.state.password.length === 0}>
                <FontAwesomeIcon icon={faUserPlus} /> LOG-IN
                          </Button>{' '}<br></br>
              <small><Link to="/add-supplier/:supplierUserName">New User? - Sign-Up</Link></small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default SupplierLogin;