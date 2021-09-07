import React,{Component} from 'react';
import { View} from 'react-native';
import {Provider} from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';



class Main extends Component{

    componentDidMount(){

        if (firebase.apps.length === 0){

            firebase.initializeApp({
                apiKey: 'AIzaSyA7Apa1lSkDwNa9bbgAzlfrQ9Qpw41SzIg',
                authDomain: 'studentregister-f1691.firebaseapp.com',
                databaseURL: 'https://studentregister-f1691-default-rtdb.firebaseio.com/',
                projectId: 'studentregister-f1691',
                storageBucket: 'studentregister-f1691.appspot.com',
                appId : '36679390969'
               
              });

        }
       
          
    }

render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
        <Provider store= {store}>
            <Router/>
        </Provider>
    );
    
}

}


export default Main;