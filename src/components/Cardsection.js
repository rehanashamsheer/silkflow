// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';

// Make a component
const Cardsection = (props) => {
	return (
		<View style={styles.cointainerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	cointainerStyle: {
		borderBottomWidth: 1,
		padding:5,
		backgroundColor:'#fff',
		justifyContent:'flex-start',
		flexDirection:'row',
		borderColor:'#ddd',
		position:'relative',

	}
};

// Make the component available to other parts of the app
export default Cardsection;
