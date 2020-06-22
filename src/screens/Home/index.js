import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';

const loginBackground = require('../../assets/login-background.png');

const Home = () => {
  return (
    <ImageBackground
      source={loginBackground}
      style={styles.container}></ImageBackground>
  );
};

export default Home;
