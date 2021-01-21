import React, { Component } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
class HeadComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div >
                <header className="header">
                    <nav>
                        < div className="th">
                            Farmer Assistance System
                         </div >
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeadComponent