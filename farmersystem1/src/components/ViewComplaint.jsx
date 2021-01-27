import React, { Component } from 'react'
import ComplaintService from '../service/ComplaintService'


class ViewComplaint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            complaintId: this.props.match.params.complaintId,
            farmerUserName: this.props.match.params.farmerUserName,
            complaint: []
        }

        this.back=this.back.bind(this);
    }
    back(){
        this.props.history.push('/complaint-list');

    }

    componentDidMount(){
        ComplaintService.viewComplaint(this.state.complaintId).then((res) => {
            this.setState({ complaint: res.data })
            console.log(res.data);
    });
        
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{height:'40vh',borderRadius: '20px'}}>
                    <h4 className = "text-center"> View Complaint Details</h4>
                    <div className = "card-body" >
                    {/* <div className = "row" >
                            <label style={{fontWeight:'bold',fontSize:'medium'}}>UserName: </label>
                            <div> { this.state.complaint.farmerUserName }</div>
                        </div> */}
                        <br></br>
                        <div className = "row" >
                            <label style={{fontWeight:'bold',fontSize:'medium'}}>Supplier UserName: </label>
                            <div style={{ "marginTop": "5px", "marginLeft": "5px" }}> { this.state.complaint.supplierUserName }</div>
                        </div>
                        <br></br>
                        
                        <div className = "row">
                            <label style={{fontWeight:'bold',fontSize: 'medium'}}>Complaint: </label>
                            <div style={{ "marginTop": "5px", "marginLeft": "5px" }} >{ this.state.complaint.complaintText }</div>
                        </div>
                        <br></br>

                        <div className = "row" >

                            <button className="btn btn-success" onClick={this.back}>Back</button>
                        </div>
                                    
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewComplaint
