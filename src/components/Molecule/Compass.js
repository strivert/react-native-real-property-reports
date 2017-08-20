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
  TextInput,
  TouchableWithoutFeedback
} = ReactNative;

class CompassItem extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const { direction, selected, viewStyle, imgStyle, imgSrc, imgSelectedSrc } = this.props;

    /**
     * Render Letter
     * @return {jsxresult} result in jsx format
     */
     
    return (
      <View style={viewStyle}>
        <TouchableWithoutFeedback onPress={()=>{this.props.onPress()}} >
        {
          selected ?
            <Image style={imgStyle} source={imgSelectedSrc} />
          :
            <Image style={imgStyle} source={imgSrc} />
        }
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

/**
 * Compass component
 */
class Compass extends Component {

  /**
    * Setup Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      selectedDirection: {
        'north': false,
        'east': false,
        'west': false,
        'south': false,
        'center': false,
        'north_east': false,
        'north_west': false,
        'south_west': false,
        'south_east': false
      }
    }

    this.directionText = {
      'north': 'North',
      'east': 'East',
      'west': 'West',
      'south': 'South',
      'center': 'Throughout',
      'north_east': 'North East',
      'north_west': 'North West',
      'south_west': 'South West',
      'south_east': 'South East'
    }
  }

  setDirection(direction) {
    let comapssDirection = {
      'north': false,
      'east': false,
      'west': false,
      'south': false,
      'center': false,
      'north_east': false,
      'north_west': false,
      'south_west': false,
      'south_east': false
    };

    let directionState = {};
    let selected = '';

    if (direction==='center') {
      if( this.state.selectedDirection.center ){
        directionState = Object.assign({}, directionState, comapssDirection);
        selected = '';
      } else {
        directionState = Object.assign({}, this.state.selectedDirection,{
          'north': true,
          'east': true,
          'west': true,
          'south': true,
          'center': true,
          'north_east': true,
          'north_west': true,
          'south_west': true,
          'south_east': true
        });   
        selected = 'center';
      }   
    } else {
      if (this.state.selectedDirection[direction]){
        comapssDirection[direction] = false;
        selected = '';
      } else {
        comapssDirection[direction] = true;
        selected = direction;
      }
      
      directionState = Object.assign({}, this.state.selectedDirection, comapssDirection);
    }

    this.setState({
      selected: selected,
      selectedDirection: directionState
    });

  }

  componentDidMount() {
    if (this.props.direction !==''){
      this.setDirection(this.props.direction);
    }
  }

  /**
   * Render Compass
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {selectedDirection} = this.state;

    return (
      <View style={{width: 150}}>
        <View style={{width: 150, height: 150/*, backgroundColor: 'red'*/}}>
          <CompassItem 
            viewStyle={{alignItems: 'center'}} 
            imgStyle={{}}
            imgSrc={require('../../assets/imgs/CompassNBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/CompassNBtnOVR.png')} 
            onPress={()=>{this.setDirection('north')}}
            selected={selectedDirection.north}
          />

          <CompassItem 
            viewStyle={{position: 'absolute', top: 30, left: 40}} 
            imgStyle={{}}
            imgSrc={require('../../assets/imgs/compassNWBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/compassNWBtnOVR.png')} 
            onPress={()=>{this.setDirection('north_west')}}
            selected = {selectedDirection.north_west}
          />

          <CompassItem 
            viewStyle={{position: 'absolute', top: 30, left: 80}} 
            imgStyle={{}}
            imgSrc={require('../../assets/imgs/compassNEBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/compassNEBtnOVR.png')} 
            onPress={()=>{this.setDirection('north_east')}}
            selected = {selectedDirection.north_east}
          />

          <CompassItem 
            viewStyle={{position: 'absolute', top: 53, left: 63}} 
            imgStyle={{resizeMode: 'stretch', width: 25, height: 25}}
            imgSrc={require('../../assets/imgs/compassCenterBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/compassCenterBtnOVR.png')} 
            onPress={()=>{this.setDirection('center')}}
            selected = {selectedDirection.center}
          />

          <CompassItem 
            viewStyle={{position: 'absolute', top: 70, left: 40}} 
            imgStyle={{}}
            imgSrc={require('../../assets/imgs/compassSWBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/compassSWBtnOVR.png')} 
            onPress={()=>{this.setDirection('south_west')}}
            selected = {selectedDirection.south_west}
          />

          <CompassItem 
            viewStyle={{position: 'absolute', top: 70, left: 80}} 
            imgStyle={{}}
            imgSrc={require('../../assets/imgs/compassSEBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/compassSEBtnOVR.png')} 
            onPress={()=>{this.setDirection('south_east')}}
            selected = {selectedDirection.south_east}
          />

          <CompassItem 
            viewStyle={{position: 'absolute', top: 40, left: 0}} 
            imgStyle={{}}
            imgSrc={require('../../assets/imgs/CompassWBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/CompassWBtnOVR.png')} 
            onPress={()=>{this.setDirection('west')}}
            selected = {selectedDirection.west}
          />

          <CompassItem 
            viewStyle={{position: 'absolute', top: 40, right: 0}} 
            imgStyle={{}}
            imgSrc={require('../../assets/imgs/CompassEBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/CompassEBtnOVR.png')} 
            onPress={()=>{this.setDirection('east')}}
            selected = {selectedDirection.east}
          />

          <CompassItem 
            viewStyle={{position: 'absolute', bottom: 15, left: 52}} 
            imgStyle={{}}
            imgSrc={require('../../assets/imgs/CompassSBtn.png')} 
            imgSelectedSrc={require('../../assets/imgs/CompassSBtnOVR.png')} 
            onPress={()=>{this.setDirection('south')}}
            selected = {selectedDirection.south}
          />
        </View>

        <View>
          <Text style={{textAlign: 'center', color: 'black'}}>
            {
              (this.state.selected==='') ? 'Location' : this.directionText[this.state.selected]
            }
          </Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default Compass;
