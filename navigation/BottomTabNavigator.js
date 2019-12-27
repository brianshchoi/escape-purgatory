import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

const BottomTabNavigator = createBottomTabNavigator({
    Information: ScreenOne,
    Shop: ScreenTwo,
    Map: ScreenTwo,
}, {
    tabBarOptions: {
        showLabel: true
    }
});

export default BottomTabNavigator;