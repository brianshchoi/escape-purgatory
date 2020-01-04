import { createBottomTabNavigator } from 'react-navigation-tabs';

import Shop from '../screens/Shop';
import Information from '../screens/Information';
import Maps from '../screens/Maps';

const BottomTabNavigator = createBottomTabNavigator({
    Information: Information,
    Shop: Shop,
    Map: Maps,
}, {
    tabBarOptions: {
        showLabel: true
    }
});

export default BottomTabNavigator;