import React, { Component } from 'react'
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom'

//import 'bootstrap/dist/css/bootstrap.min.css';
class HeadComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        
            const mystyle = {
                color: "white",
                textAlign:"left",
                backgroundColor: "#519e8a",
                padding: "10px",
                fontFamily: "Arial",               
            }
            return (

                <div>
                    {/*
                    <header>   
                 

                        <nav width="400%">
                <ul>
                        
                        <li><Link to="/home">Home</Link></li>
                        <li>Login
                        <ul>
                            <li><Link to="/employees">Admin Login</Link></li>
                            <li><Link to="/supplierLogin">Supplier Login</Link></li>
                            <li><Link to="/farmerLogin">Farmer Login</Link></li>
                        </ul>

                        </li>
                        
                        <li><Link to="/panel">About Us</Link></li>
                        <li><Link to="">Contact US</Link></li>
                        <li><Link to="/purchase">Help</Link></li>
                  </ul>
                  </nav>
                    </header>
                    */}
                </div>
        
            )
    
    }
}

export default HeadComponent