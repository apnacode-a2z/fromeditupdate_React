import React, { Component } from 'react';
import {Form, FormGroup,Label,Input,FormText,Button, Col  } from 'reactstrap';
import DatePicker from "react-datepicker";
import { Progress  } from 'reactstrap';

class Formdate extends Component {
    render() {
        const items = this.props.items;
        console.log("from data",items)
        return (
            <div>
                {
            // this.props.showme?
            <div className="text-center col-lg-4 float-left">
            <Form onSubmit={this.props.handleFormSubmit}>
                <FormGroup row>
                    <Label for="startDate" sm={2}> Start Date </Label>
                    <Col sm={10}>
                    <input id="startDate" value={this.props.startDate} type="date" name="startDate" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="endDate" sm={2}> End Date </Label>
                    <Col sm={10}>
                    <input id="endDate" value={this.props.endDate} type="date" name="endDate" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="progress" sm={2}> Progress </Label>
                    <Col sm={10}>
                    <Progress  id="progress" name="progressbar" value={50} onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="response" sm={2}> Responsibility </Label>
                    <Col sm={10}>
                    <input id="response" value={this.props.response} type="text" name="response" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="dept" sm={2}> Department </Label>
                    <Col sm={10}>
                    <input id="dept" value={this.props.dept} type="text" name="dept" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="notes" sm={2}> Notes </Label>
                    <Col sm={10}>
                    <input id="notes" value={this.props.notes} type="text" name="notes" onChange={this.props.handleInputChange} />
                    </Col>
                </FormGroup>
                <Button> Create New</Button>
                </Form>
            </div>
            //  :null
             
                   
            }
            </div>
        );
    }
}

export default Formdate;