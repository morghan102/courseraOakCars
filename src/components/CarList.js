/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import CarDetail from './CarDetail';
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

    renderList = () => {
        return this.state.carList.map((brand) => {
            return <CarDetail key={brand.model[0].name} brand={brand} />;
        });
    };

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }

}

export default CarList;
