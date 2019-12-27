import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';
import Information from '../screens/Information';

const BottomTabNavigator = createBottomTabNavigator({
    Information: Information,
    Shop: ScreenTwo,
    Map: ScreenOne,
}, {
    tabBarOptions: {
        showLabel: true
    }
});

export default BottomTabNavigator;