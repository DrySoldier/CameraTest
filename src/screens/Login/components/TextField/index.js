import React from 'react';
import { View, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const TextField = ({ placeholder, icon }) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<FastImage resizeMode="contain" style={styles.icon} source={icon} />
			</View>
			<View style={styles.divider} />
			<TextInput
				style={styles.textInput}
				placeholder={placeholder}
				placeholderTextColor="#999"
				secureTextEntry={placeholder === 'Password'}
			/>
		</View>
	);
};

export default TextField;
