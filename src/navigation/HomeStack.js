import React from 'react';
import { View, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'src/screens/Home';

import HeaderLogo from './components/HeaderLogo';
import FastImage from 'react-native-fast-image';

const { width, height } = Dimensions.get('window');

const avatar = require('../assets/avatar.png');

const Stack = createStackNavigator();

const RootStack = () => (
	<Stack.Navigator
		initialRouteName="Home"
		screenOptions={{
			gestureEnabled: false,
			headerTransparent: true,
			headerTitle: () => <HeaderLogo />,
			headerRight: () => <FastImage source={avatar} style={{ height: 40, width: 40, marginRight: 10 }} />,
			headerBackground: () => (
				<View
					style={{
						backgroundColor: 'rgba(35,47,58, 0.6)',
						height: height * .11,
						width,
					}}
				/>
			),
		}}>
		<Stack.Screen name="Home" component={Home} />
	</Stack.Navigator>
);

export default RootStack;
