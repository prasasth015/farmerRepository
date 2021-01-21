// import React, { Component } from 'react';
// import SupplierService from '../service/SupplierService';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class ViewSupplierComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//                 supplier: []
//         }
     
//     }


//     componentDidMount(){
//         SupplierService.getSupplier().then((res) => {
//             this.setState({ supplier: res.data});
//         });
//     }
  
 
//     render() {
//         return (
//             <div>
//                  <h2 className="text-center">Supplier List</h2>
                
//                  <br></br>
//                  <div className = "row">
//                         <table className = "table table-striped table-bordered">

//                             <thead>
//                                 <tr>
//                                     <th> Supplier Name</th>
//                                     <th> Supplier User Name</th>
//                                     <th> Supplier Address</th>
//                                     <th> Supplier Contact Number</th>
//                                     <th> Supplier Password</th>
//                                     <th> Supplier Confirm password</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.supplier.map(
//                                         supplier => 
//                                         <tr key =  { supplier.supplierUserName} >        
//                                              <td> {supplier.supplierName} </td>   
//                                              <td> {supplier.supplierAddress}</td>
//                                              <td> {supplier.supplierContactNumber}</td>
//                                              <td> {supplier.password}</td>
//                                              <td> {supplier.confirmPassword}</td>                                           
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                         </table>

//                  </div>

//             </div>
//         )
//     }
// }


// export default ViewSupplierComponent;



