import React, { Component } from 'react'


class ViewComplaint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            farmerUserNam: this.props.match.params.farmerUserNam,
            complaint: {}
        }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{height:'30vh',borderRadius: '20px'}}>
                    <h4 className = "text-center"> View Complaint Details</h4>
                    <div className = "card-body" >
                        <div className = "row" >
                            <label style={{fontWeight:'bold',fontSize:'medium'}}>Supplier UserName: </label>
                            <div> { this.state.complaint.supplierUserName }</div>
                        </div>
                        <br></br>
                        
                        <div className = "row">
                            <label style={{fontWeight:'bold',fontSize: 'medium'}}>Complaint: </label>
                            <div> { this.state.complaint.complaintText }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewComplaint
