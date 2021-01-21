
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeadComponent from './components/HeadComponent';
import FootComponent from './components/FootComponent';
import AdminLogin from './components/AdminLogin';
import ProductComponent from './components/ProductComponent';
import ListProductComponent from './components/ListProductComponent';
import CreateSupplierComponent from './components/CreateSupplierComponent';
import AdminViewComplaint from './components/AdminViewComplaint';
import SoldProductComponent from './components/SoldProductComponent';
import ListSoldProductComponent from './components/ListSoldProductComponent';
//import ViewSupplierComponent from './components/ViewSupplierComponent';

function App() {
  return (
    <div>
      <Router>
        {<HeadComponent />}
        <div className="container">
          <Switch>
            <Route path="/" exact component={AdminLogin}></Route>
            <Route path="/employees" component={AdminLogin}></Route>
                        
             {/* <Route path="/" exact component={ViewSupplierComponent}></Route> 
             <Route path = "/supplier" component = {ViewSupplierComponent}></Route> */}
          </Switch>
        </div>
        {<FootComponent />}
      </Router>
    </div>
  );
}

export default App;

