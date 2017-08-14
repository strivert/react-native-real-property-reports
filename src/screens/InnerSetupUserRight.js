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
  Linking,
  Switch
} = ReactNative;

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
        firstName: {
          label: 'First Name',
          value: 'Samual'
        }
      },
      falseSwitchIsOn: false
    }
  }

  /**
   * Render SetupUserRight page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    let mode = (this.props.userEditBtnClicked)?'0':'1';
    return (
      <View style={{flex:1, padding:10, paddingLeft: 40, paddingRight: 40, paddingBottom: 70}}>
        <ScrollView>          
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>            
                <Text style={{color:'gray', fontWeight:'bold'}}>User Information</Text>
                <InputToggleText label='First Name'  value='' mode={mode} />
                <InputToggleText label='Last Name'  value='' mode={mode} />
                <InputToggleText label='Work Phone'  value='' mode={mode} />
            </View>
            <View style={{flex:0.5, marginTop:15}}>
              <Image source={require('../assets/imgs/sampleLogo.png')} />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='Home Phone'  value='' mode={mode} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='Cell Phone'  value='' mode={mode} />
            </View>
          </View>
          <View>
            <InputToggleText label='Email'  value='' mode={mode} />
            <InputToggleText label='Company Name'  value='' mode={mode} />
            <InputToggleText label='Employee Name'  value='' mode={mode} />
            <InputToggleText label='Address'  value='' mode={mode} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='City'  value='' mode={mode} />
              <InputToggleText label='Zip / Postal Code'  value='' mode={mode} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='State / Province'  value='' mode={mode} />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5, marginRight: 15}}>
              <InputToggleText label='License Type'  value='' mode={mode} />
            </View>
            <View style={{flex:0.5}}>
              <InputToggleText label='License / Certificate Number'  value='' mode={mode} />
            </View>
          </View>
          <View>
            <InputToggleText label='Standards of Inspection (optional: appears at front of report after Fact Sheet)'  value='' mode={mode} />
            <InputToggleText label='Legal, Terms and Conditions (optional: inserted at bottom of report with signatures)'  value='' mode={mode} />            
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image source={require('../assets/imgs/ISNIcon.png')} />
            <Text style={{color:'black', fontSize: 20, fontWeight: 'bold'}}>ISN</Text>
          </View>

          <View>
            <InputRowToggleText label='Username'  value='Ssdfsdf' mode={mode} />
            <InputRowToggleText label='Password'  value='' mode={mode} />
            <InputRowToggleText label='Company Key'  value='' mode={mode} />
          </View>

          <View>
            <Text style={{color:'black', fontSize: 20, fontWeight: 'bold'}}>Special Reports</Text>
            <Text>Choose your state below for additional reports</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Text style={{color:'black', fontSize: 17, fontWeight: 'bold', marginRight: 20}}>Florida</Text>
            <Switch
              onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
              style={{marginBottom: 10}}
              value={this.state.falseSwitchIsOn} />
          </View>

        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerSetupUserRight;
