import React from 'react';
import {StyleSheet, Text, Image, Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';


export default class Maps extends React.Component {

    render() {
        return (
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={Dimensions.get('window').width}
                    imageHeight={Dimensions.get('window').height}>
                    <Image style={style.rotation}
                        source={require('./../Map/map1.png')} />
                </ImageZoom>
        )
    }
}

const style = StyleSheet.create({
    rotation: {
        transform: [{ rotate: '0deg' }],
        width: 400,
        height: 550,
        marginTop: 100,
        marginLeft: -10,
    }
})

