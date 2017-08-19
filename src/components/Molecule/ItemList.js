import React, { Component } from 'react';

import ReactNative from 'react-native';
const {  
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight
} = ReactNative;
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

/**
 * ItemList component
 */
export default class ItemList extends Component {

  /**
    * ItemList Component Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state = {
      value3Index: null
    }
  }  

  /**
   * Handles the event when a item is pressed
   * @param {str} value
   * @param {int} index
   * @return {void}
   */
  onPress(value, index) {
    this.setState({
      value3Index: index
    })

    this.props.handleChangeItem(value.label);
  }

  componentWillReceiveProps(nextProps){
    if( nextProps.new != this.props.new ){
      this.setState({
        value3Index: null
      })
    }
  }

  /**
   * Render Lists
   * @return {jsxresult} result in jsx format
   */
  render() {
    let {items} = this.props;
    
    return (
      <View style={styles.itemList}>
        <RadioForm animation={true}>
          {items.map((obj, i) => {            
            
            let radioStyle = null;

            if( this.state.value3Index === i ) {
              if( i==0 )
                radioStyle =[styles.radio, styles.bg, styles.radioFirst];
              else
                radioStyle = [styles.radio, styles.bg];
            }else{
              if( i==0 )
                radioStyle =[styles.radio, styles.radioFirst];
              else
                radioStyle = [styles.radio];
            }
            
            let radioLabelStyle = (this.state.value3Index === i)?[styles.radioLabel, styles.bold]:styles.radioLabel;

            let radioBtn = null;
            if (obj.radioBtnState === '0') {
              radioBtn = <Image source={require('../../assets/imgs/greyButtonSmall.png')} />
            }else if (obj.radioBtnState === '1') {
              radioBtn = <Image source={require('../../assets/imgs/blueButton2Small.png')} />
            }else if (obj.radioBtnState === '2') {
              radioBtn = <Image source={require('../../assets/imgs/blueCheckMarkSmall.png')} />
            }else if (obj.radioBtnState === '3') {
              radioBtn = <Image source={require('../../assets/imgs/blueCheckMarkPhotoSmall.png')} />
            }

            return (
              <TouchableOpacity onPress={this.onPress.bind(this, obj, i)} key={`list_${i}`}>
                <View key={i} style={radioStyle}>
                  <RadioButton key={i} style={{}}>
                    <View key={i} style={styles.list}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                      <View style={{flex:0.1, justifyContent:'center', paddingLeft: 10}}>
                        {radioBtn}
                      </View>
                      <View style={{flex:0.9}}>
                        <Text style={radioLabelStyle}>{obj.label}</Text>                    
                      </View>
                    </View>
                  </RadioButton>                
                </View>
              </TouchableOpacity>
            )
          })}
        </RadioForm>
        
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
    fontSize: 18, 
    color: 'black', 
    marginLeft: 30,
    fontFamily: 'Roboto-Regular',
    marginTop: 2, 
    marginRight: 20
  },
  bold: {
    fontFamily: 'Roboto-Bold'
  }
});
