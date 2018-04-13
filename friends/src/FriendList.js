import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './FriendList.css'
import axios from 'axios';

class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: ''
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then((response) => {
                this.setState(() => ({friends: response.data}));
            })
            .catch((error) => {
                console.log('Server Error', error);
            });
    }
    newFriend = event => {
        this.setState({ [event.target.name]: event.target.value});
    }
    onSubmit = () => {
        const {name, age, email} = this.state;
        axios
            .post('http://localhost:5000/friends', {name, age, email})
            .then((response) => {
                this.setState({friends: response.data, name: '', age: '', email: ''});
            })
    }
    render() {
        return (
            <div className='App'>
                <div className='friends'>
                    <h1>Friends</h1>
                    <ul>
                        {this.state.friends.map((friend) => {
                            return (
                                <li key={friend.id} className='friend'>
                                    <p className='name'>{friend.name}</p>
                                    <p className='age'>{`Age: ${friend.age}`}</p>
                                    <p className='email'>{`Email: ${friend.email}`}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='form'>
                    <Form>
                        <h2>Add A Friend</h2>
                        <FormGroup>
                            <Input type="text" name="name" placeholder="Name" onChange={this.newFriend } value={this.state.name}/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" name="age" placeholder="Age" onChange={ this.newFriend } value={this.state.age}/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Email" onChange={ this.newFriend } value={this.state.email}/>
                        </FormGroup>
                       <Button onClick={this.onSubmit}>Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }

}

export default FriendList;