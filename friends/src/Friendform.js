import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Friendform extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        email: '',
      };
    }
  
    addFriend= event => {
      axios
        .post('http://localhost:5000/friends', this.state)
        .then(function(response) {console.log(response);})
        .catch(function(error) {console.log(error)});
    };
  
    handleNewFriend = event => {
      this.setState({ [event.target.name]: event.target.value});
      console.log("STATE", this.state);
    };
  
    render() {
      return (
        <div>
          <Form>
            <FormGroup>
              <label>Name</label>
              <input type="text" name="name" onChange={this.handleNewFriend} />
            </FormGroup>
            <FormGroup>
              <label>Age</label>
              <input type="number" name="age" onChange={this.handleNewFriend} />
            </FormGroup>
            <FormGroup>
              <label>Email</label>
              <input type="email" name="email" onChange={this.handleNewFriend} />
            </FormGroup>
            <Button onClick={this.addFriend}>Submit</Button>
          </Form>
        </div>
      );
    }
  }

  export default Friendform;