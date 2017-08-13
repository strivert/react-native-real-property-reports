import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InputToggleText,
  Letter
} from '../components/Atoms';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking
} = ReactNative;

/**
 * Container component for Setup page
 */
class InnerSetupUserRight extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);

    this.state={
      mode: '1',
      data: { 
        firstName: {
          label: 'First Name',
          value: 'Samual'
        }
      }
    }
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      <View style={{flex:1, padding:10, paddingLeft: 40, paddingRight: 40, paddingBottom: 70}}>
        <Text>User Right</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerSetupUserRight;
