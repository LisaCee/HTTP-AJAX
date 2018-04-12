import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
      // event.preventDefault();
      // const newFriends = this.state.newFriend;
      // this.state.friends.push(this.state.newFriend);
      // this.setState({
      //   newFriend : {
      //     name: 'name',
      //     age: 'age',
      //     email: 'email' 
      //  }
      // });
      // console.log(this.state)
    };
  
    handleNewFriend = event => {
      this.setState({ [event.target.name]: event.target.value});
      console.log("STATE", this.state);
      // const newFriend = event.target.value;
      // this.setState({ newFriend: newFriend });
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
            <Button>Submit</Button>
          </Form>
        </div>
      );
    }
  }

  export default Friendform;