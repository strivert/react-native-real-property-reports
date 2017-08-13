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
class GreenToggleBtn extends Component {

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
    const {clicked, textClicked, textUnClicked, style} = this.props;
    const innerText = this.props.children;
    return (
      (clicked)?
        (<View>
          <TouchableOpacity onPress={()=>this.props.onPress()}>
            <Image source={require('../../assets/imgs/BTN_Blue_Small.png')} style={style}>
              <Text style={{color: 'white', fontSize: 16, textAlign: 'center', lineHeight: 25, fontWeight: 'bold'}}>{textClicked}</Text>
            </Image>
          </TouchableOpacity>
        </View>)
      :
        (<View>
          <TouchableOpacity onPress={()=>this.props.onPress()}>
            <Image source={require('../../assets/imgs/BTN_Green_Small.png')} style={style}>
              <Text style={{color: 'white', fontSize: 16, textAlign: 'center', lineHeight: 25, fontWeight: 'bold'}}>{textUnClicked}</Text>
            </Image>
          </TouchableOpacity>
        </View>
        )
        
    );
  }
}

let styles = StyleSheet.create({
  
});

export default GreenToggleBtn;
