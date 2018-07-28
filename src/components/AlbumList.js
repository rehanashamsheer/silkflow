// Import libraries for making a component
import React, {Component} from 'react';
import { Text, ScrollView , FlatList, View, AsyncStorage } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

// Make a component
class AlbumList extends Component {

	state = {'albums': []};

	componentWillMount(){
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({'albums':response.data}));
	}

	getList(){

		var data = 
		<FlatList
          data={this.state.albums}
          renderItem={({item}) => <AlbumDetails viewValue = {this.props.viewValue} record = {item} />}
          key = { ( ( this.props.viewValue == '1' ) ? '1' : '2' ) }
          numColumns = {this.props.viewValue}
          keyExtractor={(item, index) => index}
          />
		return data;

		//alert(this.props.viewValue);
	}

	render(){
		//console.log(this.state);
		return (
			<ScrollView>
				{this.getList()}
			</ScrollView>
		);
	}

}



// Make the component available to other parts of the app
export default AlbumList;
