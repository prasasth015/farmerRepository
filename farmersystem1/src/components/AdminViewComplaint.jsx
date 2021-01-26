import React, { Component } from 'react'
import ProductService from '../service/ProductService';
import ComplaintService from '../service/ComplaintService'
import "./ListQuote.css";


class AdminViewComplaint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            admincomplaint: []
        }
       

    }



    componentDidMount() {
        ComplaintService.getAllComplaint().then((res) => {
            this.setState({ admincomplaint: res.data });
        });
    }

   


    render() {
        return (
            <div>
                 <h2 className="text-center">Admin Complaint List</h2>
                 {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addComplaint}> Add Complaint</button>
                 </div> */}
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

                 </div>

            </div>
        )
    }
}


export default AdminViewComplaint
