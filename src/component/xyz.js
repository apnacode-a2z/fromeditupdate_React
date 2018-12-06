import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Progress,  } from 'reactstrap';
import Newtable from './newtable';
import InputRange from 'react-input-range';

class  Edittable extends React.Component {
    constructor(){
        super()
        this.state={
            rows: [{}],
            showme:true,
            startDate: new Date(),
            endDate: new Date(),
            disabled: false,
            liked: false
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
  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  
  // handleAddRow = () => {
  //   const item = {
  //     name: "",
  //     action: ""
  //   };
  //   this.setState({
  //     rows: [...this.state.rows, item]
  //   });
  // };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  handletextClik() {
    let itemEntered = [...this.state.rows];
        itemEntered.push({
            name:this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            progress:this.state.progress,
            action:this.state.action,
        });
    this.setState( {
        disabled: !this.state.disabled,
        liked: !this.state.liked,
        rows:itemEntered
    })
    console.log("apbs",itemEntered)
  }
  render() {
    
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
          {/* <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button> */}
            <div className="col-md-12 column">
            
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                <tr>
                      <th></th>
                      <th className=" col-md-3 text-center"> Action </th>
                      <th className=" col-md-1 text-center"> start date </th>
                      <th className=" col-md-1 text-center"> end date </th>
                      <th className=" col-md-2 text-center"> progress bar </th>
                      <th className=" col-md-3 text-center"> Name </th>
                      <th className=" col-md-1 text-center"> edit </th>
                      <th className=" col-md-1 text-center"> delete </th>
                     
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                          disabled = {(this.state.disabled)? "disabled" : ""}
                        />
                      </td>
                      <td>
                        <DatePicker name="startdate" selected={this.state.startDate} onChange={this.handle_start_time_Change}  disabled = {(this.state.disabled)? "disabled" : ""}/>
                      </td>
                      <td>
                      <input id="endDate" value={this.state.endDate} type="date" name="endDate" onChange={this.handleInputChange} />

                        <DatePicker name="enddate" selected={this.state.endDate} onChange={this.handle_end_time_Change}  disabled = {(this.state.disabled)? "disabled" : ""}/>
                      </td>
                      <td>
                        <div className="text-center">50%</div>
                        <Progress name="progressbar" value={50}  disabled = {(this.state.disabled)? "disabled" : ""}/>
                      </td>
                      <td>
                      <input id="action" value={this.state.action} type="text" name="action" onChange={this.handleInputChange} disabled = {(this.state.disabled)? "disabled" : ""} />
                      </td>
                      <td>
                      <button  className="btn btn-outline-danger btn-sm" onClick = {this.handletextClik.bind(this)}> {this.state.liked ? 'Edit' : 'Save'} </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edittable;