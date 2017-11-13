import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn,
  TextWithLetterSpacing
} from '../components/Atoms';
import {
  ItemList
} from '../components/Molecule';
import {
  validateEmail
} from '../utils/utils';
import config from '../config/config';
import update from 'react-addons-update';
import EStyleSheet from 'react-native-extended-stylesheet';
const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
  TextInput,
  Alert,
  Keyboard
} = ReactNative;

/**
 * Container component for UserLeft of Setup page
 */
class InnerPreviewLeft extends Component {

  /**
    * SetupUserLeft Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);

    this.state={
      enteredEmail: '',
      emails:[
      /*
      'email1@email.com',
      'email2@email.com'
      */
      ]
    }
  }

  componentDidMount() {
    const {reportEmails} = this.props;
    this.setState({
      emails: Object.assign([], reportEmails)
    });
  }
  /*
  shouldComponentUpdate(nextProps, nextState){
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }
  */

  componentWillReceiveProps (nextProps) {
    const {reportEmails} = nextProps;
    this.setState({
      emails: Object.assign([], reportEmails)
    });
  }
  
  delEmail(index) {
    /*
    this.setState(
      update(this.state, {
        emails: {
          $splice: [[index, 1]]
        }
      })
    );
    */
    this.props.delReportEmail(index);
  }

  handleAddEmail() {
    if ( !validateEmail(this.state.enteredEmail) ) {
      Alert.alert(
        config.EMAIL_ERROR_TITLE,
        config.EMAIL_ERROR_CNT,
        [
          {text: 'OK', onPress: () => { } }
        ]
      )
      return;
    } else {
      /*
      this.setState(
        update(this.state, {
            emails: {
              [this.state.emails.length]: {$set: this.state.enteredEmail}
            }
        }), ()=>{
          this.setState({
            enteredEmail: ''
          });
          Keyboard.dismiss();
        }
      );
      */
      this.props.addReportEmail(this.state.enteredEmail);
      this.setState({
        enteredEmail: ''
      });
      Keyboard.dismiss();
    }
  }

  /**
   * Render SetupUserLeft page
   * @return {jsxresult} result in jsx format
   */
  render() {

    return (
      <View style={{flex: 1}}>
        <View style={styles.leftTop}>
          <TextBtn
            imgSrc={require('../assets/imgs/BTN_Blue_Large.png')}
            style={{height: 50, resizeMode: 'stretch'}}
            onPress={()=>{}}
          >
            Upload Report
          </TextBtn>

          <TextBtn
            imgSrc={require('../assets/imgs/BTN_Grey_Large.png')}
            style={{height: 50, resizeMode: 'stretch', marginTop: 10}}
            onPress={()=>{}}
          >
            Preview Report Email
          </TextBtn>
          <Image source={require('../assets/imgs/ExportEmailBG.png')} style={{marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=>{this.handleAddEmail()}}>
                <Image source={require('../assets/imgs/BtnAddEmail.png')} style={{width: 40, height: 40, resizeMode: 'stretch', marginTop: 10, marginLeft: 10}}>
                </Image>
              </TouchableOpacity>
              <TextInput
                style={{width:'80%', height: '100%', fontSize: 27}} 
                underlineColorAndroid='transparent'
                onSubmitEditing={()=>{this.handleAddEmail()}}
                onChangeText={(v) => this.setState({enteredEmail: v})}
                value={this.state.enteredEmail}
              ></TextInput>
            </View>
          </Image>          
        </View>

        <View style={styles.leftScroll}>
          <ScrollView>
            <View style={{/*borderWidth: 1, */borderColor: '#d6d3d3', margin: 2}}>
            {
              this.state.emails.map((item, index)=>{
                return (
                <View key={`email-item-${index}`}>
                  <View style={{flexDirection: 'row', backgroundColor: 'white', paddingLeft: 5, paddingTop: 5, paddingBottom: 5}}>
                    <TouchableOpacity onPress={()=>{this.delEmail(index)}}>
                      <Image source={require('../assets/imgs/BtnRemoveEmail.png')} style={{width: 40, height: 40, resizeMode: 'stretch'}} />
                    </TouchableOpacity>
                    <Text style={{color: 'black', fontSize: 18, lineHeight: 32, marginLeft: 10}}>
                      {item}
                    </Text>
                  </View>
                  {this.state.emails.length-1 != index &&
                    <View style={{borderWidth: 1, marginLeft: 10, borderColor: '#cccccc', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}></View>
                  }
                </View>
                );
              })
            }
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 10}}>
          <Text style={{fontStyle: 'italic', marginBottom: 10}}>emails take up to 1 min to send</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Blue_Large_Half.png')} style={{width: 165, resizeMode: 'stretch'}} onPress={()=>{}}>Send Email</TextBtn>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Red_Large_half.png')} style={{width: 165, resizeMode: 'stretch'}} onPress={()=>{}}>Send PDF</TextBtn>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
            <TextBtn imgSrc={require('../assets/imgs/BTN_Grey_Med.png')} style={{width: 165, resizeMode: 'stretch'}} onPress={()=>{}}>Sign Out</TextBtn>
          </View>
        </View>
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  leftScroll: {
    flex: 0.8
  },
  leftTop: {
    margin: 10, marginTop: 40
  },
  '@media (max-height: 719)': {
    leftScroll: {
      flex: 0.35
    },
    leftTop: {
      marginTop: 10
    }
  }
});

export default InnerPreviewLeft;
