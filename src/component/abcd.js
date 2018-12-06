import React, { Component } from 'react';

class componentName extends Component {
    constructor(){
        super()
        this.state={

        }
        this.changeFirstName=this.changeFirstName.bind(this);
        this.changeLastName=this.changeLastName.bind(this);
        this.changePhone=this.changePhone.bind(this);
    }
    changeFirstName = (event) => {
        const { contact } = this.state;
        const newContact = {
          ...contact,
          firstName: event.target.value
        };
        this.setState({ contact: newContact });
      }
      changeLastName = (event) => {
        const { contact } = this.state;
        const newContact = {
          ...contact,
          lastName: event.target.value
        };
        this.setState({ contact: newContact });
      }
      changePhone = (event) => {
        const { contact } = this.state;
        const newContact = {
          ...contact,
          phone: event.target.value
        };
        this.setState({ contact: newContact });
      }
    
      render() {
        return (
          <div>
            <input type="text" onChange={this.changeFirstName} value={this.state.contact.firstName}/>
            <input type="text" onChange={this.changeLastName} value={this.state.contact.lastName}/>
            <input type="text" onChange={this.changePhone} value={this.state.contact.phone}/>
          </div>
        );
      }
    }

export default componentName;