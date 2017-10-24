import React, {Component} from 'react';
import ReactNative from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
 * FooterCenterBtn component
 */
class FooterCenterBtn extends Component {

  /**
    * FooterCenterBtn Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render FooterCenterBtn page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {clicked, imgSrcClicked, imgSrcUnClicked, style} = this.props;
    const innerText = this.props.children;
    return (
      (clicked)?
        (<View style={styles.centerBtn}>
          <Image source={imgSrcClicked} style={style} />
        </View>)
      :
        (<View style={styles.centerBtn}>
          <TouchableOpacity onPress={()=>this.props.onPress()}>
            <Image source={imgSrcUnClicked} style={style} />                      
          </TouchableOpacity>
        </View>
        )
        
    );
  }
}

let styles = EStyleSheet.create({
  cameraModal: {
    marginLeft: 5, marginRight: 5
  },
  '@media (max-height: 719)': {
    cameraModal: {
      marginLeft: 1, marginRight: 1
    }
  }
});

export default FooterCenterBtn;
