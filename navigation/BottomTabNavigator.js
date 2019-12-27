import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import Information from '../screens/Information';
import InformationModal from '../etc/InformationModal';

const BottomTabNavigator = createBottomTabNavigator({
    Information: Information,
    Shop: ScreenTwo,
    Map: InformationModal,
}, {
    tabBarOptions: {
        showLabel: true
    }
});

export default BottomTabNavigator;