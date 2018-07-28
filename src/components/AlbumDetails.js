// Import libraries for making a component
import React, {Component} from 'react';
import { Text, View, Image, Dimensions} from 'react-native';


state = {itemWidth:''};
// Make a component
class AlbumDetails extends Component {
	
	componentWillMount(){
		const { width } = Dimensions.get('window');
		const itemWidth = (width - 60) / 2;

		this.setState( {'itemWidth':itemWidth}) ;

		// Event Listener for orientation changes
		Dimensions.addEventListener('change', () => {
			const { width } = Dimensions.get('window');
			const itWidth = (width - 60) / 2;
			this.setState({
				'itemWidth':itWidth
			});
		});
	}

	render(){
		return (
			<View style={ (this.props.viewValue == 2) ? [styles.cointainerGridStyle, {width:this.state.itemWidth}] : styles.cointainerStyle }>
				<View style={styles.imageStyle}>
					<Image style={styles.mainImage} source={{ uri: this.props.record.image }} />
				</View>


				<View style={styles.cardName}>

					<View style={styles.titleStyle}>
						<Text style={styles.cardTextStyle}>{this.props.record.title}</Text>
						<Text>{this.props.key}</Text>
					</View>

					<View
					  style={{
					    borderBottomColor: '#C7C7C7',
					    borderBottomWidth: 2,
					    justifyContent:'center',
					    flexDirection:'row',
					    width: '100%',
					    marginBottom:2
					  }}
					></View> 

					<View style={styles.desc}>
						<Text style={styles.descStyle}>{this.props.record.artist}</Text>
					</View>
				</View>


			</View>
		);
	}
}

const styles = {
	cardName: {
		flex:1,
		flexDirection:'column',
		justifyContent:'flex-start',
		alignItem:'center',
		padding:14,
		minHeight:110
		//height:110,
		//margin:13,
		//width:'90%',
		
	},
	cardTextStyle:{
		fontSize: 18,
		color:'#010E30',
		//height:63
	},
	desc:{
		flex:1,
		paddingTop:7
	},
	descStyle:{
		fontSize: 12,
		color:'#AFBDD2',
	},
	mainImage:{
		height:159,
		width:null,
	},
	cointainerStyle: {
		borderWidth: 1,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		margin:20,
		backgroundColor:'#FFFFFF',
		borderRadius:5,	

	},
	titleStyle:{
		flex:1,
	},
	imageStyle:{
		flex:1

	},
	cointainerGridStyle: {
		borderWidth: 1,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginTop:20,
		marginLeft:20,
		backgroundColor:'#FFFFFF',
		borderRadius:5	

	},
};
// Make the component available to other parts of the app
export default AlbumDetails;
