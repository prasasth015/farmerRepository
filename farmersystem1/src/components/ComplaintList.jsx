import React, { Component } from 'react'
import ComplaintService from '../service/ComplaintService'


class ComplaintList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            complaintId: this.props.match.params.complaintId,
                complaint: []
        }
        this.addComplaint = this.addComplaint.bind(this);
        this.back=this.back.bind(this);
        this.deleteComplaint = this.deleteComplaint.bind(this);
    }

    componentDidMount(){
        ComplaintService.getAllComplaint().then((res) => {
            this.setState({ complaint: res.data })
            console.log(res.data);
    });
    
        /* ComplaintService.viewComplaint(this.state.complaintId).then((res) => {
            this.setState({ complaint: res.data })
            console.log(res.data);
    }); */

    }

    deleteComplaint(complaintId) {
        ComplaintService.deleteComplaint(complaintId).then(res => {
            this.setState({ complaint: this.state.complaint.filter(complaints => complaints.complaintId !== complaintId) });
        });
    }
    viewComplaint(complaintId){
        this.props.history.push(`/view-complaint/${complaintId}`);
        
    }

    addComplaint(){
        this.props.history.push(`/add-complaint/:complaintId}`);
    }
    back(){
        this.props.history.push(`/soldProductList`);

    }
    

    render() {
        return (
            <div>
                 <h2 className="text-center">Complaint List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addComplaint}> Add Complaint</button>
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
                                    this.state.complaint.map(
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
        )
    }
}

export default ComplaintList
