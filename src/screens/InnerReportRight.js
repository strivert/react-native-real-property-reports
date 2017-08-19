import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InputToggleText
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
 * Container component for Right of Report page
 */
class InnerReportRight extends Component {

  /**
    * ReportRight Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);

    this.state={
      data: { 
        firstName: {
          label: 'First Name',
          value: 'Samual'
        }
      }
    }
  }

  /**
   * Render ReportRight page
   * @return {jsxresult} result in jsx format
   */
  render() {        
    return (
      <View style={{flex:1, padding:10, paddingLeft: 40, paddingRight: 40, paddingBottom: 70, paddingTop: 0}}>
        <View>
          <View>
            <Image source={require('../assets/imgs/Blue-waving-flag-iconSM.png')} />
          </View>
          <View>
          </View>
        </View>
        <Text>Right View</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerReportRight;
