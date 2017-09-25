import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  HeaderSetup,
  HeaderReport,
  HeaderPreview
}
from './';

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
class Main extends Component {

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
    const {page, goDetail} = this.props;
    
    let renderCom = null;
    if (page==='Report') {
      renderCom = <HeaderReport goDetail={goDetail} cancelDetail={()=>this.props.cancelDetail()} />;
    } else if(page==='Setup') {
      renderCom = <HeaderSetup />;
    } else if(page==='Preview') {
      renderCom = <HeaderPreview />;
    }

    return (
      <View>
        <Image source={require('../../assets/imgs/menuBackground.png')} style={{height:60, width:'100%'}}>
          {renderCom}
        </Image>
      </View>
    )
    
    /*
    return (
      
      <View>
          <Image source={require('../../assets/imgs/menuBackground.png')} style={{height:60, width:'100%'}}>
            <View style={{flex:1, flexDirection: 'row'}}>

              <View style={{flex:0.1, justifyContent:'center', alignItems:'center', marginLeft:10}}>
                <TouchableOpacity onPress={()=>{}} style={{width:82}}>
                  <Image source={require('../../assets/imgs/backBtnNew.png')} />
                </TouchableOpacity>
              </View>

              <View style={{flex:0.7, flexDirection: 'row', justifyContent:'center', alignItems:'center', }}>
                  <View style={{marginLeft:15, marginRight:15}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:140}}>
                      <Text style={{color:'white', fontSize:23, textAlign:'center', lineHeight:20}}>
                        SET-UP
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View onPress={()=>{}} style={{width:140,marginLeft:15, marginRight:15}}>
                    <Image source={require('../../assets/imgs/mainBtnBkgHvr.png')}>
                      <Text style={{color:'white', fontSize:23, textAlign:'center', lineHeight:45}}>
                        REPORT
                      </Text>
                    </Image>
                  </View>

                  <View style={{marginLeft:15, marginRight:15}}>
                    <TouchableOpacity onPress={()=>{}} style={{width:140}}>
                      <Text style={{color:'white', fontSize:23, textAlign:'center', lineHeight:20}}>
                        PREVIEW
                      </Text>
                    </TouchableOpacity>
                  </View>
              </View>

              <View style={{flex:0.2, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                  <TouchableOpacity onPress={()=>{}} style={{width:41,marginLeft:10, marginRight:10}}>
                    <Image source={require('../../assets/imgs/paperclipBtn.png')} />
                  </TouchableOpacity>
                
                  <TouchableOpacity onPress={()=>{}} style={{width:41,marginLeft:10, marginRight:10}}>
                    <Image source={require('../../assets/imgs/pencilBtn.png')} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>{}} style={{width:41,marginLeft:10, marginRight:10}}>
                    <Image source={require('../../assets/imgs/PhotoBtn.png')} />
                  </TouchableOpacity>                
              </View>

            </View>
          </Image>
      </View>
      
      
    );
    */
  }
}

let styles = StyleSheet.create({
  
});

export default Main;