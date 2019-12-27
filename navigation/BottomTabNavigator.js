import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenOne from '../components/ScreenOne';
import ScreenTwo from '../components/ScreenTwo';

const BottomTabNavigator = createBottomTabNavigator({
    One: ScreenOne,
    Two: ScreenTwo
}, {
    tabBarOptions: {
        showLabel: false
    }
});

export default BottomTabNavigator;