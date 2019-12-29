import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Alert, Image, ScrollView } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Icon } from 'react-native-elements'

export default class InformationModal extends React.Component {

    sinsList = {
        "Envy": require("../assets/sin-icons/Envy.png"),
        "Gluttony": require("../assets/sin-icons/Gluttony.png"),
        "Greed": require("../assets/sin-icons/Greed.png"),
        "Lust": require("../assets/sin-icons/Lust.png"),
        "Pride": require("../assets/sin-icons/Pride.png"),
        "Wrath": require("../assets/sin-icons/Wrath.png"),
        "Sloth": require("../assets/sin-icons/Sloth.png"),
        "Hell": require("../assets/sin-icons/Hell.png"),
        "Money": require("../assets/sin-icons/Money.png")
    }

    locationList = {
        "Envy": require("../assets/location/Envy.png"),
        "Gluttony": require("../assets/location/Gluttony.png"),
        "Greed": require("../assets/location/Greed.png"),
        "Lust": require("../assets/location/Lust.png"),
        "Pride": require("../assets/location/Pride.png"),
        "Wrath": require("../assets/location/Wrath.png"),
        "Sloth": require("../assets/location/Sloth.png"),
        "Hell": require("../assets/location/Hell.png"),
        "Money": require("../assets/location/Money.png")
    }

    itemList = {
        "Hell1": require("../assets/shop/hell1.jpg"),
        "Hell2": require("../assets/shop/hell2.jpg"),
        "Envy1": require("../assets/shop/envy1.jpg"),
        "Envy2": require("../assets/shop/envy2.jpg"),
        "Gluttony1": require("../assets/shop/gluttony1.jpg"),
        "Gluttony2": require("../assets/shop/gluttony2.jpg"),
        "Greed1": require("../assets/shop/greed1.jpg"),
        "Greed1": require("../assets/shop/greed2.jpg"),
        "Lust1": require("../assets/shop/lust1.jpg"),
        "Lust2": require("../assets/shop/lust2.jpg"),
        "Pride1": require("../assets/shop/pride1.jpg"),
        "Pride2": require("../assets/shop/pride2.jpg"),
        "Wrath1": require("../assets/shop/wrath1.jpg"),
        "Wrath2": require("../assets/shop/wrath2.jpg"),
        "Sloth1": require("../assets/shop/sloth1.jpg"),
        "Sloth2": require("../assets/shop/sloth2.jpg"),
    }

    koreanList = {
        "Envy": '(질투)',
        "Gluttony": "(탐식)",
        "Greed": "(탐욕)",
        "Lust": "(미색)",
        "Pride": "(교만)",
        "Wrath": "(분노)",
        "Sloth": "(나태)",
        "Hell": "(지옥)",
        "Money": "(회사)",
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
        "Envy": '갖은 것에 만족 못하며, 갖고 있는 것 보다는 없는 것에 집착성이 강하다. 소소한것에 행복을 느끼지 못하고, 그 태도가 야망을 불러이르킨다. 질투를 이기려면 작은것에 감사한 마음이 필요합니다',
        "Gluttony": '음식과 음료 또는 부유한 품목의 과도한 소비를 의미합니다. 음식에 대한 과도한 열망으로 인해 가난한 사람들이 음식을 먹지 못하는 상황이다. 탐식을 이기려면 “역지사지" - 남에 입장을 생각해보고 그들을 위해서 희생하는 마음이 필요합니다.',
        "Greed": '돈, 지위 또는 권력과 같은 물질적 이익을 향한 열망 또는 갈망이다. 적갑한 소유물보다 더 가져야 된다는 필요성이 느낌으로 상당히 세속적인 개념이다. 탐욕을 이기려면 욕구와 소유욕을 버려야 합니다.',
        "Lust": '건전하지 않고 욕정을 추구한다. 미색은 성욕도 포함하지만 큰힘이나 권력을 쫒는 행동이될 수 있다. 미색을 이기려면 본능 보다는 이성에 집중해야 되고 제정신으로 임해야 된다.',
        "Pride": '잘난 체하며 뽐내고 건방짐. 혹은 겸손하지 않거나 남에게 가르침을 받지 않으려고 하는 것. 교만을 이기려면 겸손한 자세, 그리고 가르침을 받아 드릴 열린 마음이 필요합니다.',
        "Wrath": '화를 참지 못하고 남에게 혐오를 표현하는것. 본인의 개념이나 신념에 어긋나는 상황 때문에 사랑와는 거리가 먼 감정을 표출하는 것이다. 분노를 이기려면 마음을 추스릴 수 있는 능력과 인자함이 필요합니다.',
        "Sloth": '대가를 치르더라도 편의를 갈망하고 성의 없이 움직인다. 열심히 안 하고 성과를 원하는 애절한 몸부림이다. 나태를 이기려면 노력과 성실함이 필요합니다.',
        "Hell": '일반적인 용법으로는, 못 견디게 고통스럽거나 더 없이 참담한 형편이나 환경을 비유하여 이르는 말이다. \n\n가톨릭 신학상으로 ‘지옥’은 악마건 인간이건 저주받은 자가 영벌을 받는 곳이다. 즉 타락한 천사와, 의식적으로 신의 사랑으로부터 떠난 상태로 죽은 인간이 영원한 벌을 받는 장소와 상태를 지칭한다.\n\n지옥에는 두 가지의 벌이 있다. 하나는 하느님의 지복직관을 잃어버린 고통이고, 다른 하나는, 외계의 물질로부터 가해지는 감각적인 고통이다. 지옥의 벌은 영원한 것이다.',
        "Money": '돈이 필요하십니까 여러분? 회사로 오십시오 빠르고 쉽고 돈 벌 기회를 드리겠습니다!',
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
            <View style={{ marginTop: 40, padding: 18 }}>
                <Modal

                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 40 }}>
                        <View style={styles.closeView}>
                            <Icon
                                name="close"
                                size={35}
                                onPress={() => this.setModalVisible(!this.state.modalVisible)} />
                        </View>
                        <ScrollView>
                            <Text style={styles.title}>{this.props.sinType} {this.koreanList[this.props.sinType]} </Text>
                            <Image style={styles.difficulty} source={this.difficultyList[this.props.sinType]} />

                            <Text style={styles.description}>{this.descriptionList[this.props.sinType]}</Text>
                            <Image style={styles.location} source={this.locationList[this.props.sinType]} />
                        </ScrollView>
                    </View>
                </Modal>

                <TouchableOpacity style={styles.blocks} onPress={() => this.setModalVisible(true)}>
                    {this.getImage(this.props.sinType)}
                    <Text style={styles.blockText}> {this.props.sinType} </Text>
                </TouchableOpacity>

            </View >
        );
    }

}

const styles = StyleSheet.create({

    closeView: {
        paddingRight: 17,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 40,
        paddingBottom: 12,
    },
    difficulty: {
        alignSelf: 'center',
        width: "60%",
        height: 40,
        marginBottom: 18,
    },
    description: {
        fontSize: 24,
        padding: 18,
    },
    blockText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    },
    location: {
        alignSelf: 'center',
        width: "90%",
        height: 550,
        marginBottom: 5,
    },
});
