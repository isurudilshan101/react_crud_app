import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateVehicle extends Component{

    constructor(props){
        super(props);

        this.onChangeVehicleName=this.onChangeVehicleName.bind(this);
        this.onChangeVehicleColor=this.onChangeVehicleColor.bind(this);
        this.onChangeVehicleNumber=this.onChangeVehicleNumber.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            name:'',
            color:'',
            number:''
        }
    }


    onChangeVehicleName(e){
        this.setState({name: e.target.value});
    }

    onChangeVehicleColor(e){
        this.setState({color: e.target.value});
    }

    onChangeVehicleNumber(e){
        this.setState({number: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        console.log('Vehicle Added');

        console.log(`Vehicle Name: ${this.state.name}`);

        console.log(`Vehicle Color: ${this.state.color}`);

        console.log(`Vehicle Number: ${this.state.number}`);

        this.setState({name:'', color: '' , number:''});

    }

    render(){
        return(
            <div class="form-wrapper">
             <Form>
                 <Form.Group controlId="VehicleName">
                  <Form.Label>Name of the Vehicle: </Form.Label>   
                  <Form.Control type="text" value={this.state.name} onChange={this.onChangeVehicleName}/>  
                 </Form.Group>

                 <Form.Group controlId="Vehicle Color">
                  <Form.Label>Color of the Vehicle: </Form.Label>   
                  <Form.Control type="text" value={this.state.color} onChange={this.onChangeVehicleColor}/>  
                 </Form.Group>

                 <Form.Group controlId="Vehicle Number">
                  <Form.Label>Number of the Vehicle: </Form.Label>   
                  <Form.Control type="text" value={this.state.number} onChange={this.onChangeVehicleNumber}/>  
                 </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">Add Vehicle</Button>

             </Form>
            </div>
        );
    }
}


