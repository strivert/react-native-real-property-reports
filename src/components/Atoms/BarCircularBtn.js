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
 * Component for BarCircularBtn
 */
class BarCircularBtn extends Component {

  /**
    * BarCircularBtn Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render BarCircularBtn
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {imgSrc, style} = this.props;    
    return (
      <TouchableOpacity onPress={()=>{this.props.onPress()}}>
        <Image source={imgSrc} style={style} />
      </TouchableOpacity>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default BarCircularBtn;