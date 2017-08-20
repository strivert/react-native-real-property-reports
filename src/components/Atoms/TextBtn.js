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
 * TextBtn component
 */
class TextBtn extends Component {

  /**
    * TextBtn Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render TextBtn
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
        <TouchableOpacity onPress={()=>this.props.onPress()}>
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
