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
  Linking
} = ReactNative;

/**
 * Container component for Setup page
 */
class BarCircularBtn extends Component {

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
    const {imgSrc, style} = this.props;    
    return (
      <TouchableOpacity onPress={()=>{}}>
        <Image source={imgSrc} style={style} />
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default BarCircularBtn;