import React, { Component } from 'react'

class FootComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const mystyle = {
            color: "white",
            textAlign:"center",
            backgroundColor: "black",
            bottom:0,
            

    
            padding: "10px",
            fontFamily: "Arial"
        }
        return (
            
                <div>
                    <footer className="footer">
                        <div className="text-muted" ><span className="foot"  >All Rights Reserved 2021</span></div>
                    </footer>
                </div>

                
        )
    }
}

export default FootComponent
