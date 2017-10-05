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
  TextInput
} from 'react-native';

import {
  TextBtn
} from '../Atoms';

import Modal from 'react-native-modal';

/**
 * High Level Container
 */
class Notes extends Component {

  /**
    * App Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  componentDidMount() {
    const {sectionNote} = this.props;
    this.setState({
      text: sectionNote
    });
    this.refs.messageTextInput.focus();
  }

  /**
   * Render a page(screen)
   * @return {jsxresult} result in jsx format
   */
  render() {

    const {sectionNote, sectionName} = this.props;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    });

    return (
        <View style={styles.container}>
          <Modal 
          isVisible={true}
          onBackdropPress = {()=>{
            this.props.onDisableSectionNoteVisible();
          }}
          >
            <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, width: 700, height: 350, padding: 20, paddingTop: 10, paddingBottom: 10, position: 'absolute', left: 0, top: 0}}>
              <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>SECTION NOTES: {sectionName}</Text>
                <Text style={{color: 'black'}}>These notes are placed at the top of the section with the title OVERVIEW</Text>
                <TextInput 
                  ref="messageTextInput"
                  style={{borderColor: '#dddddd', backgroundColor: '#dddddd', borderWidth: 1, color: 'black', fontSize: 18, paddingLeft:10, height: 220, marginTop: 10, textAlignVertical: 'top'}}
                  underlineColorAndroid="transparent"
                  placeholder=""
                  multiline = {true}
                  numberOfLines = {4}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5}}>
                  <TextBtn
                    imgSrc={require('../../assets/imgs/BTN_Red_Large.png')}
                    style={{width: 160, height: 34, resizeMode: 'stretch', margin: 10}}
                    onPress={()=>{
                      this.setState({
                        text: ''
                      }, ()=>{
                        this.props.onDelSectionNote()
                      });
                    }}
                  >
                    Delete
                  </TextBtn>

                  <TextBtn
                    imgSrc={require('../../assets/imgs/BTN_Blue_Med.png')}
                    style={{height: 34, resizeMode: 'stretch', margin: 10}}
                    onPress={()=>{
                      this.props.onSaveSectionNote(this.state.text);
                    }}
                  >
                    Save
                  </TextBtn>
                </View>
              </View>              
            </View>
          </Modal>
        </View>
    );
  }
}

export default Notes;
