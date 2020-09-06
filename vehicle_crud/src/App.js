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
        </nav>
        </div>
       </Router>
     
    );
  }
}

export default App;