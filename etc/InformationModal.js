import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Modal, Alert, Image } from 'react-native';
import { Icon } from 'react-native-elements'

export default class InformationModal extends React.Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    getImage(sin) {
        let uri = "../assets/sin-icons/";

        switch (sin) {
            // case 'Pride, Lust Gluttony Greed Sloth Wrath Envy'
            case 'Pride':
                return uri + "peacock.png"
            case 'Lust':
                return uri + "goat.png"
            case 'Gluttony':
                return uri + "pig.png"
            case 'Greed':
                return uri + "toad.png"
            case 'Sloth':
                return uri + "sloth.png"
            case 'Wrath':
                return uri + "lion.png"
            case 'Envy':
                return uri + "snake.png"
        }


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

                {/* <Image
                    style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                    source={require(this.getImage(this.props.informationType))}

                /> */}

                <Image
                    style={{ width: 80, height: 80, resizeMode: 'stretch' }}
                    source={require("../assets/sin-icons/snake.png")}

                />
                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>

                    {/* <Image style={{ width: 50, height: 50 }} source={require('./snake.png')} /> */}
                    <Text> {this.props.informationType}</Text>
                </TouchableHighlight>
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
});
