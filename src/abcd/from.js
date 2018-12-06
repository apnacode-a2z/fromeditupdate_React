import React, { Component } from 'react';

class From extends Component {
    render() {
        return (
            <div>
                <From onSubmit={this.handleFormSubmit}>
                <FormGroup row>
                    <Label for="startDate" sm={2}> Start Date </Label>
                    <Col sm={10}>
                    <input id="startDate" value={this.state.startDate} type="date" name="startDate" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="endDate" sm={2}> End Date </Label>
                    <Col sm={10}>
                    <input id="endDate" value={this.state.endDate} type="date" name="endDate" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="progress" sm={2}> Progress </Label>
                    <Col sm={10}>
                    <Progress  id="progress" name="progressbar" value={50} onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="response" sm={2}> Responsibility </Label>
                    <Col sm={10}>
                    <input id="response" value={this.state.response} type="text" name="response" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="dept" sm={2}> Department </Label>
                    <Col sm={10}>
                    <input id="dept" value={this.state.dept} type="text" name="dept" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="notes" sm={2}> Notes </Label>
                    <Col sm={10}>
                    <input id="notes" value={this.state.notes} type="text" name="notes" onChange={this.handleInputChange} />
                    </Col>
                </FormGroup>
                <Button> Create New</Button>
                </From>
            </div>
        );
    }
}

export default From;