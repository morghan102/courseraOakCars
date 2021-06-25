/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native';

const Header = () => {
    const { textStyling } = styles;
    
    return (
        <Text style={textStyling}>Cars</Text>
    );
};

const styles = {
    textStyling: {
      fontSize: 22
    }
  };
  
export default Header;
