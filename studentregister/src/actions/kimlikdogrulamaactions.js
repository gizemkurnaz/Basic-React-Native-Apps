import {Alert} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions} from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCES, LOGIN_USER_FAIL } from "./types";

export const emailChanged = (email) => {
    return (dispach) => {
        dispach({
            type: EMAIL_CHANGED,
            payload: email
        });
    };


};

export const passwordChanged = (password) => {
    return (dispach) => {
        dispach({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type : LOGIN_USER});

        if (email === '' || password === ''){
           Alert.alert(
                'Mesaj',
                'Her iki alan da dolu olmalı !',
                [
                     {text : 'Tamam', onPress: () => null}
                ]
            );

        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginSucces(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginSucces(dispatch, user))
            .catch(loginFail(dispatch));
        });

        }
    };
};

const loginSucces = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCES,
        payload: user
    });

    Actions.studentsList();
};

const loginFail = (dispatch)=> {
    Alert.alert(
        'Uyarı',
        'Giriş başarısız. Lütfen tekrar deneyiniz!',
        [
             {text : 'Tamam', onPress: () => null}
        ]
    );
    dispatch({
        type: LOGIN_USER_FAIL
    });
};
