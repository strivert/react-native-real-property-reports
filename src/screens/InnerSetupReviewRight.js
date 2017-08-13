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
 * Container component for Setup page
 */
class InnerSetupReviewRight extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);

    this.state={
      data: { 
        firstName: {
          label: 'First Name',
          value: 'Samual'
        }
      }
    }
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {
    let mode = (this.props.reportEditBtnClicked)?'0':'1';
    
    return (
      <View style={{flex:1, padding:10, paddingLeft: 40, paddingRight: 40, paddingBottom: 70}}>
        <ScrollView>
          
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>            
            	  <Text style={{color:'gray', fontWeight:'bold'}}>Client Information</Text>
                <InputToggleText label='First Name'  value='Samual' mode={mode} />
                <InputToggleText label='Last Name'  value='Sam' mode={mode} />
                <InputToggleText label='Phone Number'  value='(212)555-5555' mode={mode} />
            </View>
            <View style={{flex:0.5, marginTop:15}}>
              <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} />
            </View>
          </View>

          <View>
            <InputToggleText label='Email'  value='Sam@Sampleteon.com' mode={mode} />
            <InputToggleText label='Email 2'  value='' mode={mode} />
            <InputToggleText label='Address'  value='123 Sample Street' mode={mode} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='City'  value='Everytown' mode={mode} />
              <InputToggleText label='Zip / Postal Code'  value='55555' mode={mode} />
              <InputToggleText label='Date of Inspection'  value='May 30, 2016' mode={mode} />
              <InputToggleText label='Realtor 1 (optional)'  value='' mode={mode} />
              <InputToggleText label='Realtor 1 Email'  value='' mode={mode} />
              <InputToggleText label='Insurance Company'  value='' mode={mode} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='State / Province'  value='' mode={mode} />
              <InputToggleText label='County'  value='' mode={mode} />
              <InputToggleText label='Inspection Fee (optional)'  value='' mode={mode} />
              <InputToggleText label='Realtor 2 (optional)'  value='' mode={mode} />
              <InputToggleText label='Realtor 2 Email'  value='' mode={mode} />
              <InputToggleText label='Policy Number'  value='' mode={mode} />
            </View>
          </View>

          <View>
            <InputToggleText label='Weather on day of inspection'  value='' mode={mode} />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='Direction house faces'  value='North' mode={mode} />
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
