import React, {Component} from 'react';
import ReactNative from 'react-native';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
  TextInput
} = ReactNative;

/**
 * Container component for Setup page
 */
class InputRowToggleText extends Component {

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
    const {label, value, mode} = this.props;
    
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text style={{color: 'gray', marginRight: 20, width: 100, textAlign: 'right'}}>{label}</Text>
        {mode === '0' ?
            <TextInput
              style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => {}}
              value={value}
            />
          :
            <Text style={{fontWeight:'bold', fontSize: 20, color: 'black', height:40}}>{value}</Text>
        }
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InputRowToggleText;
