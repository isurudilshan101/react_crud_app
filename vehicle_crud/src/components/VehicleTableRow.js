import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class VehicleTableRow extends Component{

    render(){
        return(){
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.color}</td>
                <td>{this.props.number}</td>


            </tr>
        }
    }
}