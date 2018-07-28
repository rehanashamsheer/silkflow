// Import libraries for making a component
import React from 'react';
import { View } from 'react-native';


// Make a component
const Cards = (props) => {
	return (
		<View style = {styles.cointainerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	cointainerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		margin:20

	}
};

// Make the component available to other parts of the app
export default Cards;
