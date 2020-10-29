import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    updateAge = () => {
        this.state.age += 1;
        this.setState({age: this.state.age});
    }

    render() {
        return (
            <div>
                <h2> Name: {this.props.firstName} , {this.props.lastName} </h2>
                <h3> Age: { this.state.age} </h3>
                <h3> Haircolor : {this.props.Hair} </h3>
                <button onClick= { this.updateAge }>Birthday!</button>
                <hr/>
            </div>
        );
    }
}

export default PersonCard;