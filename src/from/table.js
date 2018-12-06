import React, { Component } from 'react';
import {Table, Col  } from 'reactstrap';
import Newtable from './newtable';

class Tabledate extends Component {

    render() {
        const items = this.props.items;
        console.log("i",items)
        return (
            <div id="Table" className="text-center col-lg-8 float-right">
            <Table>
              <thead>
                <tr>
                  <th> Start Date</th>
                  <th> End Date </th>
                  <th> Progress </th>
                  <th> Responsibility </th>
                  <th> Depart </th>
                  <th> Notes</th>
                  <th> Edit</th>
                  <th> Delete</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.startDate}</td>
                      <td>{item.endDate}</td>
                      <td>{item.progress}</td>
                      <td>{item.response}</td>
                      <td>{item.dept}</td>
                      <td>{item.notes}</td>
                      <td><button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.props.handleEdit(index)}>
                          Edit
                                </button>
                       
                        </td>
                       <td><button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.props.handleRemoveSpecificRow(index)}>
                          Remove
                        </button></td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          
        );
        
    }
}

export default Tabledate;