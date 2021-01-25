import React, { Component } from 'react'
import "./FarmerLogin.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ComplaintService from '../service/ComplaintService'



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
        
    }
    this.saveComplaint=this.saveComplaint.bind(this);
    
};
componentDidMount()
{
    if(this.state.complaintId === '_add'){
        return
    }else{
        console.log(this.state.farmerUserName);
        console.log(this.state.supplierUserName);
        console.log(this.state.complaintText);
        ComplaintService.saveComplaint(this.state.farmerUserName,this.state.supplierUserName).then((res) =>{
            let complaint =res.data;
            console.log(res.data);
            this.setState({farmerUserName:complaint.farmerUserName, supplierUserName:complaint.supplierUserName,complaintText:complaint.complaintText})
        })
        
       
    }        
}
changeUserNameHandler=(event) => {
    this.setState({farmerUserName: event.target.value});
    console.log(this.state.farmerUserName);

  }

changeNameHandler=(event) => {
    this.setState({supplierUserName: event.target.value});

  }
  changeComplaintHandler=(event) => {
    this.setState({complaintText: event.target.value});
    console.log(this.state.complaintText);
  }


saveComplaint=(e) =>{
    let complaint = {supplierUserName: this.state.supplierUserName, complaintText: this.state.complaintText };
    console.log('complaint => ' + JSON.stringify(complaint));

    // step 5
    if(this.state.complaintId === '_add'){
        ComplaintService.saveComplaint(complaint).then(res =>{
            this.props.history.push('/complaint-list');
        });
    
    }

    

    
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
                                    <div className = "farmerUserName">
                                        <label>Enter your User Name</label>
                                        <input placeholder="User Name" name="userName" className="form-control" 
                                            value={this.state.farmerUserName} onChange={this.changeUserNameHandler}required/>
                                    </div>

                                    <div className = "farmerUserName" >
                                        <label >Enter Supplier UserName </label>
                                        <input placeholder="Supplier UserName" name="UserName" className="form-control" 
                                            value={this.state.supplierUserName} onChange={this.changeNameHandler} required/>
                                    </div>
                                   
                                    <div className = "farmerUserName" >
                                        <label >Enter Your Complaint </label>
                                        <textarea placeholder="Complaint" name="Complaint" className="form-control" 
                                            value={this.state.complaintText} onChange={this.changeComplaintHandler} required/>
                                    </div>
                                    <div className = "form-group" >

                                    <button className="btn btn-success" disabled={this.state.farmerUserName.length===0|| this.state.supplierUserName.length === 0 ||  this.state.complaintText.length === 0}
                                    onClick={this.saveComplaint}>Save</button>
                                    
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