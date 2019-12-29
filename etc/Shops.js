import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Alert, Image } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Icon } from 'react-native-elements'

export default class Shops extends React.Component {

    itemList = {
        "Hell1": require("../assets/shop/hell1.jpg"),
        "Hell2": require("../assets/shop/hell2.jpg"),
        "Envy1": require("../assets/shop/envy1.jpg"),
        "Envy2": require("../assets/shop/envy2.jpg"),
        "Gluttony1": require("../assets/shop/gluttony1.jpg"),
        "Gluttony2": require("../assets/shop/gluttony2.jpg"),
        "Greed1": require("../assets/shop/greed1.jpg"),
        "Greed2": require("../assets/shop/greed2.jpg"),
        "Lust1": require("../assets/shop/lust1.jpg"),
        "Lust2": require("../assets/shop/lust2.jpg"),
        "Pride1": require("../assets/shop/pride1.jpg"),
        "Pride2": require("../assets/shop/pride1.jpg"),
        "Wrath1": require("../assets/shop/wrath1.jpg"),
        "Wrath2": require("../assets/shop/wrath2.jpg"),
        "Sloth1": require("../assets/shop/sloth1.jpg"),
        "Sloth2": require("../assets/shop/sloth2.jpg"),
    }



    getImage(item) {
        return <Image
            style={{ width: 85*1.9, height: 140*1.9, resizeMode: 'stretch' }}
            source={this.itemList[item]}
        />
    }
    render() {
        return (
            <View
                style={{ marginTop: 40, paddingTop: 0, paddingHorizontal: 10 }}>
                {this.getImage(this.props.sinType)}
            </View>
        );
    }
}
