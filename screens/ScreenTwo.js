import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ScreenTwo extends React.Component {

    render() {
        return (
            <View style={style.container}>
                <Text>Screen Two</Text>
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