import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Modal, Alert } from 'react-native';
import { Icon } from 'react-native-elements'

export default class InformationModal extends React.Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    {/* <Image style={{ width: 50, height: 50 }} source={require('./snake.png')} /> */}
                    <Text>{this.props.informationType}</Text>
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

// item: {
//     padding: 10,
//     fontSize: 28,
//     height: 60,
//     borderWidth: 1
// }