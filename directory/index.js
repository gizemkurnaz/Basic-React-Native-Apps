/**
 * @format
 */
//import edilen bölüm
import {AppRegistry , Text , Registery, View} from 'react-native';
import {name as appName} from './app.json';
import React from 'react' ;
import Header from './src/components/Header';
import Liste from './src/components/Liste';

//kendi componentlerimizi oluşturuyoruz

const App = () => (
    <View style = {{flex : 1}}> 
        <Header headerText = "Directory"/>
        <Liste/>
    </View>
   

);

//kodlarımızı render ettiğimiz yer

AppRegistry.registerComponent('directory', () => App);
