import React, {Component} from 'react';
import update from 'react-addons-update';

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  TextBtn
} from '../Atoms';

import Modal from 'react-native-modal';

/**
 * High Level Container
 */
class NewDetailItem extends Component {
  /**
    * App Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };    
  }

  /**
   * Render a page(screen)
   * @return {jsxresult} result in jsx format
   */
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    });    

    const {text} = this.state;

    return (
        <View style={styles.container}>
          <Modal 
          isVisible={true}
          onBackdropPress = {()=>{
            this.props.onDisableNewDetailItemVisible();
          }}
          >
            <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, width: 800, height: 300, padding: 20, paddingTop: 10, paddingBottom: 10, position: 'absolute', left: 0, top: 0}}>
              <View>
                <Text style={{paddingLeft: 10, fontSize: 20, color: 'black', fontWeight: 'bold', marginBottom: 10}}>Add New Selection</Text>
              </View>
              <View style={{marginTop: 20}}>                
                <TextInput
                  style={{height: 40, width: 600, borderColor: 'gray', borderWidth: 1, marginLeft: 10}}
                  underlineColorAndroid='transparent'
                  onChangeText={(text) => {
                    this.setState({
                      text: text
                    })
                  }}
                  value={text}
                />
                <Text style={{fontSize: 15, fontStyle: 'italic', marginLeft: 10}}>numbers and letters only</Text>
              </View>
              <View style={{height: 80, marginTop: 100, flexDirection: 'row', paddingTop: 0, justifyContent: 'space-between'}}>
                <TextBtn
                  imgSrc={require('../../assets/imgs/BTN_Grey_Med.png')}
                  style={{height: 34, resizeMode: 'stretch', margin: 10, marginRight: 20}}
                  onPress={()=>{
                    // this.props.onDisableNewAddressVisible();
                  }}
                >
                  Delete
                </TextBtn>

                <TextBtn
                  imgSrc={require('../../assets/imgs/BTN_Blue_Med.png')}
                  style={{height: 34, resizeMode: 'stretch', margin: 10, marginRight: 20}}
                  onPress={()=>{
                    this.props.onSaveNewDetailItem(text);
                  }}
                >
                  Save
                </TextBtn>

              </View>
            </View>
          </Modal>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  itemList: {
    marginTop: 20,
    marginBottom: 20
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    margin:0
  },
  radio: {
    borderWidth:1,
    paddingTop:10,
    paddingBottom:5,
    borderTopWidth:0,
    borderLeftWidth:0,
    borderRightWidth:0,    
    backgroundColor:'#f7f7f7',
    borderColor:'#ababab'
  },
  radioFirst: {
    borderTopWidth:1
  },
  bg: {
    backgroundColor:'#00aced'
  },
  radioLabel: {
    fontSize: 16, 
    color: 'black', 
    marginLeft: 30,
    fontFamily: 'Roboto-Regular',
    marginTop: 2, 
    marginRight: 20,
    lineHeight: 30
  },
  bold: {
    fontFamily: 'Roboto-Bold'
  }
});

export default NewDetailItem;
