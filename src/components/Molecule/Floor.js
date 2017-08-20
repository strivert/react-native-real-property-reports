import React, {Component} from 'react';
import ReactNative from 'react-native';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
  TextInput
} = ReactNative;

class FloorItem extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {selected} = this.props;
    /**
     * Render Letter
     * @return {jsxresult} result in jsx format
     */
     
    return (
      <View style={{marginBottom: 7}}>
        <TouchableOpacity onPress={()=>{this.props.onPress()}} >
          {
            selected ?
              <Image source={require('../../assets/imgs/statusBarBlue.png')} />
            :
              <Image source={require('../../assets/imgs/statusBarGrey.png')} />
          }
        </TouchableOpacity>
      </View>
    );
  }
}

/**
 * Floor component
 */
class Floor extends Component {

  /**
    * Floor Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      selectedFloor: {
        'basement': false,
        'first': false,
        'second': false,
        'third': false,
        'forth': false
      }
    }

    this.floorText = {
      'basement': 'basement',
      'first': '1st floor',
      'second': '2nd floor',
      'third': '3rd floor',
      'forth': '4th floor'
    }
  }

  setFloor(floor) {
    let initialFloor = {
      'basement': false,
      'first': false,
      'second': false,
      'third': false,
      'forth': false
    };

    let floorState = {};
    let selected = '';
    
    if (this.state.selectedFloor[floor]){
      initialFloor[floor] = false;
      selected = '';
    } else {
      initialFloor[floor] = true;
      selected = floor;
    }
      
    floorState = Object.assign({}, this.state.selectedFloor, initialFloor);    

    this.setState({
      selected: selected,
      selectedFloor: floorState
    });

  }

  componentDidMount() {
    if (this.props.fllor !==''){
      this.setFloor(this.props.floor);
    }
  }

  /**
   * Render Floor
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {selectedFloor} = this.state;
    return (
      <View style={{width: 150}}>
        <View style={{width: 150, height: 150, flexDirection: 'column', alignItems: 'center'}}>
          <FloorItem 
            onPress={()=>{this.setFloor('forth')}}
            selected={selectedFloor.forth}
          />
          <FloorItem 
            onPress={()=>{this.setFloor('third')}}
            selected={selectedFloor.third}
          />
          <FloorItem 
            onPress={()=>{this.setFloor('second')}}
            selected={selectedFloor.second}
          />
          <FloorItem 
            onPress={()=>{this.setFloor('first')}}
            selected={selectedFloor.first}
          />
          <FloorItem 
            onPress={()=>{this.setFloor('basement')}}
            selected={selectedFloor.basement}
          />
        </View>
        <View>
          <Text style={{textAlign: 'center', color: 'black'}}>
            {
              (this.state.selected==='') ? 'floor' : this.floorText[this.state.selected]
            }
          </Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default Floor;
