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
class TextBtn extends Component {

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
    const innerText = this.props.children;

    let imgOriginStyle = {      
      justifyContent:'center'
    };

    let imgStyle = (style===undefined)?[imgOriginStyle]:[style, imgOriginStyle];

    return (
      <View>
        <TouchableOpacity onPress={()=>{}}>
          <Image source={imgSrc} style={imgStyle}>
            <Text style={{color: 'white', fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>{innerText}</Text>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default TextBtn;
