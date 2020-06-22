import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		width: width * 0.87,
		height: 45,
		flexDirection: 'row',
		backgroundColor: '#FFF',
		alignItems: 'center',
		borderRadius: 5,
		margin: 5,
	},
	textInput: {
		flex: 1,
		height: 50,
		paddingLeft: 15,
		color: 'black'
	},
	icon: {
		height: 25,
		width: 25,
	},
	divider: {
		height: '70%',
		width: 1,
		backgroundColor: '#C1C1C1',
	},
	iconContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		width: 50,
	},
});

export default styles;
