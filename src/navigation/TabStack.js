import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';

const cameraIcon = require('../assets/camera-icon.png');
const archiveIcon = require('../assets/archive-icon.png');

const CameraLoader = () => <View />;

const Tab = createBottomTabNavigator();

const TabStack = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route, navigation }) => ({
      tabBarIcon: () => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = archiveIcon;
            break;
          case 'CameraLoader':
            iconName = cameraIcon;
            break;

          default:
            iconName = archiveIcon;
            break;
        }

        return (
          <FastImage
            resizeMode="contain"
            source={iconName}
            style={{ height: 35, width: 35 }}
          />
        );
      },
      tabBarButton: (props) => (
        <TouchableOpacity
          activeOpacity={1}
          {...props}
          onPress={
            props.to === '/Main/CameraLoader'
              ? () => {
                  navigation.navigate('Camera');
                }
              : props.onPress()
          }
        />
      ),
    })}
    tabBarOptions={{
      style: {
        backgroundColor: '#232F3A',
        borderTopWidth: 0,
      },
      showLabel: false,
    }}>
    <Tab.Screen name="Home" component={HomeStack} />
    <Tab.Screen name="CameraLoader" component={CameraLoader} />
  </Tab.Navigator>
);

export default TabStack;
