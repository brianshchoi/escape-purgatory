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
                    renderItem={({ item }) => <InformationModal informationType={item.key} />}
                    numColumns={3}
                    contentContainerStyle={{ alignItems: "flex-end" }}
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