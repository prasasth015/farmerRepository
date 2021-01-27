import React, { Component } from 'react'
import ComplaintService from '../service/ComplaintService'
import "./ListQuote.css";


class AdminViewComplaint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adminComplaintView: []
        }
        this.back=this.back.bind(this);
        this.deleteComplaint = this.deleteComplaint.bind(this);
    }



    componentDidMount() {
        ComplaintService.getAllComplaint().then((res) => {
            this.setState({ adminComplaintView: res.data });
        });
    }

    back(){
        this.props.history.push(`/productList`);

    }

    
    deleteComplaint(complaintId) {
        ComplaintService.deleteComplaint(complaintId).then(res => {
            this.setState({ complaint: this.state.complaint.filter(complaints => complaints.complaintId !== complaintId) });
        });
    }
    viewComplaint(complaintId){
        this.props.history.push(`/view-complaint/${complaintId}`);
        
    }

    render() {
        return (
           
                <div className="body_wrap ">
                <div>
                 <h2 className="box_title">Admin Complaint List</h2>
                 
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addComplaint}> Add Complaint</button> */}
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th> Supplier</th>
                                    <th> Complaint</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.adminComplaintView.map(
                                        complaint => 
                                        <tr key = {complaint.complaintId}>
                                            <td>{complaint.farmerUserName}</td>
                                             <td> {complaint.supplierUserName} </td>   
                                             <td> {complaint.complaintText}</td>
                                             
                                             <td>
                                                
                                                 <button  onClick={ () => this.deleteComplaint(complaint.complaintId)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewComplaint(complaint.complaintId)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                    
                                }
                            </tbody>
                            
                        </table>
                        <div >

                        <button className="btn btn-success" onClick={this.back}>Back</button>
                        </div> 

                 </div>
                 </div>

            </div>
        )
    }
}


export default AdminViewComplaint
