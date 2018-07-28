
import React, {Component}         from 'react';
import { Text, TouchableHighlight, Image, View } from 'react-native'; 
import LinearGradient from 'react-native-linear-gradient';

class Header extends Component {
	

	constructor(props) {
		super(props);
		this.state = {showGridView: 1};
	}

	update = (e) => {

    var value = e.toString();
    this.props.onUpdate(value);
    this.setState({showGridView: value});
  };

	render(){
		return (
			<LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={['#C86DD7','#3023AE']} style={styles.viewStyle}>
				<View style={styles.cointainerStyle}>

					<View style={{flex:3}}><Text style={styles.textStyle}>{this.props.headerText}</Text></View>



					<View style={styles.iconStyle}>
						<TouchableHighlight onPress={() => this.update('1')}>
							<Image source={require('../assets/list_view.png')} style={{height:20, width:20}} />
						</TouchableHighlight>

						<TouchableHighlight onPress={() => this.update('2')}>
							<Image source={require('../assets/grid_view.png')} style={{height:20, width:20}} />
						</TouchableHighlight>
					</View>

				</View>

			</LinearGradient>
		);
	}
}


const styles = {
	viewStyle: {
		//fontFamily:'Montserrat-Medium',
		backgroundColor: '#C86DD7',
		height: 144,
		//position: 'relative',
	},
	textStyle: {
		fontSize: 24,
		color: '#FFFFFF',
		letterSpacing: 0,
		marginLeft:23,
		marginBottom:15.6

	},
	cointainerStyle:{
		flex:1,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'flex-end'
	},
	iconStyle:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-around',
		//selfAlign:'right',
		marginBottom:15.6,
		marginRight:10,
	}
};

export default Header;