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
class HeaderCenterBtn extends Component {

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
    const {clicked, imgSrc} = this.props;
    const innerText = this.props.children;
    return (
      (clicked)?
        (<View onPress={()=>{}} style={{width:140, marginLeft:15, marginRight:20}}>
          <Image source={imgSrc}>
            <Text style={{color:'white', fontSize:23, textAlign:'center', lineHeight:45, fontWeight: 'bold'}}>
              {innerText}
            </Text>
          </Image>
        </View>)
      :
        (<TouchableOpacity onPress={this.props.onPress} style={{width:140, marginLeft:15, marginRight:20}}>
          <Text style={{color:'white', fontSize:23, textAlign:'center', lineHeight:20, fontWeight: 'bold'}}>
            {innerText}
          </Text>
        </TouchableOpacity>
        )
        
    );
  }
}

let styles = StyleSheet.create({
  
});

export default HeaderCenterBtn;
