import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Header from './Header'
import LoginForm from './LoginForm';
import CardSection from './CardSection';
import Spinner from './Spinner';
import Button from './Button'

class Main extends Component {
    state = { loggedIn: null };

    componentDidMount() {

        if (
            firebase.apps.length == 0
        ) {
            firebase.initializeApp(
                {
                    apiKey: 'AIzaSyA2d_xwuVJevwsN7c3rvUEWmghqH8Ky0Zk',
                    authDomain: 'kimlikdogrulama-cd656.firebaseapp.com',
                    databaseURL: 'https://kimlikdogrulama-cd656.firebaseio.com',
                    projectId: 'kimlikdogrulama-cd656',
                    storageBucket: 'kimlikdogrulama-cd656.appspot.com',

                });

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ loggedIn: true });
                } else {
                    this.setState({ loggedIn: false });
                }
            });
        }
    }

    clickLogout() {
        firebase.auth().signOut();

    }

    renderContent() {
        if (this.state.loggedIn !== null) {
            switch (this.state.loggedIn) {
                case true:
                    return (
                        <CardSection>
                            <Button onPress={this.clickLogout.bind(this)}> Logout</Button>
                        </CardSection>
                    );

                case false:
                    return (
                        <LoginForm />
                    );

                default:
                    return (
                        <View>
                            <Spinner size="large" />
                        </View>
                    );
            }
        }
        else {
            return null
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerText='Authentication' />
                {this.renderContent()}
            
            </View>
        );
    }
}

export default Main;
