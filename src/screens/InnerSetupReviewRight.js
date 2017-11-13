import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InputToggleText
} from '../components/Atoms';
import EStyleSheet from 'react-native-extended-stylesheet';

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
 * Container component for ReportRight of Setup page
 */
class InnerSetupReviewRight extends Component {

  /**
    * SetupReportRight Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);

    this.state={
      data: { 
        reportName: '',
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        date: '',
        realtor1: '',
        realtor2: '',
        ud1: '',  // inspection fee
        ud2: '',  // (212) 555-5555
        ud3: '',  // email
        ud4: '',  // weather
        ud5: '',
        images: [],
        inspectorSignature: '',
        clientSignature: ''
      }
    }
  }

  componentDidMount() {
    const {address, selectedAddressIndex} = this.props;
    this.setState({
      data: Object.assign({}, address[selectedAddressIndex])
    });
  }
  /*
  shouldComponentUpdate(nextProps, nextState){
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }
  */

  componentWillReceiveProps (nextProps) {
    const {address, selectedAddressIndex} = nextProps;
    this.setState({
      data: Object.assign({}, address[selectedAddressIndex])
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
   * Render SetupReportRight page
   * @return {jsxresult} result in jsx format
   */
  render() {
    let mode = (this.props.reportEditBtnClicked)?'0':'1';

    const {address, selectedAddressIndex} = this.props;
    const {
      reportName,
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zip,
      date,
      realtor1,
      realtor2,
      ud1,  // inspection fee
      ud2,  // phone number
      ud3,  // email
      ud4,  // weather
      ud5,  // direction
      images,
      inspectorSignature,
      clientSignature
    } = this.state.data;

    return (
      <View style={{flex:1, padding:10, paddingLeft: 40, paddingRight: 40, paddingBottom: 70}}>
        <ScrollView>
          
          <View style={{flexDirection: 'row'}}>
            <View style={styles.clientLeftWidth}>
            	  <Text style={{color:'gray', fontWeight:'bold'}}>Client Information</Text>
                <InputToggleText label='First Name'  value={firstName} mode={mode} onChangeText={(text)=>this.onChangeText('firstName', text)} />
                <InputToggleText label='Last Name'  value={lastName} mode={mode} onChangeText={(text)=>this.onChangeText('lastName', text)} />
                <InputToggleText label='Phone Number'  value={ud2} mode={mode} onChangeText={(text)=>this.onChangeText('ud2', text)} />
            </View>
            <View style={styles.clientRightWidth}>
              <TouchableOpacity 
                onPress={()=>{
                  this.props.onDisableCameraPicVisible();
                }}
              >
                <Image source={require('../assets/imgs/This_Old_House.jpeg')}>
                  {
                    images.length > 0 &&
                    this.dispImage(images[0], {width: 290, height: 200, resizeMode: 'stretch'})
                  }
                </Image>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <InputToggleText label='Email'  value={ud3} mode={mode} onChangeText={(text)=>this.onChangeText('ud3', text)} />
            <InputToggleText label='Email 2'  value='' mode={mode} />
            <InputToggleText label='Address'  value={address1} mode={mode} onChangeText={(text)=>this.onChangeText('address1', text)} />
            <InputToggleText label=''  value={address2} mode={mode} onChangeText={(text)=>this.onChangeText('address2', text)} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='City'  value={city} mode={mode} onChangeText={(text)=>this.onChangeText('city', text)} />
              <InputToggleText label='Zip / Postal Code'  value={zip} mode={mode} onChangeText={(text)=>this.onChangeText('zip', text)} />
              <InputToggleText label='Date of Inspection'  value={date} mode={mode} onChangeText={(text)=>this.onChangeText('date', text)} />
              <InputToggleText label='Realtor 1 (optional)'  value={realtor1} mode={mode} onChangeText={(text)=>this.onChangeText('realtor1', text)} />
              <InputToggleText label='Realtor 1 Email'  value='' mode={mode} />
              <InputToggleText label='Insurance Company'  value='' mode={mode} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='State / Province'  value={state} mode={mode} onChangeText={(text)=>this.onChangeText('state', text)} />
              <InputToggleText label='County'  value='' mode={mode} />
              <InputToggleText label='Inspection Fee (optional)'  value={ud1} mode={mode} onChangeText={(text)=>this.onChangeText('ud1', text)} />
              <InputToggleText label='Realtor 2 (optional)'  value={realtor2} mode={mode} onChangeText={(text)=>this.onChangeText('realtor2', text)} />
              <InputToggleText label='Realtor 2 Email'  value='' mode={mode} />
              <InputToggleText label='Policy Number'  value='' mode={mode} />
            </View>
          </View>

          <View>
            <InputToggleText label='Weather on day of inspection'  value={ud4} mode={mode} onChangeText={(text)=>this.onChangeText('ud4', text)} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='Direction house faces'  value={ud5} mode={mode} onChangeText={(text)=>this.onChangeText('ud5', text)} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='Number of Stories'  value='' mode={mode} />
            </View>
          </View>

          <View>
            <InputToggleText label='Summary Comments (shown on first page of report, max 300 characters)'  value='This home is in a reasonable state of repair...' mode={mode} textarea='1' />
          </View>

          <View>
            <Text style={{fontSize:24}}>Signatures</Text>
            <Text style={{fontStyle:'italic'}}>optional: inserted below your Legal, Terms and Conditions</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={styles.signLeftWidth}>
              <TouchableOpacity
                onPress={()=>{
                  this.props.onDisableSignatureVisible('inspector');
                }}
              >
                <Image source={require('../assets/imgs/sampleInspecterSignature.png')}>
                  {
                    inspectorSignature !='' && 
                    <Image source={{uri: `data:image/png;base64,${inspectorSignature}`}} style={{width: 276, height: 194, resizeMode: 'stretch'}} />
                  }
                </Image>
              </TouchableOpacity>  
              <Text style={{textAlign: 'center', marginTop: 5}}>Inspector</Text>
            </View>
            <View style={styles.signRightWidth}>
              <TouchableOpacity
                onPress={()=>{
                  this.props.onDisableSignatureVisible('client');
                }}
              >
                <Image source={require('../assets/imgs/sampleInspecterSignature.png')}>
                  {
                    clientSignature !='' && 
                    <Image source={{uri: `data:image/png;base64,${clientSignature}`}} style={{width: 276, height: 194, resizeMode: 'stretch'}} />
                  }
                </Image>
              </TouchableOpacity>
              <Text style={{textAlign: 'center', marginTop: 5}}>Client</Text>
            </View>
          </View>

          <View style={styles.legalHeight}>
            <Text style={{fontSize:24}}>Legal, Terms and Conditions</Text>            
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  legalHeight: {
    height: 'auto'
  },
  clientLeftWidth: {
    flex:0.5, marginRight: 15
  },
  clientRightWidth: {
    flex:0.5, marginTop:15
  },
  signLeftWidth: {
    flex:0.5, marginRight: 15
  },
  signRightWidth: {
    flex:0.5
  },
  '@media (max-height: 719)': {
    legalHeight: {
      height: 250
    },
    clientLeftWidth: {
      flex:0.43
    },
    clientRightWidth: {
      flex:0.57
    },
    signLeftWidth: {
      flex: 0.48, marginRight: 5, marginLeft: -10
    },
    signRightWidth: {
      flex: 0.52
    },
  }
});

export default InnerSetupReviewRight;
