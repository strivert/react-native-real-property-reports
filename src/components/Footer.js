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
 * Container component for Footer page
 */
class Footer extends Component {

  /**
    * Footer Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render Footer page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      
      <View>
          <Image source={require('../assets/imgs/menuBackground.png')} style={{height:60, width:'100%'}}>
            <View style={{flex:1, flexDirection: 'row'}}>

              <View style={{flex:0.1, justifyContent:'center', alignItems:'center', marginLeft:10}}>
              </View>

              <View style={{flex:0.7, flexDirection: 'row', justifyContent:'center', alignItems:'center', }}>                
                  <View style={{marginLeft:10, marginRight:10}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:50}}>
                      <Image source={require('../assets/imgs/footerBtns/cooling.png')} />                      
                    </TouchableOpacity>
                  </View>

                  <View style={{marginLeft:10, marginRight:10}}>                    
                    <Image source={require('../assets/imgs/footerBtns/cooling-up.png')} />
                  </View>

                  <View style={{marginLeft:10, marginRight:10}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:50}}>
                      <Image source={require('../assets/imgs/footerBtns/electrical.png')} />
                    </TouchableOpacity>
                  </View>

                  <View style={{marginLeft:10, marginRight:10}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:50}}>
                      <Image source={require('../assets/imgs/footerBtns/electrical.png')} />
                    </TouchableOpacity>
                  </View>

                  <View style={{marginLeft:10, marginRight:10}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:50}}>
                      <Image source={require('../assets/imgs/footerBtns/electrical.png')} />
                    </TouchableOpacity>
                  </View>

                  <View style={{marginLeft:10, marginRight:10}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:50}}>
                      <Image source={require('../assets/imgs/footerBtns/electrical.png')} />
                    </TouchableOpacity>
                  </View>

                  <View style={{marginLeft:10, marginRight:10}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:50}}>
                      <Image source={require('../assets/imgs/footerBtns/electrical.png')} />
                    </TouchableOpacity>
                  </View>

                  <View style={{marginLeft:10, marginRight:10}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:50}}>
                      <Image source={require('../assets/imgs/footerBtns/electrical.png')} />
                    </TouchableOpacity>
                  </View>


                  
              </View>

              <View style={{flex:0.2, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                  <TouchableOpacity onPress={()=>{}} style={{width:41,marginLeft:10, marginRight:10}}>
                    <Image source={require('../assets/imgs/paperclipBtn.png')} />
                  </TouchableOpacity>
                
                  <TouchableOpacity onPress={()=>{}} style={{width:41,marginLeft:10, marginRight:10}}>
                    <Image source={require('../assets/imgs/pencilBtn.png')} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{}} style={{width:41,marginLeft:10, marginRight:10}}>
                    <Image source={require('../assets/imgs/PhotoBtn.png')} />
                  </TouchableOpacity>                
              </View>

            </View>
          </Image>
      </View>
      
      
    );
  }
}

let styles = StyleSheet.create({
  
});

export default Footer;