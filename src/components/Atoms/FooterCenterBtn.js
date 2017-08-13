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
class FooterCenterBtn extends Component {

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
    const {clicked, imgSrcClicked, imgSrcUnClicked, style} = this.props;
    const innerText = this.props.children;
    return (
      (clicked)?
        (<View style={{marginLeft: 5, marginRight: 5}}>
          <Image source={imgSrcClicked} style={style} />
        </View>)
      :
        (<View style={{marginLeft: 5, marginRight: 5}}>
          <TouchableOpacity onPress={()=>this.props.onPress()}>
            <Image source={imgSrcUnClicked} style={style} />                      
          </TouchableOpacity>
        </View>
        )
        
    );
  }
}

let styles = StyleSheet.create({
  
});

export default FooterCenterBtn;
