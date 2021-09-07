import React, {Component} from 'react';
import {TextInput, Alert} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth'
import Button from './Button'
import Card from './Card';
import CardSection from './CardSection';
import Spinner from './Spinner';

class LoginForm extends Component {
    state = { email :  '', password : '', loading: false}
    clickLogin(){
        this.setState({ loading: true})
        const { email, password} = this.state;

        if (email === '' || password === ''){
            this.setState({ loading: false});
            Alert.alert(
                'Mesaj',
                'Her iki alan da dolu olmalı !',
                [
                    {text : 'Tamam', onPress: () => null}
                ]
            );

        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.loginSucces.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.loginSucces.bind(this))
            .catch(this.loginFail.bind(this));
        });

        }
    }

    loginSucces(){
        console.log('Success!!');
        this.setState({loading: false});

    }
    loginFail(){

        console.log('Fail!!');
        this.setState({loading: false});
        Alert.alert(
            'Mesaj',
            'Kullanıcı adı veya şifreniz hatalı',
            [
                {text : 'Tamam', onPress: () => null}
            ]
        );

    }
    renderButton(){
        if (!this.state.loading){
            return <Button onPress = {this.clickLogin.bind(this)}> ENTER</Button>
        }
        return <Spinner size = 'small'/>

    }
    render(){
        const { inputStyle} = styles;
        return (
            <Card>
                <CardSection>
                    <TextInput
                        placeholder = 'E-mail'
                        style = {inputStyle}
                        value = {this.state.email}
                        onChangeText = {email => this.setState({ email })}
                        />
                        </CardSection>

                        <CardSection>
                       <TextInput  
                       keyboardType={'default'} 
                       secureTextEntry placeholder = 'Password'
                       style = {inputStyle}
                       value = {this.state.password}
                       onChangeText = {password => this.setState({ password })}
                       />
                       </CardSection>
                       
                       <CardSection>
                           {this.renderButton()}
                           </CardSection>
                           </Card>
        );

    }

}

const styles = {

    subContainerStyle : {
        borderBottomWidth :1,
        padding :5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    },

    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,
    }

    }

export default LoginForm;

