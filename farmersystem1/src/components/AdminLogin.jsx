import React, { Component } from 'react'
import AdminLoginService from '../service/AdminLoginService'
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import './AdminLogin.css';

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
        let admin = {adminUserName: this.state.adminUserName, farmerPassword: this.state.adminPassword};
        console.log('admin => ' + JSON.stringify(admin));

        
          AdminLoginService.login(this.state.adminUserName,this.state.adminPassword).then((res) => {
          this.setState({admin:res.data});
          console.log('hello');
          console.log(res.data);
          if(
            res.data.adminUserName === this.state.adminUserName &&
            res.data.adminPassword === this.state.adminPassword
          ){
            alert("Login Sucessful");
           
            this.props.history.push("/adminLogin");
          }
          else{
            alert("Wrong Credentials");
          }
        })
       
      }
      render() {
        return (
          <div>
                <br></br>
                   
                <div className="wrapper">
                  <div className="form-wrapper">
                           <div>  <h3 className="title">Log In</h3></div>
                               
          
                   <form >
                   
                   <div className="adminUserName">
                       <label htmlFor="adminUserName">Admin User Name</label>
                        <input
                          id="name"
                          type="text"
                          name="userName"
                          placeholder="Enter Name"
                          className="form-control"
                          value={this.state.adminUserName}
                          onChange={this.changeNameHandler}
                          required
                        />
                      </div><br></br>
                      
                      <div className="password">
                        <label htmlFor="password">Password</label>
                      
                        <input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="form-control "
                          value={this.state.adminPassword}
                          onChange={this.changeUserPasswordHandler}
                          required
                        />
                      </div>
    
                      <div className="logIn">
                        <button className="button" onClick={this.verifyLogin}>LogIn</button>
                    
                        <div className="la">

                        </div>
                      </div>
                   
                  </form>
                </div>
                </div>
                </div>
                
               
              
        );
      }
}
export default AdminLogin;