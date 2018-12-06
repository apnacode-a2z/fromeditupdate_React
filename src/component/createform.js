import React, { Component } from 'react';
import {Form, FormGroup,Label,Input,FormText,Button, Col  } from 'reactstrap';
import DatePicker from "react-datepicker";
import { Progress  } from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";

class componentName extends Component {
    constructor(){
        super()   
        this.state={
            startDate: new Date(),
            endDate: new Date()
        }
        this.handle_start_time_Change = this.handle_start_time_Change.bind(this);
        this.handle_end_time_Change = this.handle_end_time_Change.bind(this);
    }
    handle_start_time_Change(date) {
        this.setState({
        startDate: date
        });
    }
    handle_end_time_Change(date) {
        this.setState({
        endDate: date
        });
    }
    render() {
        return (
            <div className="text-center">
                <Form className="col-md-6">
                    <FormGroup></FormGroup>
                    <FormGroup row>
                        <Label for="startdate" sm={2} > Start Date</Label>
                        <DatePicker name="startdate" selected={this.state.startDate} onChange={this.handle_start_time_Change}  disabled = {(this.state.disabled)? "disabled" : ""}/>
                        <Label for="enddate" sm={2} > End Date</Label>
                        <DatePicker name="enddate" selected={this.state.endDate} onChange={this.handle_end_time_Change}  disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="respons" sm={2}> Progress </Label>
                        <Col sm={10}>
                        <Progress name="progressbar" value={50}  />
                        </Col>
                    </FormGroup>
                    
                    <FormGroup row>
                        <Label for="respons" sm={2}> Responsibility </Label>
                        <Col sm={10}>
                            <Input type="text" name="respons" id="response" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="dept" sm={2}> Department </Label>
                        <Col sm={10}>
                            <Input type="text" name="dept" id="dept" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="notes" sm={2}> Notes </Label>
                        <Col sm={10}>
                            <Input type="text" name="notes" id="notes" />
                        </Col>
                    </FormGroup>
                    
                    <Button> Create New</Button>
                </Form>
            </div>
        );
    }
}

export default componentName;