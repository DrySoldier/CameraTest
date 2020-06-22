import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	ImageBackground,
	Text,
	KeyboardAvoidingView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import TextField from 'src/components/TextField';
import styles from './styles';

const loginBackground = require('src/assets/login-background.png');
const logo = require('src/assets/logo.png');
const phoneIcon = require('src/assets/phone-icon.png');
const lockIcon = require('src/assets/lock-icon.png');

const Login = ({ navigation }) => {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = () => {
		const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (phone === '' || password === '') {
			setError('Field is empty!');
		} else if (!regex.test(phone)) {
			setError('Invalid phone number!');
		} else {
			navigation.navigate('Main');
		}
	};

	return (
		<ImageBackground source={loginBackground} style={styles.container}>
			<KeyboardAvoidingView
				style={styles.keyboardAvoidingContainer}
				behavior="padding">
				<View style={styles.logoContainer}>
					<FastImage style={styles.logo} resizeMode="contain" source={logo} />
					<Text style={styles.logoSubheader}>TEST APP</Text>
				</View>
				<View style={{ alignItems: 'center' }}>
					<Text style={{ color: 'red', margin: 5 }}>{error}</Text>
					<TextField
						onChangeText={(text) => {
							setError('');
							setPhone(text);
						}}
						value={phone}
						placeholder="Phone"
						icon={phoneIcon}
						maxLength={15}
					/>
					<TextField
						onChangeText={(text) => {
							setError('');
							setPassword(text);
						}}
						value={password}
						placeholder="Password"
						icon={lockIcon}
					/>
				</View>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => handleLogin()}>
					<Text style={styles.loginTextLabel}>Login</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default Login;
