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

class StepItem extends Component {
  
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
 * FiveStep component
 */
class FiveStep extends Component {

  /**
    * FiveStep Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state = {
      selected: '',
      selectedStep: {        
        'first': false,
        'second': false,
        'third': false,
        'forth': false,
        'fifth': false
      }
    }
  }

  setStep(step) {
    let initialStep = {      
      'first': false,
      'second': false,
      'third': false,
      'forth': false,
      'fifth': false
    };

    let stepState = {};
    let selected = '';
    
    if (this.state.selectedStep[step] && step===this.state.selected){
      initialStep[step] = false;
      selected = '';
    } else {
      for (let i in initialStep) {
        if(i===step){
          initialStep[i] = true;
          break;
        }
        initialStep[i] = true;        
      }
      selected = step;
    }

    stepState = Object.assign({}, this.state.selectedStep, initialStep);    

    this.setState({
      selected: selected,
      selectedStep: stepState
    }, ()=>{this.props.handleChangeFiveStep(selected);});
  }

  componentWillReceiveProps(nextProps) {
    let initialStep = {      
      'first': false,
      'second': false,
      'third': false,
      'forth': false,
      'fifth': false
    };

    let stepState = {};
    let selected = '';

    if (nextProps.selected !== '') {
      for (let i in initialStep) {
        if(i===nextProps.selected){
          initialStep[i] = true;
          break;
        }
        initialStep[i] = true;        
      }
      selected = nextProps.selected;
    } else {
      initialStep[nextProps.selected] = false;
      selected = '';
    }
    stepState = Object.assign({}, this.state.selectedStep, initialStep);    
    this.setState({
      selected: selected,
      selectedStep: stepState
    });
  }

  componentDidMount() {
    if (this.props.selected !==''){
      this.setStep(this.props.selected);
    }
  }

  /**
   * Render FiveStep
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {selectedStep} = this.state;
    return (
      <View style={{width: 150}}>
        <View style={{width: 150, height: 150, flexDirection: 'column', alignItems: 'center'}}>
          <StepItem 
            onPress={()=>{this.setStep('fifth')}}
            selected={selectedStep.fifth}
          />
          <StepItem 
            onPress={()=>{this.setStep('forth')}}
            selected={selectedStep.forth}
          />
          <StepItem 
            onPress={()=>{this.setStep('third')}}
            selected={selectedStep.third}
          />
          <StepItem 
            onPress={()=>{this.setStep('second')}}
            selected={selectedStep.second}
          />
          <StepItem 
            onPress={()=>{this.setStep('first')}}
            selected={selectedStep.first}
          />          
        </View>
        <View>
          <Text style={{textAlign: 'center', color: 'black'}}>
            {
              (this.state.selected==='') ? this.props.initText : this.props.stepText[this.state.selected]
            }
          </Text>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default FiveStep;
