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
 * InputToggleText component
 */
class InputToggleText extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render InputToggleText
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {label, value, mode, textarea} = this.props;
    
    return (
      <View>
        <Text style={{color: 'gray'}}>{label}</Text>
        {mode === '0' ?
            <TextInput
              style={{height: textarea==='1'?80:40, borderColor: 'gray', borderWidth: 1}}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.props.onChangeText(text)}
              value={value}
              multiline = {textarea==='1'?true:false}
              numberOfLines = {textarea==='1'?4:1}
            />
          :
            <Text style={{fontWeight:'bold', fontSize:textarea==='1'?16:20, color: 'black', height:40}}>{value}</Text>
        }
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InputToggleText;
