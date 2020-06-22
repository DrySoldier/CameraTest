import React from 'react';
import { ImageBackground, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const { height, width } = Dimensions.get('window');

const loginBackground = require('src/assets/login-background.png');
const logo = require('src/assets/logo.png');

const Home = () => {
  return (
    <ImageBackground source={loginBackground} style={styles.container}>
      <FastImage resizeMode="contain" style={{ height, width: width * 0.7 }} source={logo} />
    </ImageBackground>
  );
};

export default Home;
