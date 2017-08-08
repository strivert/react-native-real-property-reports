import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import App from './src/App'

export default class FortReports extends Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('FortReports', () => FortReports);
