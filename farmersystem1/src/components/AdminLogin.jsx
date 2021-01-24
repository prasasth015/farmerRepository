import React, { Component } from 'react'
import AdminLoginService from '../service/AdminLoginService'
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import './AdminLogin.css';
import { Row, Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhone, faEnvelope, faLock, faUndo, faUserPlus, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";


class AdminLogin extends Component {
  constructor(props) {
      super(props)

      this.state = {
          adminUserName:"",
          adminPassword:""
               
      }
      this.verifyLogin=this.verifyLogin.bind(this);
      
  }
  changeNameHandler=(event) => {
    this.setState({adminUserName: event.target.value});

  }
  changeUserPasswordHandler=(event) => {
    this.setState({adminPassword: event.target.value});
  }
  verifyLogin=(e) => {
    e.preventDefault();
      let admin = {adminUserName: this.state.adminUserName, adminPassword: this.state.adminPassword};
      console.log('admin => ' + JSON.stringify(admin));

        AdminLoginService.login(this.state.adminUserName,this.state.adminPassword);
        AdminLoginService.login(this.state.adminUserName,this.state.adminPassword).then((res) => {
        this.setState({admin:res.data});
        console.log(res.data);
        console.log('hello');
        if(
          res.data.adminUserName === this.state.adminUserName &&
          res.data.adminPassword === this.state.adminPassword
        ){
          alert("Login Sucessful");
         
          this.props.history.push("/productList");
        }
        else{
          alert("Wrong Credentials");
        }
      })
     
    }

    



render() {
  return (
    <Row className="justify-content-md-center" style={{ "margin-top": "60px" }}>
  <Col xs={5}>
    <Card className={"border border-dark bg-white-dark"} >
      <Card.Header style={{ "text-align": "center" ,"fontSize":"20px"}}>
        <FontAwesomeIcon icon={faUser} />LOG-IN
                  </Card.Header>
      <Card.Body>
        

        <Form.Row>
          <Form.Group as={Col}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl  required autoComplete="off" type="text" name="adminUserName" value={this.state.adminUserName} onChange={this.changeNameHandler}
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
                name="password" value={this.state.adminPassword} onChange={this.changeUserPasswordHandler}
                className={"bg-white text-dark"} placeholder="Enter password" />
            </InputGroup>
            
          </Form.Group>
        </Form.Row>

        
        </Card.Body>
            <Card.Footer style={{ "text-align": "center"}}>
              <Button size="sm" type="button" variant="success" style={{ "width":"80%","padding":"10px"}} onClick={this.verifyLogin}>
                <FontAwesomeIcon icon={faUserPlus} /> Log-In
                            </Button>{' '}<br></br>
                            
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );

   
    
         
        
  
}
}
export default AdminLogin;