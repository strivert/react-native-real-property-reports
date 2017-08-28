import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'

import {Provider} from 'react-redux';
import configureStore from './src/store/configureStore'

console.disableYellowBox = true;

export default class FortReports extends Component {
  
  constructor(props){
    super(props);
    this.state = {
	  // isLoading: false, // true
    isLoading: true,
	  store: configureStore(() => {
	    this.setState({ isLoading: false });          
	  })
	};
  }

  render() {

  	if(this.state.isLoading){
      return null;
    }

    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('FortReports', () => FortReports);
