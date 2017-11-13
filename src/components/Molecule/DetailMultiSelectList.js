import React, { Component } from 'react';
import ReactNative from 'react-native';
import {
  TextBtn
} from '../Atoms';
const {  
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image
} = ReactNative;
import update from 'react-addons-update';
import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * ItemList component
 */
export default class DetailMultiSelectList extends Component {

  /**
    * ItemList Component Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state = {
      value3Index: []
    }
  }  

  componentDidMount() {
    let value3Index = [];
    this.props.items.map((item, index)=>{
      if(item.selected === '1') {
        value3Index.push(item.value);
      }
    });

    this.setState({
      value3Index: value3Index
    });
  }

  componentWillReceiveProps(nextProps) {
    let value3Index = [];
    nextProps.items.map((item, index)=>{
      if(item.selected === '1') {
        value3Index.push(item.value);
      }
    });

    this.setState({
      value3Index: value3Index
    });    
  }

  /**
   * Handles the event when a item is pressed
   * @param {str} value
   * @param {int} index
   * @return {void}
   */
  onPress(value, index) {
    
    if (this.state.value3Index.indexOf(index) === -1) {
      this.setState(
        update(this.state, {
          value3Index: {
            [this.state.value3Index.length]: {$set: index}
          }
        }), this.setPropsItem
      )
    } else {
      this.setState(
        update(this.state, {
          value3Index: {
            $splice: [[this.state.value3Index.indexOf(index), 1]]
          }
        }), this.setPropsItem
      )
    }    
  }

  setPropsItem() {
    this.props.handleChangeItem( this.state.value3Index);
  }

  /**
   * Render Lists
   * @return {jsxresult} result in jsx format
   */
  render() {
    let {items, goDetail, isEdit} = this.props;    
    // console.log(this.props);
    return (
      <View style={styles.itemList}>
        
          {items.map((obj, i) => {            
            
            let radioStyle = null;
            let selectedIndex = this.state.value3Index.indexOf(i);
            let radioLabelStyle = [styles.radioLabel];
            let chkBtn = null;
            

            if( selectedIndex !== -1 ) {
              if( i==0 )
                radioStyle =[styles.radio, styles.bg, styles.radioFirst];
              else
                radioStyle = [styles.radio, styles.bg];
              
              radioLabelStyle = [styles.radioLabel, styles.bold];
              chkBtn = <Image source={require('../../assets/imgs/blueCheckMarkSmall.png')} style={{height: 30, width: 45, resizeMode: 'stretch'}} />;
            }else{
              if( i==0 )
                radioStyle =[styles.radio, styles.radioFirst];
              else
                radioStyle = [styles.radio];
              chkBtn = <Image source={require('../../assets/imgs/greyButtonSmall.png')} style={{height: 30, width: 45, resizeMode: 'stretch'}} />;
            }
            
            return (
              <View key={i} style={radioStyle}>
                <TouchableWithoutFeedback onPress={this.onPress.bind(this, obj, i)}>
                  <View key={i} style={styles.list}>
                    <View style={{flex:0.1, justifyContent:'center'}}>
                      {chkBtn}
                    </View>
                    <View style={styles.labelLeft}>
                      <Text style={radioLabelStyle}>{obj.label}</Text>
                    </View>
                    {
                      (goDetail && selectedIndex!==-1 && isEdit === false) &&
                        
                          <View style={styles.labelRight}>
                            <TextBtn
                              imgSrc={require('../../assets/imgs/BTN_Blue_130x30.png')}
                              style={{marginRight: 10}}
                              onPress={()=>this.props.handleGoDetail(i)}
                            >
                              Details
                            </TextBtn>
                          </View>
                        
                    }

                    {(isEdit) &&
                      <View style={styles.labelRight}>
                        <TextBtn
                          imgSrc={require('../../assets/imgs/BTN_Blue_130x30.png')}
                          style={{marginRight: 10}}
                          onPress={()=>{
                            if(goDetail) {
                              this.props.handleGoEditItem(i, obj.label);
                            } else {
                              this.props.handleGoEditDetailItem(i, obj.label);
                            }
                          }}
                        >
                          Edit
                        </TextBtn>
                      </View>
                    }
                  </View>
                </TouchableWithoutFeedback>
              </View>
            )
          })}
      </View>
    );
  }
}

var styles = EStyleSheet.create({
  labelLeft: {
    flex:0.65
  },
  labelRight: {
    flex:0.25, alignItems: 'flex-end'
  },
  '@media (max-height: 719)': {
    labelLeft: {
      flex:0.6
    },
    labelRight: {
      flex:0.3, alignItems: 'flex-start'
    }
  },
  itemList: {
    marginTop:20
  },
  list:{
    flexDirection: 'row',
    margin:0
  },
  radio: {    
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:'#EFEFEF',
    marginBottom: 5
  },
  radioFirst: {
  },
  bg:{
    backgroundColor:'#dededf'
  },
  radioLabel: {
    fontSize: 17, 
    color: 'black', 
    lineHeight: 25
  },
  bold: {
  }
});
