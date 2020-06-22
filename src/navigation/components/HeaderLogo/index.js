import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const logo = require('../../../assets/logo.png');

const TextField = () => (
	<View>
		<FastImage style={styles.image} resizeMode="contain" source={logo} />
		<Text style={styles.logoSubheader}>TEST APP</Text>
	</View>
);

export default TextField;
