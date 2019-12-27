import React from 'react';
import { View, Text, TouchableHighlight, Modal, Alert } from 'react-native';
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
                    <View style={{ marginTop: 40 }}>
                        <View>
                            <Text>Hello World! {this.props.informationType}</Text>


                            {/* <Icon name="md-close" style={{ position: 'absolute', right: 5, top: 5 }} /> */}


                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                {/* <Icon name="close" /> */}
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    {/* <Image style={{ width: 50, height: 50 }} source={require('./snake.png')} /> */}
                    <Text>{this.props.informationType}</Text>
                </TouchableHighlight>
            </View>
        );
    }

}

// item: {
//     padding: 10,
//     fontSize: 28,
//     height: 60,
//     borderWidth: 1
// }