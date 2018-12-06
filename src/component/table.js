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
            startDate: '',
            endDate: '',
            name:'',
            action:'',
            progress:'',
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

    // handleChange = idx => e => {
    //   const { name, value } = e.target;
    //   const rows = [...this.state.rows];
    //   rows[idx] = {
    //     [name]: value
    //   };
    //   this.setState({
    //     rows
    //   });
    // };
  
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
    this.setState({ rows })
  }
  handletextClik() {
    this.setState( {
        disabled: !this.state.disabled,
        liked: !this.state.liked,
    })
  }

  handleFormSubmit = (e) => {
    let itemEntered = [...this.state.items];
    itemEntered.push({
      name:this.state.name,
      action:this.state.action,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        progress:this.state.progress,
       
    });
    console.log()
    console.log('items submit',itemEntered);
      this.setState({
          rows: itemEntered,
        });
        console.log('state of items before : ',this.state.items) 
        this.state.editItem =  this.state.items
        console.log('state of edit before : ',this.state.editItem)
    
    e.preventDefault();
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    this.setState({
      [name]: value,
    })
  };

  render() {
    
    return (
      <div>
        <div className="container">
          <div className="row clearfix">
          {/* <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button> */}
            <div className="col-md-12 column">
            <form onSubmit={this.handleFormSubmit}>
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
                      <input id="name" value={this.state.name} type="text" name="name" onChange={this.handleInputChange} disabled = {(this.state.disabled)? "disabled" : ""} />
                      </td>
                      <td>
                      <input id="startDate" value={this.state.startDate} type="date" name="startDate" onChange={this.handleInputChange} disabled = {(this.state.disabled)? "disabled" : ""} />
                      </td>
                      <td>
                      <input id="endDate" value={this.state.endDate} type="date" name="endDate" onChange={this.handleInputChange} disabled = {(this.state.disabled)? "disabled" : ""} />
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Edittable;