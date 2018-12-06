import React, { Component } from 'react';
import {Form, FormGroup,Label,Input,FormText,Button, Col  } from 'reactstrap';
import DatePicker from "react-datepicker";
import { Progress  } from 'reactstrap';
import Popup from 'reactjs-popup'

class Tabledate extends Component {
    constructor(){
        super()
        this.state={
            editItem: []
        }
    }
    
    render() {
        this.state.editItem = this.props.editItem;
        console.log("item aapla",this.state.editItem)
        // console.log("item aapla",this.props.editItem)
        return (
            <div id="Table" className="text-center col-lg-12 size-box " style={{width:'500px'}}>
            <Form onSubmit={this.props.handleFormSave}>
                <FormGroup row>
                    <Label for="startDate" sm={2}> Start Date </Label>
                    <Col sm={10}>
                    <input id="startDate" value={this.props.startDate} placeholder={this.state.editItem[0].startDate} type="date" name="startDate" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="endDate" sm={2}> End Date </Label>
                    <Col sm={10}>
                    <input id="endDate" value={this.props.endDate} placeholder={this.state.editItem[0].endDate} type="date" name="endDate" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="progress" sm={2}> Progress </Label>
                    <Col sm={10}>
                    <Progress  id="progress" value={50} name="progressbar" placeholder={50} onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="response" sm={2}> Responsibility </Label>
                    <Col sm={10}>
                    <input id="response" value={this.props.response} placeholder={this.props.editItem[0].response} type="text" name="response" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="dept" sm={2}> Department </Label>
                    <Col sm={10}>
                    <input id="dept" value={this.props.dept} placeholder={this.state.editItem[0].dept} type="text" name="dept" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="notes" sm={2}> Notes </Label>
                    <Col sm={10}>
                    <input id="notes" value={this.props.notes} placeholder={this.state.editItem[0].notes} type="text" name="notes" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <Button> save </Button>
                </Form>
            
          </div>
          
        );
    }
}

export default Tabledate;