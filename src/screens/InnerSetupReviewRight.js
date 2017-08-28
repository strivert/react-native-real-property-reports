import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InputToggleText
} from '../components/Atoms';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
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
        ud5: ''
      }
    }
  }

  componentDidMount() {
    const {address, selectedAddressIndex} = this.props;
    this.setState({
      data: Object.assign({}, address[selectedAddressIndex])
    });
  }

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
      ud5   // direction
    } = this.state.data;

    return (
      <View style={{flex:1, padding:10, paddingLeft: 40, paddingRight: 40, paddingBottom: 70}}>
        <ScrollView>
          
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>            
            	  <Text style={{color:'gray', fontWeight:'bold'}}>Client Information</Text>
                <InputToggleText label='First Name'  value={firstName} mode={mode} onChangeText={(text)=>this.onChangeText('firstName', text)} />
                <InputToggleText label='Last Name'  value={lastName} mode={mode} onChangeText={(text)=>this.onChangeText('lastName', text)} />
                <InputToggleText label='Phone Number'  value={ud2} mode={mode} onChangeText={(text)=>this.onChangeText('ud2', text)} />
            </View>
            <View style={{flex:0.5, marginTop:15}}>
              <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} />
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

          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <Image source={require('../assets/imgs/sampleInspecterSignature.png')} />
              <Text style={{textAlign:'center'}}>Inspector</Text>
            </View>
            <View style={{flex:0.5}}>
              <Image source={require('../assets/imgs/sampleInspecterSignature.png')} />
              <Text style={{textAlign:'center'}}>Client</Text>
            </View>
          </View>

          <View>
            <Text style={{fontSize:24}}>Legal, Terms and Conditions</Text>            
          </View>

        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerSetupReviewRight;
