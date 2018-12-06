import React, { Component } from 'react';
import Table from './table';
import Form from './from';
import Modal from "react-responsive-modal";
import Newtable from './newtable';
import { func } from 'prop-types';
class parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showme: false,
          startDate: '',
          endDate: '',
          progress: 50,
          response: '',
          dept:'',
          notes:'',
          sample1:'',
          items: [],
          editItem: [],
          newitem:[],
          open: false
         
        }
        this.handle_start_time_Change = this.handle_start_time_Change.bind(this);
        this.handle_end_time_Change = this.handle_end_time_Change.bind(this);       
      };
      
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

        handleRemoveSpecificRow = (item) => () => {
            const items = [...this.state.items]
            items.splice(item, 1)
            this.setState({ items })
          }

        handleEdit  = (sample) => () => {
            console.log("sample",sample);
              console.log("this is",this.state.items[sample])   
            let myitem = [];
            myitem.push(this.state.items[sample]);
            this.setState({ 
                showme:true,
                editItem: myitem,
                sample1:sample,
                open: true 
             })
             
        }
          
      handleFormSubmit = (e) => {
        let itemEntered = this.state.items;
        itemEntered.push({
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            progress:this.state.progress,
            response:this.state.response,
            dept:this.state.dept,
            notes:this.state.notes,
            showme:this.state.showme
        });
        console.log()
        console.log('items submit',itemEntered);
            this.setState({
                items: itemEntered,
              });
              e.preventDefault();
              e.target.reset();
      };
    

      handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;
        this.setState({
          [name]: value,
        })
      };

      handleFormSave = (e) => {
        let itemnew = this.state.newitem
        itemnew.push({
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            progress:this.state.progress,
            response:this.state.response,
            dept:this.state.dept,
            notes:this.state.notes,
            showme:this.state.showme
        });
        this.setState({
            newitem: itemnew,
            showme:false,
          });
        console.log('state of edit  : ',this.state.newitem) 
        console.log(' edit items submit',itemnew);  
        console.log("daskjdnsjd",this.state.sample1)

        let abcd = this.state.sample1;
        console.log("abcd",abcd);
        var updatedArray = this.state.items;

        for(let temp in updatedArray){
            console.log('temp',temp+ 'and' + this.state.sample1);
            if(temp == this.state.sample1){
                console.log('inside');
                updatedArray[temp] = this.state.newitem[0];
            }
        }
        
        console.log("new items updates",this.state.items)
        
        this.setState({
        newitem:[],
        items: updatedArray,
        });
        e.preventDefault();
        e.target.reset();
      };
    
    

      onCloseModal = () => {
        this.setState({ open: false });
      };

    render() {
        console.log("show values",this.state.show);
        return (
            <div>
            <Form handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } newstartDate={ this.state.startDate } newendDate={ this.state.endDate } newprogress={this.state.progress} newresponse={this.state.response} newdept={this.state.dept} newnotes={this.state.notes} />
            <Table items={ this.state.items } handleRemoveSpecificRow={this.handleRemoveSpecificRow} handleEdit={this.handleEdit}/>
            {this.state.showme ?  
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <Newtable  editItem={ this.state.editItem } handleFormSave={ this.handleFormSave } handleInputChange={ this.handleInputChange } newstartDate={ this.state.startDate } newendDate={ this.state.endDate } newprogress={this.state.progress} newresponse={this.state.response} newdept={this.state.dept} newnotes={this.state.notes}  />
                </Modal>
                :
                null
                }
            </div>
        );
    }
}

export default parent;