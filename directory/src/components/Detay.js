import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Button from './Button';

const Detay = (props) => {
    const {containerStyle, subContainerStyle, imageStyle} = styles;
return(
    <View style = {containerStyle}>

    <View style = {subContainerStyle}>  
    <Text>{props.data.first_name +"  "+ props.data.last_name}</Text>
    </View>

    <View style = {subContainerStyle}>
        <Image style = {imageStyle} source ={{uri : props.data.avatar}}/>
    </View>
 
    <View style = {subContainerStyle}>
    <Button onPress= {() => Linking.openURL('https://www.instagram.com/'+ props.data.first_name + props.data.last_name)}>INSTAGRAM ACCOUNT</Button>
    </View>
   

    </View>
    );
};

const styles = {
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
    },
    subContainerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor:'#ddd',
        position:'relative',

    },
    imageStyle:{
        height:300,
        flex:1,

    },
    text:{
        fontSize:18,

    }
};

export default Detay;