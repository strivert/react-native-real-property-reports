import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InputToggleText,
  InputRowToggleText,
  Letter
} from '../components/Atoms';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
  Switch
} = ReactNative;

import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * Container component for UserRight of Setup screen
 */
class InnerSetupUserRight extends Component {

  /**
    * SetupUserRight Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);

    this.state={
      data: { 
        userEmail: '',
        firstName: '',
        lastName: '',
        workPhone: '',
        homePhone: '',
        cellPhone: '',
        companyName: '',
        employeeName: '',
        Address: '',
        city: '',
        stateProvince: '',
        zipCode: '',
        licenseType: '',
        licenseNumber: '',
        standardOfInspection: '',
        legal: '',
        isnUserName: '',
        isnPasswd: '',
        isnCompanyKey: '',
        isFlorida: false,
        images: []
      },
      falseSwitchIsOn: false
    }
  }

  componentDidMount() {
    const {account} = this.props;
    this.setState({
      data: Object.assign({}, account[0])
    });
  }

  componentWillReceiveProps (nextProps) {
    const {account} = nextProps;
    this.setState({
      data: Object.assign({}, account[0])
    });
  }

  onChangeText(what, text) {
    let updateState = Object.assign({}, this.state.data);
    updateState[what] = text;
    this.setState({
      data: updateState
    }, ()=>{
      this.props.onStoreTempAddress(updateState);
    })
  }

  dispImage(arrObj, styleObj) {
    let obj = 
      arrObj['drawImage'] !='' ?
        (<Image source={{uri: `data:image/png;base64,${arrObj.drawImage}`}} style={styleObj} />)
      :
        (<Image source={{uri: `data:image/png;base64,${arrObj.backImage}`}} style={styleObj} />);

    return obj;
  }

  /**
   * Render SetupUserRight page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    let mode = (this.props.userEditBtnClicked)?'0':'1';
    const {account} = this.props;
    const {
      userEmail,
      firstName,
      lastName,
      workPhone,
      homePhone,
      cellPhone,
      companyName,
      employeeName,
      address,
      city,
      stateProvince,
      zipCode,
      licenseType,
      licenseNumber,
      standardOfInspection,
      legal,
      isnUserName,
      isnPasswd,
      isnCompanyKey,
      isFlorida,
      images
    } = this.state.data;

    return (
      <View style={styles.container}>
        <ScrollView>          
          <View style={{flexDirection: 'row'}}>
            <View style={styles.userInfo}>
                <Text style={{color:'gray', fontWeight:'bold'}}>User Information</Text>
                <InputToggleText label='First Name'  value={firstName} mode={mode} onChangeText={(text)=>this.onChangeText('firstName', text)} />
                <InputToggleText label='Last Name'  value={lastName} mode={mode} onChangeText={(text)=>this.onChangeText('lastName', text)} />
                <InputToggleText label='Work Phone'  value={workPhone} mode={mode} onChangeText={(text)=>this.onChangeText('workPhone', text)} />
            </View>
            <View style={styles.logoImg}>
              <TouchableOpacity 
                onPress={()=>{
                  this.props.onDisableCameraPicVisible();
                }}
              >
                <Image source={require('../assets/imgs/sampleLogo.png')}>
                  {
                    images.length > 0 &&
                    this.dispImage(images[0], {width: 290, height: 200, resizeMode: 'stretch'})
                  }
                </Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='Home Phone'  value={homePhone} mode={mode} onChangeText={(text)=>this.onChangeText('homePhone', text)} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='Cell Phone'  value={homePhone} mode={mode} onChangeText={(text)=>this.onChangeText('cellPhone', text)} />
            </View>
          </View>
          <View>
            <InputToggleText label='Email'  value={userEmail} mode={mode} onChangeText={(text)=>this.onChangeText('userEmail', text)} />
            <InputToggleText label='Company Name' value={companyName} mode={mode} onChangeText={(text)=>this.onChangeText('companyName', text)} />
            <InputToggleText label='Employee Name' value={employeeName} mode={mode} onChangeText={(text)=>this.onChangeText('employeeName', text)} />
            <InputToggleText label='Address'  value={address} mode={mode} onChangeText={(text)=>this.onChangeText('address', text)} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='City'  value={city} mode={mode} onChangeText={(text)=>this.onChangeText('city', text)} />
              <InputToggleText label='Zip / Postal Code'  value={zipCode} mode={mode} onChangeText={(text)=>this.onChangeText('zipCode', text)} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='State / Province'  value={stateProvince} mode={mode} onChangeText={(text)=>this.onChangeText('stateProvince', text)} />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='License Type'  value={licenseType} mode={mode} onChangeText={(text)=>this.onChangeText('licenseType', text)} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='License / Certificate Number'  value={licenseNumber} mode={mode} onChangeText={(text)=>this.onChangeText('licenseNumber', text)} />
            </View>
          </View>
          <View>
            <InputToggleText label='Standards of Inspection (optional: appears at front of report after Fact Sheet)'
              value={standardOfInspection} mode={mode} onChangeText={(text)=>this.onChangeText('standardOfInspection', text)} />
            <InputToggleText label='Legal, Terms and Conditions (optional: inserted at bottom of report with signatures)'
              value={legal} mode={mode} onChangeText={(text)=>this.onChangeText('legal', text)} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require('../assets/imgs/ISNIcon.png')} />
            <Text style={{color:'black', fontSize: 20, fontWeight: 'bold'}}>ISN</Text>
          </View>

          <View>
            <InputRowToggleText label='Username'  value={isnUserName} mode={mode} onChangeText={(text)=>this.onChangeText('isnUserName', text)} />
            <InputRowToggleText label='Password'  value={isnPasswd} mode={mode} onChangeText={(text)=>this.onChangeText('isnPasswd', text)} />
            <InputRowToggleText label='Company Key'  value={isnCompanyKey} mode={mode} onChangeText={(text)=>this.onChangeText('isnCompanyKey', text)} />
          </View>

          <View>
            <Text style={{color:'black', fontSize: 20, fontWeight: 'bold'}}>Special Reports</Text>
            <Text>Choose your state below for additional reports</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={{color:'black', fontSize: 17, fontWeight: 'bold', marginRight: 20}}>Florida</Text>
            <Switch
              onValueChange={(value) => {
                // this.setState({falseSwitchIsOn: value})
                this.onChangeText('isFlorida', value);
              }}
              style={{marginBottom: 10}}
              value={isFlorida} />
          </View>

        </ScrollView>
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  container: {
    flex:1, padding:10, paddingLeft: 40, paddingRight: 40, paddingBottom: 70
  },
  userInfo: {
    flex: 0.5, marginRight: 15
  },
  logoImg: {
    flex: 0.5, marginTop: 15
  },
  '@media (max-height: 719)': {
    container: {
      paddingBottom: 250
    },
    userInfo: {
      flex: 0.45
    },
    logoImg: {
      flex: 0.55
    }
  }  
});

export default InnerSetupUserRight;
