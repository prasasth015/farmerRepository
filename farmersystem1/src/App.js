
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminLogin from './components/AdminLogin';
import ProductComponent from './components/ProductComponent';
import ListProductComponent from './components/ListProductComponent';
import ViewSoldProductComponent from './components/ViewSoldProductComponent'

import AdminViewComplaint from './components/AdminViewComplaint';
import SoldProductComponent from './components/SoldProductComponent';
import ListSoldProductComponent from './components/ListSoldProductComponent';

import CreateSupplierComponent from './components/CreateSupplierComponent';

import FarmerLogin from './components/FarmerLogin';
import FarmerRegistration from './components/FarmerRegistration';

import AddComplaint from './components/AddComplaint';
import ComplaintList from './components/ComplaintList';
import ViewComplaint from './components/ViewComplaint';

import SupplierQuoteComponent from './components/SupplierQuoteComponent';
import ListQuoteComponent from './components/ListQuoteComponent';
import UpdateQuoteComponent from './components/UpdateQuoteComponent';
import ViewQuoteComponent from './components/ViewQuoteComponent';
import SupplierLogin from './components/SupplierLogin';

//import ViewSupplierComponent from './components/ViewSupplierComponent';

function App() {
  return (
    <div>
      <Router>
        
        <div className="container">
          <Switch>
            {/*Admin*/}
            
            <Route path="/adminLogin" component={AdminLogin}></Route>
            <Route path="/productList" component={ListProductComponent}></Route>
            <Route path="/addProduct" component={ProductComponent}></Route>
            <Route path="/soldProductList" component={ListSoldProductComponent}></Route>
            <Route path="/soldProduct" component={SoldProductComponent}></Route>
            <Route path="/viewSoldProduct" component={ViewSoldProductComponent}></Route>
            
            
            {/*supplier*/}

           
            <Route path="/add-supplier/:supplierUserName" component={CreateSupplierComponent}></Route>
            <Route path="/supplierLogin" component={SupplierLogin}></Route>
            
            <Route path="/supplierQuote" component={ListQuoteComponent}></Route>
            
            <Route path="/add-supplierQuote/:quoteId" component={SupplierQuoteComponent}></Route>
            <Route path="/view-supplierQuote/:quoteId" component={ViewQuoteComponent}></Route>
            <Route path="/add-supplierQuote/:quoteId" component={UpdateQuoteComponent}></Route>
            
          {/*Farmer*/}
          <Route path="/" exact component={FarmerLogin}></Route>
            <Route path = "/farmerLogin" component = {FarmerLogin}></Route>
            <Route path = "/add-farmer/:farmerUserName" component = {FarmerRegistration}></Route>
           
            <Route path = "/add-complaint/:complaintId" component = {AddComplaint}></Route>
            <Route path = "/view-complaint/:complaintId" component = {ViewComplaint}></Route>
            <Route path = "/complaint-list" component = {ComplaintList}></Route>
                        
             {/* <Route path="/" exact component={ViewSupplierComponent}></Route> 
             <Route path = "/supplier" component = {ViewSupplierComponent}></Route> */}
          </Switch>
        </div>
        
      </Router>
    </div>
  );
}

export default App;

