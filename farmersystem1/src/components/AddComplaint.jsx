import React, { Component } from 'react'
import "./FarmerLogin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ComplaintService from '../service/ComplaintService'
import SupplierService from '../service/SupplierService'
import { Navbar } from 'react-bootstrap';


class AddComplaint extends Component{
    constructor(props)
    {
        super(props)
    this.state = {
        // step 2
        complaintId: this.props.match.params.complaintId,
        farmerUserName: '',
        supplierUserName: '',
        complaintText: '',
        supplier:''
        
    }
    this.state = {
        supplier: []
    }
    this.saveComplaint=this.saveComplaint.bind(this);
    
};
changeUserNameHandler=(event) => {
    this.setState({farmerUserName: event.target.value});
    console.log(this.state.farmerUserName);

  }

changeNameHandler=(event) => {
    this.setState({supplierUserName: event.target.value});
    console.log(this.state.supplierUserName);

  }
  changeComplaintHandler=(event) => {
    this.setState({complaintText: event.target.value});
    console.log(this.state.complaintText);
  }

saveComplaint=(e) =>{
    e.preventDefault();
    let complaint = {farmerUserName:this.state.farmerUserName,
        supplierUserName: this.state.supplierUserName, complaintText: this.state.complaintText };
    console.log('complaint => ' + JSON.stringify(complaint));
    SupplierService.getAllSupplier(this.state.supplierUserName);
    if (this.state.farmerUserName == null || this.state.supplierUserName == null || this.state.complaintText == null) {
        this.props.history.push('/add-complaint/:complaintId');
        alert("Please fill all the Mandatory Fields")
      
    }
    else{
    fetch('http://localhost:8082/api/v1/createSupplier')
            .then(response => response.json())
            .then(supplier => this.setState({ supplier: supplier }))

        ComplaintService.saveComplaint(complaint).then(res =>{
            this.props.history.push('/complaint-list');
        }); }

}

cancel(){
    this.props.history.push('/complaint-list');
}
componentDidMount() {
    fetch('http://localhost:8082/api/v1/createSupplier')
        .then(response => response.json())
        .then(supplier => this.setState({ supplier: supplier }))
}

render() {
    
    return (
        
        <div >
           
            <br></br>
               <div className = "container">
               
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Complaint</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "farmerUserName">
                                        <label>Enter your User Name</label>
                                        <input placeholder="User Name" name="userName" className="form-control" 
                                            value={this.state.farmerUserName} onChange={this.changeUserNameHandler}required/>
                                    </div>

                                    {/* <div className = "farmerUserName" >
                                        <label >Supplier UserName </label>
                                        <select placeholder="Supplier UserName" name="UserName" className="form-control" 
                                            onChange={this.changeNameHandler} required/>
                                    </div> */}
                                     <div className="farmerUserName">
                                        <label >Supplier UserName <span style={{color:"red"}}>*</span>  </label>
                                        <select style={{ "width": "100%", "padding": "7px 7px" }} placeholder="Supplier UserName" name="UserName" className="form-control" onChange={this.changeNameHandler}><option selected disabled>Choose Supplier</option>{
                                            this.state.supplier.map(suppliers =>
                                            <option value={this.state.supplierUserName}
                                                onChange={this.changeNameHandler} >{suppliers.supplierUserName}
                                            </option>)
                                        }
                                        </select>
                                    </div>

                                    <div className = "farmerUserName" >
                                        <label >Enter Your Complaint<span style={{color:"red"}}>*</span> </label>
                                        <textarea placeholder="Complaint" name="Complaint" className="form-control" 
                                            value={this.state.complaintText} onChange={this.changeComplaintHandler} required/>
                                    </div>
                                    <div className = "form-group" >

                                    <button className="btn btn-success"
                                    onClick={this.saveComplaint} /*disabled={ this.state.farmerUserName.length === 0 || this.state.complaintText.length === 0 }*/>Save</button>
                                    
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>

               </div>
               
      
    )
}
}




export default AddComplaint