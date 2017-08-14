import React, {Component} from 'react';
import ReactNative from 'react-native';

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
 * Container component for InnerPreview page
 */
class InnerPreview extends Component {

  /**
    * InnerPreview Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render InnerPreview page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      <View>
      	<Text>
          HIHIHI Inner InnerPreview
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerPreview;
