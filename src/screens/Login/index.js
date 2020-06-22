import React from 'react';
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
					<TextField placeholder="Phone" icon={phoneIcon} />
					<TextField placeholder="Password" icon={lockIcon} />
				</View>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => navigation.navigate('Main')}>
					<Text style={styles.loginTextLabel}>Login</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default Login;
