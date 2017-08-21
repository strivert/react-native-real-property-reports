import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn,
  TextWithLetterSpacing
} from '../components/Atoms';
import {
  ItemList
} from '../components/Molecule';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  TextInput
} = ReactNative;

/**
 * Container component for UserLeft of Setup page
 */
class InnerPreviewRight extends Component {

  /**
    * SetupUserLeft Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render SetupUserLeft page
   * @return {jsxresult} result in jsx format
   */
  render() {

    return (
      <View style={{flex:1, padding:10, paddingLeft: 40, paddingRight: 40, paddingBottom: 70}}>
        <View>
          <Text>Right</Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerPreviewRight;
