import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import PurchaseService from '../services/PurchaseService'
import "./HomePage1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch } from "react-router-dom";


class HomePage1Component extends Component{

    constructor(props) {
        super(props)
    }  


    render(){
        return(
                <body>
                <div className="wrapper">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><Link to="/purchase">Help</Link></li>
                        
                        <li><a>About Us</a></li>
                        <li><a>Contact US</a></li>
                        <li><a>Login</a>
                        <ul>
                            <li>Admin Login</li>
                            <li>Supplier Login</li>
                            <li>Farmer Login</li>
                        </ul>

                        </li>
                        
                    </ul>


                </div>
                </body>

        )
        
        
    }


}
export default HomePage1Component;