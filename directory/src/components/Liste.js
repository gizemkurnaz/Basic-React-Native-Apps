import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';
import Detay from './Detay';
import { ScrollView } from 'react-native';

class Liste extends Component {
    state = {data : [] };
    componentDidMount(){
        axios.get('https://reqres.in/api/users')
        .then(response => this.setState({data : response.data.data}));
    }

    renderData(){
        return this.state.data.map((responseData,Id) =>
            <Detay key={Id} data={responseData}/>
    );
    }
   
    render() {
        console.log("gelen data" + this.state);
        console.log('render')
        return (
            <ScrollView style = {{marginTop : 5}}>
                {this.renderData()}
            </ScrollView>
        );
    }
}


export default Liste;
