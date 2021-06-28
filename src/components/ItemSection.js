/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';


const ItemSection = (props) => {
    return (
        <View style={styles.viewStyle}>{props.children}</View>
    );
};

const styles = {
    viewStyle: {
        borderBottomWidth: 1,
        borderColor: 'gainsboro',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
};
export default ItemSection;
