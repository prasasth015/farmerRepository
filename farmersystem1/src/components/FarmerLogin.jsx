
      import React, { Component } from 'react'
      import FarmerService from '../service/FarmerService'
      import { Link,Redirect } from "react-router-dom";
      //import "bootstrap/dist/css/bootstrap.min.css";
      import { Row, Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
      import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
      
      import { faLock, faUserPlus, faUser } from "@fortawesome/free-solid-svg-icons";
      
      class FarmerLogin extends Component {
          constructor(props) {
              super(props)
              const token = localStorage.getItem("token")
              let loggedIn = true
              if(token == null){
                  loggedIn = false
              }
      
              this.state = {
                  farmerUserName:"",
                  farmerPassword:"",
                  user:{},
                  loggedIn
                       
              }
              this.verifyLogin=this.verifyLogin.bind(this);
          }
         
          changeNameHandler=(event) => {
            this.setState({farmerUserName: event.target.value});
      
          }
          changeUserPasswordHandler=(event) => {
            this.setState({farmerPassword: event.target.value});
          }
          verifyLogin=(e) => {
            e.preventDefault();
            
              let farmer = {farmerUserName: this.state.farmerUserName, farmerPassword: this.state.farmerPassword};
              console.log('farmer => ' + JSON.stringify(farmer));
              
                FarmerService.login(this.state.farmerUserName,this.state.farmerPassword);
                FarmerService.login(this.state.farmerUserName,this.state.farmerPassword).then((res) => {
                this.setState({farmer:res.data});
                
                console.log(res.data);
                if(
                  res.data.farmerUserName === this.state.farmerUserName ||
                  res.data.farmerPassword === this.state.farmerPassword)
                {
                  localStorage.setItem("token","farmer")
                  this.setState({
                    loggedIn: true
                  })
      
                  //this.props.history.push("/soldProductList");
                  
                }
                else if(res.status === 404 ){
                  this.setState({user: res.data});
                  console.log("applicant=>"+JSON.stringify(this.state.user));
                  alert("wrong");
                }
                /* else 
                {
                  this.setState({user: res.data});
              console.log("applicant=>"+JSON.stringify(this.state.user));
               alert(this.state.user);
                } */
              })
             
            }
    render() {
      const { formErrors } = this.state;
      if(this.state.loggedIn){
        return <Redirect to="/soldProductList"/>
      }

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
                    <FormControl  required autoComplete="off" type="text" name="farmerUserName" value={this.state.farmerUserName} onChange={this.changeNameHandler}
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
                      name="farmerPassword"  value={this.state.farmerPassword} onChange={this.changeUserPasswordHandler}
                      className={"bg-white text-dark"} placeholder="Enter Password" />
                  </InputGroup>
                 
                </Form.Group>
              </Form.Row>

              
            </Card.Body>
            <Card.Footer style={{ "text-align": "center"}}>
              <Button size="sm" type="button" variant="success" style={{ "width":"80%","padding":"10px"}} onClick={this.verifyLogin} disabled={ this.state.farmerUserName.length === 0 || this.state.farmerPassword.length === 0 }>
                <FontAwesomeIcon icon={faUserPlus} /> Log-In
                            </Button>{' '}<br></br>
                            <small><Link to="/add-farmer/:farmerUserName">Don't Have an Account? - SIGN-UP</Link></small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );

         
          
                  }                   
              
        
      }

export default FarmerLogin;