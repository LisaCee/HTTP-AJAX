import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Friendform extends Component {
    constructor() {
      super();
      this.state = {
        friends: [],
        newFriend: ""
      };
    }
  
    addFriend= event => {
      event.preventDefault();
      const friends = this.state.friends;
      friends.push(this.state.newFriend);
      this.setState({
        newFriend: "",
        friends: friends
      });
    };
  
    handleNewFriend = event => {
      const newFriend = event.target.value;
      this.setState({ newFriend: newFriend });
    };
  
    render() {
      return (
        <div>
          <Form>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input type="text" name="name" id="exampleName" placeholder="friend's name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAge">Age</Label>
              <Input type="number" name="age" id="exampleAge" placeholder="friend's age" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="friend's email" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      );
    }
  }

  export default Friendform;