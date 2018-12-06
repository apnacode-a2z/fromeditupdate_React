class App extends React.Component {
    constructor() {
      super();
  
      this.state = {
        username: '',
        password: '',
        items: []
      }
    };
  
    handleFormSubmit = (e) => {
      e.preventDefault();
  
      let items = [...this.state.items];
  
      items.push({username: this.state.username, password: this.state.password});
  
      this.setState({
        items,
        username: '',
        password: ''
      });
    };
  
    handleInputChange = (e) => {
      let input = e.target;
      let name = e.target.name;
      let value = input.value;
  
      this.setState({
        [name]: value
      })
    };
  
    render() {
      return (
        <div className="App">
          <Form handleFormSubmit={ this.handleFormSubmit } handleInputChange={ this.handleInputChange } newUsername={ this.state.username } newPassword={ this.state.password }/>
          <Table items={ this.state.items }/>
        </div>
      );
    }
  }
  
  class Table extends React.Component {
    render() {
      const items = this.props.items;
      return (
        <div id="Table">
          <table>
            <tbody>
              <tr>
                <th>Username</th>
                <th>Password</th>
              </tr>
              {items.map(item => {
                return (
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  class Form extends React.Component {
    render() {
      return (
        <div id="Form">
          <h3>Add a new item to the table:</h3>  
          <form onSubmit={this.props.handleFormSubmit}>
            <label htmlFor="username">
            Username:
            <input id="username" value={this.props.newUsername} type="text" name="username" onChange={this.props.handleInputChange} />
            </label>
            <label for="password">
            Password:
            <input id="password" value={this.props.newPassword} type="password" name="password" onChange={this.props.handleInputChange} />
            </label>
            <button type="submit" value="Submit">Add Item</button>
          </form>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  