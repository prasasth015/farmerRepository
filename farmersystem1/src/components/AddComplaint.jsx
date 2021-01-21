import React, { Component } from 'react'
import "./FarmerLogin.css";
import 'bootstrap/dist/css/bootstrap.min.css';



class AddComplaint extends Component{
    constructor(props)
    {
        super(props)
    this.state = {
        // step 2
        farmerUserName: this.props.match.params.farmerUserName,
        
        supplierUserName: '',
        complaintText: '',
        
    }
    this.saveComplaint=this.saveComplaint.bind(this);
    
};
saveComplaint=(e) =>{
    alert("hello");
}
cancel(){
    this.props.history.push('/complaint-list');
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
                                    {/*<div className = "form-group">
                                        <label>Farmer UserName </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                        </div>*/}
                                    <div className = "farmerUserName" >
                                        <label >Enter Supplier UserName </label>
                                        <input placeholder="Supplier UserName" name="UserName" className="form-control" 
                                            value={this.state.supplierUserName} onChange={this.changeNameHandler}/>
                                    </div>
                                    <br></br> 
                                    <div className = "farmerUserName" >
                                        <label >Enter Your Complaint </label>
                                        <input placeholder="Complaint" name="Complaint" className="form-control" 
                                            value={this.state.complaintText} onChange={this.changeComplaintHandler}/>
                                    </div>
                                    <div className = "form-group" >

                                    <button className="btn btn-success" onClick={this.saveComplaint}>Save</button>
                                    
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