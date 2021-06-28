/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class CarList extends Component {
    constructor(){
        super();
        this.state = { carList: [] };
    }

    componentDidMount() { // initial data loading and 1-time processes like getting a list.
        axios.get('https://givecars.herokuapp.com') //this returns a promise
        .then((response) => {
            this.setState({carList: response.data});
        });
    }
    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Car List</Text>
            </View>
        );
    }

}

export default CarList;
