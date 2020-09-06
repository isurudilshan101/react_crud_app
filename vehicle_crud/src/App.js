import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import CreateVehicle from './components/create-vehicle.cpmponent';
import EditVehicle from './components/etid-vehicle.component';
import VehicleList from './components/vehicle-list.component';


class App extends Component{

  render(){
    return(
      
       <Router>
          <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link to={'/'} className="navbar-brand">React Vehicle CRUD by Isuru</Link>
         <div className="collapse navbar-collaps" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-link">
              <Link to={'/'} className="nav-link">Home</Link>
            </li>

            <li className="nav-link">
              <Link to={'/'} className="nav-link">Edit Vehicle</Link>
            </li>

            <li className="nav-link">
              <Link to={'/edit-vehicle/:id'} className="nav-link">Create Vehicle</Link>
            </li>

            <li className="nav-link">
              <Link to={'/vehicle-list'} className="nav-link">Vehicle List</Link>
            </li>
            
          </ul>
         </div>
         <br/>
         <h2>Welcome!</h2>
        </nav>

        </div>
       </Router>
     
    );
  }
}

export default App;