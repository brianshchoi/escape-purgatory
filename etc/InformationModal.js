import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Modal, Alert, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class InformationModal extends React.Component {

    sinsList = {
        "Envy": require("../assets/sin-icons/Envy.png"),
        "Gluttony": require("../assets/sin-icons/Gluttony.png"),
        "Greed": require("../assets/sin-icons/Greed.png"),
        "Lust": require("../assets/sin-icons/Lust.png"),
        "Pride": require("../assets/sin-icons/Pride.png"),
        "Sloth": require("../assets/sin-icons/Sloth.png"),
        "Wrath": require("../assets/sin-icons/Wrath.png"),
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

    render() {
        return (
            <View style={{ marginTop: 40 }}>
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
    blocks: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    blockText: {
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20
    }
});
