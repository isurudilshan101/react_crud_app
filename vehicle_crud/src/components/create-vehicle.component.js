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

    render(){
        return(
            <div class="form-wrapper">
             <Form>
                 <Form.Group controlId="VehicleName">
                  <Form.Label>Name of the Vehicle: </Form.Label>   
                  <Form.Control type="text"/>  
                 </Form.Group>

                 <Form.Group controlId="Vehicle Color">
                  <Form.Label>Color of the Vehicle: </Form.Label>   
                  <Form.Control type="text"/>  
                 </Form.Group>

                 <Form.Group controlId="Vehicle Number">
                  <Form.Label>Number of the Vehicle: </Form.Label>   
                  <Form.Control type="text"/>  
                 </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">Add Vehicle</Button>

             </Form>
            </div>
        );
    }
}


