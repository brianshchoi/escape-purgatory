import React from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';

const sins = [
    { key: 'Pride' },
    { key: 'Lust' },
    { key: 'Gluttony' },
    { key: 'Greed' },
    { key: 'Sloth' },
    { key: 'Wrath' },
    { key: 'Envy' },
]


export default class Information extends React.Component {

    render() {
        return (
            <View style={style.container}>
                <FlatList
                    data={sins}
                    renderItem={({ item }) => <Button title={item.key} style={style.item}></Button>}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    item: {
        padding: 10,
        fontSize: 28,
        height: 60,
        borderWidth: 1
    }
})