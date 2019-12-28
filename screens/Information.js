import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
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
                <Text> Escape Purgatory </Text>
                <FlatList
                    data={sins}
                    renderItem={({ item }) => <InformationModal informationType={item.key} />}
                    numColumns={3}
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
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },

})