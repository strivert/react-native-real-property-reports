import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Header, Footer} from '../components';
import {InnerSetup} from './';

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
class Setup extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state={
      clickedPage: 'report',
      reportEditBtnClicked: false,
      userEditBtnClicked: false
    }
  }

  /**
   * Render Setup page
   * @return {jsxresult} result in jsx format
   */
  render() {    
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Setup'
        />
     	  <View style={{flex:1}}>
          <Image source={require('../assets/imgs/mainBackground.png')}>
            <InnerSetup
              clickedPage={this.state.clickedPage}
              reportEditBtnClicked={this.state.reportEditBtnClicked}
              userEditBtnClicked={this.state.userEditBtnClicked}
            />
          </Image>
        </View>
        <Footer.Main
          page='Setup'
          changePage={(innerPage)=>{
            this.setState({
              clickedPage: innerPage
            })
          }}
          changeEditToggle={(reportEditBtnClicked, userEditBtnClicked)=>{
            this.setState({
              reportEditBtnClicked: reportEditBtnClicked,
              userEditBtnClicked: userEditBtnClicked
            })
          }}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default Setup;
