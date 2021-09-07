import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size}) => {
    return (
        <View>
            <ActivityIndicator size = {size | 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justfyContent: 'center',
        alignItem: 'center'
    }
};

export default Spinner;