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
class Limitations extends Component {
  static defaultProps = {
    limitationPropData: [
      'Darkness hindered visibility',
      'Inadequate Angle'
    ]
  };



  /**
    * App Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);
    this.limitationArr = [
      'Darkness hindered visibility',
      'Inaccessible',
      'Obstructed',
      'Height prevented access',
      'Insulation prevented access',
      'Weather hindered access - Snowing',
      'Excessive storage prevented access',
      'Weather hindered access - Rain',
      'Inadequate Angle',
      'Snow covered'
    ];
    
    this.state = {
      selectedLimitation: []  
    };    
  }

  componentDidMount() {
    const {limitationPropData} = this.props;
    this.setState({
      selectedLimitation: limitationPropData
    });
  }

  onPress(value) {
    const {selectedLimitation} = this.state;
    let index = selectedLimitation.indexOf(value);
    if ( index != -1 ) {
      this.setState(
        update(this.state, {
          selectedLimitation: {
            $splice: [[index, 1]]
          }
        }), ()=>{
          this.props.setLimitation(this.state.selectedLimitation);
        }
      );
    } else {
      this.setState(
        update(this.state, {
          selectedLimitation: {
            $push: [value]
          }
        }), ()=>{
          this.props.setLimitation(this.state.selectedLimitation);          
        }
      );
    }
  }

  showBtns(items) {
    let btns = [];
    for( var k=0; k<5; k++) {
      let label1 = items[k*2]['label'];
      let label2 = items[k*2+1]['label'];
      let state1 = items[k*2]['radioBtnState'];
      let state2 = items[k*2+1]['radioBtnState'];
      btns[k] = 
      (
        <View style={{flexDirection: 'row', height: 50}} key={`limitations-${k}`}>
          <TouchableOpacity 
            onPress={()=>{
              this.onPress(label1);
            }}
            style={{width: 380}}
          >
            <View style={styles.list}>
              <View style={{flex:0.1, justifyContent:'center', paddingLeft: 10}}>
                {
                  state1 == '1' ? 
                    <Image source={require('../../assets/imgs/blueCheckMarkSmall.png')} />
                    :
                    <Image source={require('../../assets/imgs/greyButtonSmall.png')} />
                }
              </View>
              <View style={{flex:0.9}}>
                <Text style={[styles.radioLabel, styles.bold]}>{label1}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>{
              this.onPress(label2);
            }}
            style={{width: 380}}
          >
            <View style={styles.list}>
              <View style={{flex:0.1, justifyContent:'center', paddingLeft: 10}}>
                {
                  state2 == '1' ? 
                    <Image source={require('../../assets/imgs/blueCheckMarkSmall.png')} />
                    :
                    <Image source={require('../../assets/imgs/greyButtonSmall.png')} />
                }
                
              </View>
              <View style={{flex:0.9}}>
                <Text style={[styles.radioLabel, styles.bold]}>{label2}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
    return btns;
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

    const {limitationPropData} = this.props;
    const {selectedLimitation} = this.state;

    const items = this.limitationArr.map((item, index)=>{
      let returnObj = {};
      if (selectedLimitation.indexOf(item) != -1) {
        returnObj.radioBtnState = '1';
      } else {
        returnObj.radioBtnState = '0';        
      }
      returnObj.label = item;
      return returnObj;
    });

    let btns = this.showBtns(items);
    // console.log(items);

    return (
        <View style={styles.container}>
          <Modal 
          isVisible={true}
          onBackdropPress = {()=>{
            this.props.onLimitationNote();
          }}
          >
            <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, width: 800, height: 350, padding: 20, paddingTop: 10, paddingBottom: 10, position: 'absolute', left: 0, top: 0}}>
              <View>
                <Text style={{paddingLeft: 30, fontSize: 20, color: 'black', fontWeight: 'bold', marginBottom: 10}}>Limitations</Text>
              </View>
              {
                btns
              }
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

export default Limitations;
