/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyling, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>
    );
};

const styles = {
    textStyling: {
        fontSize: 22,
    },
    viewStyle: {
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    },
};

export default Header;
//grab a list from a remote api. this is the data that gets rendered to the screen (like a liist)
