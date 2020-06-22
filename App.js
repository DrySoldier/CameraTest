import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from 'src/navigation/RootStack';

const App = () => {
	return (
		<NavigationContainer>
			<RootStack />
		</NavigationContainer>
	);
};

export default App;
