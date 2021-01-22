import React, { Component } from 'react'
import FarmerService from '../service/FarmerService'
import { Link } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./FarmerLogin.css";




class FarmerLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            farmerUserName:"",
            farmerPassword:""
                 
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

        //FarmerService.getFarmerById(this.state.farmerUserName);
        //FarmerService.getFarmerById(this.state.farmerUserName).then((res) => {
          FarmerService.login(this.state.farmerUserName,this.state.farmerPassword);
          FarmerService.login(this.state.farmerUserName,this.state.farmerPassword).then((res) => {
          this.setState({farmer:res.data});
          console.log('hello');
          console.log(res.data);
          if(
            res.data.farmerUserName === this.state.farmerUserName &&
            res.data.farmerPassword === this.state.farmerPassword
          ){
            alert("Login Sucessful");
           
            this.props.history.push("/add-farmer/:farmerUserName");
          }
          
          else{
            alert("Wrong Credentials");
          }
        })
       
      }
    render() {
        return (
         
                <div className='background'> 
                <div className="wrapper">
                  <div className="form-wrapper">
                           <div>  <h3 className="title">Log In</h3></div>
                               
          
                   <form >
                   
                   <div className="farmerUserName">
                       <label htmlFor="farmerUserName">Farmer Name</label>
                        <input
                          id="name"
                          type="text"
                          name="userName"
                          placeholder="Enter Name"
                          className="form-control"
                          value={this.state.farmerUserName}
                          onChange={this.changeNameHandler}
                          required
                        />
                      </div><br></br>
                      
                      <div className="password">
                        <label htmlFor="password">UserName</label>
                      
                        <input
                          id="password"
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="form-control "
                          value={this.state.farmerPassword}
                          onChange={this.changeUserPasswordHandler}
                          required
                        />
                      </div>
    
                      <div className="logIn">
                        <button className="button" onClick={this.verifyLogin}>LogIn</button>
                    
                        <div className="la">
                          Don't have an account?{" "}
                          <Link to="/add-farmer/:farmerUserName" >SignUp</Link>
                        </div>
                      </div>
                   
                  </form>
                </div>
                </div>
                
                </div>   
               
              
        );
      }
}
export default FarmerLogin;