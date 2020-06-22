import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'src/screens/Login';
import Camera from 'src/screens/Camera';

import TabStack from './TabStack';

const Stack = createStackNavigator();

const modalOptions = {
  animationEnabled: true,
  cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 0.5, 0.9, 1],
          outputRange: [0, 0.25, 0.7, 1],
        }),
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
          extrapolate: 'clamp',
        }),
      },
    };
  },
};

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ gestureEnabled: false, headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={TabStack} />
      <Stack.Screen name="Camera" component={Camera} options={modalOptions} />
    </Stack.Navigator>
  );
};

export default RootStack;
