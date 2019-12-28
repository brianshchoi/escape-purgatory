import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Modal, Alert, Image } from 'react-native';
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
    koreanList = {
        "Envy": '(질투)',
        "Gluttony": "(탐식)",
        "Greed": "(탐욕)",
        "Lust": "(미색)",
        "Pride": "(교만)",
        "Wrath": "(분노)",
        "Sloth": "(나태)",
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
    descriptionList = {
        "Envy": '잘난 체하며 뽐내고 건방짐. 혹은 겸손하지 않거나 남에게 가르침을 받지 않으려고 하는 것. 교만을 이기려면 겸손한 자세, 그리고 가르침을 받아 드릴 열린 마음이 필요합니다.',
        "Gluttony": '잘난 체하며 뽐내고 건방짐. 혹은 겸손하지 않거나 남에게 가르침을 받지 않으려고 하는 것. 교만을 이기려면 겸손한 자세, 그리고 가르침을 받아 드릴 열린 마음이 필요합니다.',
        "Greed": '잘난 체하며 뽐내고 건방짐. 혹은 겸손하지 않거나 남에게 가르침을 받지 않으려고 하는 것. 교만을 이기려면 겸손한 자세, 그리고 가르침을 받아 드릴 열린 마음이 필요합니다.',
        "Lust": '잘난 체하며 뽐내고 건방짐. 혹은 겸손하지 않거나 남에게 가르침을 받지 않으려고 하는 것. 교만을 이기려면 겸손한 자세, 그리고 가르침을 받아 드릴 열린 마음이 필요합니다.',
        "Pride": '잘난 체하며 뽐내고 건방짐. 혹은 겸손하지 않거나 남에게 가르침을 받지 않으려고 하는 것. 교만을 이기려면 겸손한 자세, 그리고 가르침을 받아 드릴 열린 마음이 필요합니다.',
        "Wrath": '잘난 체하며 뽐내고 건방짐. 혹은 겸손하지 않거나 남에게 가르침을 받지 않으려고 하는 것. 교만을 이기려면 겸손한 자세, 그리고 가르침을 받아 드릴 열린 마음이 필요합니다.',
        "Sloth": '잘난 체하며 뽐내고 건방짐. 혹은 겸손하지 않거나 남에게 가르침을 받지 않으려고 하는 것. 교만을 이기려면 겸손한 자세, 그리고 가르침을 받아 드릴 열린 마음이 필요합니다.',
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
            style={{width: 240, height: 40}}
            source={this.difficultyList[difficulty]}
        />
    }
    getDescription(description){
        return <Text>{this.descriptionList[description]}</Text>
    }

    getKorean(korean){
        return <Text>{this.koreanList[korean]}</Text>
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
                        <Text style={styles.closeView}>{this.props.informationType} {this.getKorean(this.props.informationType)}</Text>
                        <Text>{this.getDescription(this.props.informationType)}</Text>
                        {this.getDifficulty(this.props.informationType)}
                    </View>
                </Modal>

                {this.getImage(this.props.informationType)}

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>



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
