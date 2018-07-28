import React, {Component} from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {showGridView: 1};
	}

	onUpdate = (val) => {

    	this.setState({showGridView: val})

    	//alert(this.state.showGridView);
  	}

	render(){ 
		return(
			<View style={{flex:1}}>
				<Header headerText={'MY BOARD'} onUpdate={this.onUpdate} />

				<View style={{height:50}}>
					ALL
				</View>

				<AlbumList viewValue={this.state.showGridView} />
			</View>
		);
	} 
}

const styles = {
  breadcrumbStyle: {
	fontSize: 18,
	color: '#4D5674',
	letterSpacing: 0,
	textAlign: 'left',
  }
};


AppRegistry.registerComponent('albums', ()=> App);