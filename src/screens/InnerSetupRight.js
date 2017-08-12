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
 * Container component for Setup page
 */
class InnerSetupRight extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      <View>
      	<Text>
          HIHIHI Inner Report Right
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerSetupRight;
