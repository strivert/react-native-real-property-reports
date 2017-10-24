import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn,
  TextWithLetterSpacing
} from '../components/Atoms';
import {
  ItemList
} from '../components/Molecule';
import EStyleSheet from 'react-native-extended-stylesheet';
const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  TextInput
} = ReactNative;

/**
 * Container component for UserLeft of Setup page
 */
class InnerSetupUserLeft extends Component {

  /**
    * SetupUserLeft Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render SetupUserLeft page
   * @return {jsxresult} result in jsx format
   */
  render() {

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<View style={styles.userLeftTop}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>Total Credits:</Text>
          <Text style={styles.userLeftTopCreditNumber}>4</Text>
          <View style={styles.creditBtn}>
            <TextBtn imgSrc={require('../assets/imgs/BtnBlue2.png')} style={{height: 40, width: 130, resizeMode: 'stretch'}} onPress={()=>{}}>Buy Credits</TextBtn>
          </View>
          <Text style={{marginTop: 20, padding: 10, fontSize: 16, letterSpacing: 5}}>1 credit is needed per address (report) to email your report. A report can be modified and emailed as many times as you like.</Text>
        </View>
        <View style={{flex: 0.35, padding: 20}}>
          <Text>User Email:</Text>
          <TextInput
            style={{height: 50, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
            underlineColorAndroid='transparent'
            value='xxx@xxx.com'
          />
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Grey_Small.png')} onPress={()=>{}}>Sign Out</TextBtn>
          </View>
          <Text>Version 3.1.1</Text>
        </View>
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  userLeftTop: {
    flex:0.65, marginTop: 50, padding: 10
  },
  userLeftTopCreditNumber: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 70,
    color: 'black'
  },
  creditBtn: {
    alignItems: 'center', marginTop: 20
  },
  '@media (max-height: 719)': {
    userLeftTop: {
      flex:0.4,
      marginTop: 0
    },
    userLeftTopCreditNumber: {
      marginTop: 0
    },
    creditBtn: {
      marginTop: 0
    }
  }
});

export default InnerSetupUserLeft;
