import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
class HeadComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
<<<<<<< HEAD
        
            const mystyle = {
                color: "white",
                textAlign:"left",
                backgroundColor: "#519e8a",
                padding: "10px",
                fontFamily: "Arial",
                
            }
            return (
                <div>
                    <header>   
                        <h3  style={mystyle}>Farmer Assistance System</h3>
                    </header>
                </div>
        
=======
        const mystyle = {
            color: "white",
            textAlign:"left",
            backgroundColor: "#519e8a",
            padding: "10px",
            fontFamily: "Arial"
        }
        return (
            <div>
                <header>
                    
                    <h3  style={mystyle}>Farmer Assistance System</h3>
                  
                </header>
            </div>
>>>>>>> 7f021b18a053ec1debf1dae354bf3af55517a4ef
        )
    }
}

export default HeadComponent