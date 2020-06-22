import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#232F3A',
    paddingVertical: height * 0.2,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  loginButton: {
    width: width * 0.87,
    height: width * 0.12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72797E',
  },
  logo: {
    width: 169,
    height: 40,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoSubheader: {
    color: 'white',
    fontWeight: '300',
    letterSpacing: 4,
    paddingTop: 10,
  },
  loginTextLabel: {
    color: 'white',
  },
});

export default styles;
