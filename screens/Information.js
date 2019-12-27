import React from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import InformationModal from '../etc/InformationModal';

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
                    /* renderItem={({ item }) => <Button title={item.key} style={style.item}></Button>} */
                    renderItem={({ item }) => <InformationModal informationType={item.key} />}
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

})