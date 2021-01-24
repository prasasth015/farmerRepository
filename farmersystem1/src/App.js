
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';



import AdminLogin from './components/AdminLogin';
import ProductComponent from './components/ProductComponent';
import ListProductComponent from './components/ListProductComponent';
import ViewSoldProductComponent from './components/ViewSoldProductComponent';

import AdminViewComplaint from './components/AdminViewComplaint';
import SoldProductComponent from './components/SoldProductComponent';
import ListSoldProductComponent from './components/ListSoldProductComponent';
import ViewPurchaseComponent from './components/ViewPurchaseComponent';

import ListPurchaseComponent from './components/ListPurchaseComponent';
import CreateSupplierComponent from './components/CreateSupplierComponent';
import SupplierQuoteComponent from './components/SupplierQuoteComponent';
import ListQuoteComponent from './components/ListQuoteComponent';
import UpdateQuoteComponent from './components/UpdateQuoteComponent';
import ViewQuoteComponent from './components/ViewQuoteComponent';
import SupplierLogin from './components/SupplierLogin';
import SupplierProduct from './components/SupplierProduct';

import FarmerLogin from './components/FarmerLogin';
import FarmerRegistration from './components/FarmerRegistration';

import AddComplaint from './components/AddComplaint';
import ComplaintList from './components/ComplaintList';
import ViewComplaint from './components/ViewComplaint';

import Home from './components/pages/Home';

import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import about from './components/about';


//import ViewSupplierComponent from './components/ViewSupplierComponent';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      { /* <HeadComponent /> */}
  {/*home*/}
      <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
         
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
            <Route path="/supplierProduct" component={SupplierProduct}></Route>
            
          {/*Farmer*/}
            <Route path = "/farmerLogin" component = {FarmerLogin}></Route>
            <Route path = "/add-farmer/:farmerUserName" component = {FarmerRegistration}></Route>
            <Route path = "/login" component = {AdminLogin}></Route>
            <Route path = "/add-complaint/:farmerUserName" component = {AddComplaint}></Route>
            <Route path = "/view-complaint/:farmerUserName" component = {ViewComplaint}></Route>
    <Route path = "/complaint-list" component = {ComplaintList}></Route>
                        
             {/* purchase*/}
             <Route path="/purchase" component={ListPurchaseComponent}></Route>
             <Route path="/view-employee" component={ViewPurchaseComponent}></Route>

          </Switch>
        </div>
   
      </Router>
    </div>
  );
}

export default App;

