import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Shops from '../etc/Shops';

const item = [
    { key: 'Hell1' },
    { key: 'Hell2' },
    { key: 'Pride1' },
    { key: 'Pride2' },
    { key: 'Lust1' },
    { key: 'Lust2' },
    { key: 'Gluttony1' },
    { key: 'Gluttony2' },
    { key: 'Greed1' },
    { key: 'Greed2' },
    { key: 'Sloth1' },
    { key: 'Sloth2' },
    { key: 'Wrath1' },
    { key: 'Wrath2' },
    { key: 'Envy1' },
    { key: 'Envy2' },
]


export default class ScreenTwo extends React.Component {


    render() {
        return (
            <View style={style.container}>
                <Text style={style.header}>상점</Text>
                <FlatList
                    data={item}
                    renderItem={({ item }) => <Shops sinType={item.key} />}
                    numColumns={2}
                    columnWrapperStyle={style.row}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingLeft: 10,
        paddingRight: 10,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 40,
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    }

})