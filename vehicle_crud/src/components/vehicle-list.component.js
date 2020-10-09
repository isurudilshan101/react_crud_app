import React,{Component} from 'react';
import axios from 'axios';
import Table from 'react-boostrap/Table';
import VehicleTableRow from './VehicleTableRow';

export default class VehicleList extends Component{

    constructor(props){
        super(props)
        this.state={
            vehicles: []
        };

        this.componentDidMount(){
            axios.get('http://localhost:4000/vehicles')
            .then(res=>{
                this.setState({
                        vehicles:res.data
                });
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        DataTable(){
            return this.state.vehicles.map((res,i)=>{
                return <VehicleTableRow obj={res} key={}i/>
            });
        }
    }


    render(){
        return(
            <div>
                <p>
                    Vehicle list compponent
                </p>
            </div>
        );
    };
}