import React from 'react';
import { View, StyleSheet, Text, Button, ImageBackground } from 'react-native';

export default class ScreenOne extends React.Component {

    render() {
        return (
            <View style={style.container}>
                <Text>Screen One</Text>
                <Button title='hi'/>
            </View>
              
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
})