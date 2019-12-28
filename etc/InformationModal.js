import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Alert, Image } from 'react-native';
import { Icon } from 'react-native-elements'

export default class InformationModal extends React.Component {

    sinsList = {
        "Envy": require("../assets/sin-icons/Envy.png"),
        "Gluttony": require("../assets/sin-icons/Gluttony.png"),
        "Greed": require("../assets/sin-icons/Greed.png"),
        "Lust": require("../assets/sin-icons/Lust.png"),
        "Pride": require("../assets/sin-icons/Pride.png"),
        "Wrath": require("../assets/sin-icons/Wrath.png"),
        "Sloth": require("../assets/sin-icons/Sloth.png")
    }
    difficultyList = {
        "Envy": require('../stars/3.jpg'),
        "Gluttony": require('../stars/2.jpg'),
        "Greed": require('../stars/3.jpg'),
        "Lust": require('../stars/3.5.jpg'),
        "Pride": require('../stars/4.jpg'),
        "Wrath": require('../stars/4.jpg'),
        "Sloth": require('../stars/5.png')
    }

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    getImage(sin) {
        return <Image
            style={{ width: 80, height: 80, resizeMode: 'stretch' }}
            source={this.sinsList[sin]}
        />
    }

    getDifficulty(difficulty) {
        return <Image
            style={{ width: 240, height: 40 }}
            source={this.difficultyList[difficulty]}
        />
    }

    render() {
        return (
            <View style={{ marginTop: 40, padding: 18 }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View style={styles.closeView}>
                            <Icon
                                name="close"
                                size={28}
                                onPress={() => this.setModalVisible(!this.state.modalVisible)} />
                        </View>
                        <Text>Hello World! {this.props.informationType}</Text>
                        {this.getDifficulty(this.props.informationType)}
                    </View>
                </Modal>

                <TouchableOpacity style={styles.blocks} onPress={() => this.setModalVisible(true)}>
                    {this.getImage(this.props.informationType)}
                    <Text style={styles.blockText}> {this.props.informationType} </Text>
                </TouchableOpacity>

            </View >
        );
    }

}

const styles = StyleSheet.create({
    closeView: {
        paddingRight: 18,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },

    blockText: {
        paddingTop: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    }
});
