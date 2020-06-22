import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    height,
    width,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  outerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 35,
  },
  innerButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(125,125,125,.6)',
    margin: 3,
  },
  centerButtonContainer: {
    width,
    alignItems: 'center',
  },
  XIcon: {
    height: 20,
    width: 20,
  },
  XIconContainer: {
    position: 'absolute',
    right: 25,
    top: 50,
  },
});

export default styles;
