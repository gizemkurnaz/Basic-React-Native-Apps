import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle} = styles;
    return (
        <View style = {viewStyle}> 
        <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    textStyle:{
        fontSize: 40
    },
    viewStyle: {
        backgroundColor: "#f8f8f8",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        shadowOffset : {widht : 0, height: 2},
        shadowOpacitiy : 0.2,
    }
};

export default Header;