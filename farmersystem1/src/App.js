
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom'

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeadComponent from './components/HeadComponent';
import FootComponent from './components/FootComponent';
import AdminLogin from './components/AdminLogin';
import ProductComponent from './components/ProductComponent';
import ListProductComponent from './components/ListProductComponent';

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
import ListPurchaseComponent from './components/ListPurchaseComponent';

import CreatePurchaseComponent from './components/CreatePurchaseComponent';
import ViewPurchaseComponent from './components/ViewPurchaseComponent';


/* */
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
//import ViewSupplierComponent from './components/ViewSupplierComponent';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      { /* <HeadComponent /> */}
  
                  

        <div className="container">
          <Switch>
            {/*Home*/}
            <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
                            
                            
                            <Route path = "/purchase" component = {ListPurchaseComponent}></Route>
                            <Route path = "/add-employee/:id" component = {CreatePurchaseComponent}></Route>
                            <Route path = "/view-employee/:purchaseId" component = {ViewPurchaseComponent}></Route>
                            
            {/*Admin*/}
           
            <Route path="/employees" component={AdminLogin}></Route>
            {/*supplier*/}

           
            <Route path="/add-supplier/:supplierUserName" component={CreateSupplierComponent}></Route>
            <Route path="/supplierLogin" component={SupplierLogin}></Route>
            <Route path="/supplierQuote" component={ListQuoteComponent}></Route>
            
            <Route path="/add-supplierQuote/:quoteId" component={SupplierQuoteComponent}></Route>
            <Route path="/view-supplierQuote/:quoteId" component={ViewQuoteComponent}></Route>
            <Route path="/add-supplierQuote/:quoteId" component={UpdateQuoteComponent}></Route>
            
          {/*Farmer*/}
            <Route path = "/farmerLogin" component = {FarmerLogin}></Route>
            <Route path = "/add-farmer/:farmerUserName" component = {FarmerRegistration}></Route>
            <Route path = "/login" component = {AdminLogin}></Route>
            <Route path = "/add-complaint/:farmerUserName" component = {AddComplaint}></Route>
            <Route path = "/view-complaint/:farmerUserName" component = {ViewComplaint}></Route>
            <Route path = "/complaint-list" component = {ComplaintList}></Route>
                        
             
          </Switch>
        </div>
       
      </Router>
    </div>
  );
}

export default App;

