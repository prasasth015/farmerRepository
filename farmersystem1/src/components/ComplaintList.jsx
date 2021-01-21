import React, { Component } from 'react'


class ComplaintList extends Component {
    constructor(props) {
        super(props)

        this.state = {
                complaints: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(farmerUserName){
        alert("Are you sure u want to delete this");
        
    }
    viewEmployee(farmerUserName){
        this.props.history.push(`/view-employee/${farmerUserName}`);
    }
    
    componentDidMount(){
        
    }

    addEmployee(){
        this.props.history.push('/add-complaint/:farmerUserName');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Complaint List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Complaint</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Supplier</th>
                                    <th> Complaint</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.complaints.map(
                                        complaint => 
                                        <tr key = {complaint.farmerUserName}>
                                             <td> {complaint.supplierUserName} </td>   
                                             <td> {complaint.complaintText}</td>
                                             
                                             <td>
                                                
                                                 <button  onClick={ () => this.deleteEmployee(complaint.farmerUserName)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(complaint.farmerUserName)} className="btn btn-info">View </button>
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

export default ComplaintList
