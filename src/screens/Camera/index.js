import React, { useRef } from 'react';
import {
	TouchableOpacity,
	ActivityIndicator,
	Linking,
	Alert,
	View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { RNCamera } from 'react-native-camera';

import styles from './styles';

const XIcon = require('../../assets/x-icon.png');
const overlay = require('../../assets/overlay.png');

const Camera = ({ navigation }) => {
	const camera = useRef();
	const takePicture = async () => {
		if (camera.current) {
			console.log(camera.current);
			const options = { quality: 0.5, base64: true };
			const data = await camera.current.takePictureAsync(options);
			console.log(data.uri);
		}
	};

	return (
		<>
			<RNCamera
				ref={camera}
				style={styles.preview}
				type={RNCamera.Constants.Type.back}
				flashMode={RNCamera.Constants.FlashMode.on}
				captureAudio={false}
				androidCameraPermissionOptions={{
					title: 'Permission to use camera',
					message: 'We need your permission to use your camera',
					buttonPositive: 'Ok',
					buttonNegative: 'Cancel',
				}}
				androidRecordAudioPermissionOptions={{
					title: 'Permission to use audio recording',
					message: 'We need your permission to use your audio',
					buttonPositive: 'Ok',
					buttonNegative: 'Cancel',
				}}
				onGoogleVisionBarcodesDetected={({ barcodes }) => {
					console.log(barcodes);
				}}>
				{({ status }) => {
					if (status === 'NOT_AUTHORIZED') {
						Alert.alert(
							'Cannot use camera without authorization',
							'Press OK to be redirected to app settings, where you can give permissions',
							[
								{
									text: 'Cancel',
									onPress: () => navigation.navigate('Home'),
									style: 'cancel',
								},
								{
									text: 'OK',
									onPress: () => {
										navigation.navigate('Home');
										Linking.openSettings();
									},
								},
							],
							{ cancelable: false },
						);
						return <ActivityIndicator size="large" />;
					}
				}}
			</RNCamera>
			<FastImage source={overlay} style={styles.container} />
			<TouchableOpacity
				style={styles.XIconContainer}
				onPress={() => navigation.navigate('Home')}>
				<FastImage style={styles.XIcon} source={XIcon} />
			</TouchableOpacity>
			<View style={styles.centerButtonContainer}>
				<View style={styles.outerButton}>
					<TouchableOpacity
						onPress={() => takePicture()}
						style={styles.innerButton}
					/>
				</View>
			</View>
		</>
	);
};

export default Camera;
