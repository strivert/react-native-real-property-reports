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
export default class ItemListsWithTag extends Component {

  /**
    * ItemList Component Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);
    this.state = {
      listIndex: null,
      value3Index: null
    }
  }  

  /**
   * Handles the event when a item is pressed
   * @param {str} value
   * @param {int} index
   * @return {void}
   */
  onPress(value, index, listIndex) {
    this.setState({
      listIndex: listIndex,
      value3Index: index
    })

    // this.props.handleChangeItem(value.label);
  }

  componentWillReceiveProps(nextProps){
    if( nextProps.new != this.props.new ){
      this.setState({
        listIndex: null,
        value3Index: null
      })
    }
  }

  /**
   * Render Lists
   * @return {jsxresult} result in jsx format
   */
  render() {
    let {itemInfo} = this.props;

    let returnList = null;
    returnList = itemInfo.map((listItem, listIndex) => {
      return (
        <View style={styles.itemList} key={`listWithTag-${listIndex}`}>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginBottom: 10, marginTop: 15}}>{listItem.listTag}</Text>
          </View>
          <RadioForm animation={true}>
            {listItem.listData.map((obj, i) => {            
              
              let radioStyle = null;

              if( this.state.listIndex === listIndex && this.state.value3Index === i ) {
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
              
              let radioLabelStyle = (this.state.listIndex === listIndex && this.state.value3Index === i)?[styles.radioLabel, styles.bold]:styles.radioLabel;

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
                <TouchableOpacity onPress={this.onPress.bind(this, obj, i, listIndex)} key={`list_${i}`}>
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
    });

    //console.log(returnList);
    return (
      <View>
        {returnList}
      </View>
    );

  }
}

var styles = StyleSheet.create({
  itemList: {
    
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
