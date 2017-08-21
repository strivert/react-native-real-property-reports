import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn,
  TextWithLetterSpacing
} from '../components/Atoms';
import {
  ItemList
} from '../components/Molecule';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  TextInput
} = ReactNative;

/**
 * Container component for UserLeft of Setup page
 */
class InnerPreviewRight extends Component {

  /**
    * SetupUserLeft Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render SetupUserLeft page
   * @return {jsxresult} result in jsx format
   */
  render() {

    return (
      <View style={{flex:1, padding:10, paddingLeft: 10, paddingRight: 10, paddingBottom: 70, paddingTop: 0}}>        
        <ScrollView>
          <View style={{backgroundColor: 'white', paddingTop: 100}}>
            
            <View style={{paddingLeft: 10}}>  
              <Image source={require('../assets/imgs/sectiondivider.png')} style={{height: 75, width: '100%', resizeMode: 'contain'}}>
                <Text style={{color:'#00bff2', fontSize: 25}}>ROOFING</Text>
              </Image>
            </View>

            <View style={{marginBottom: 50}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 450}}>
                  <Text style={{color:'#00bff2', fontSize: 20, paddingLeft: 20}}>SLOPED(ROOF)</Text>
                  <Text style={{paddingLeft:10, paddingRight:20}}>Level: 2nd floor, LocationL North, Life expectancy: 7-10 yrs, Estimatedcost: hight, Monitor for signs of deterioration </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: 192}}>
                  <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} style={{width: 190, height: 130, resizeMode: 'stretch'}} />
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
                <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} style={{width: 190, height: 130, resizeMode: 'stretch', marginRight: 10}} />
                <Image source={require('../assets/imgs/This_Old_House.jpeg')} style={{width: 190, height: 130, resizeMode: 'stretch', marginRight: 10}} />
                <Image source={require('../assets/imgs/This_Old_House.jpeg')} style={{width: 190, height: 130, resizeMode: 'stretch'}} />
              </View>
            </View>

            <View style={{marginBottom: 50}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 450}}>
                  <Text style={{color:'#00bff2', fontSize: 20, paddingLeft: 20}}>SLOPED(ROOF)</Text>
                  <Text style={{paddingLeft:10, paddingRight:20}}>Level: 2nd floor, LocationL North, Life expectancy: 7-10 yrs, Estimatedcost: hight, Monitor for signs of deterioration </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: 192}}>
                  <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} style={{width: 190, height: 130, resizeMode: 'stretch'}} />
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
                <Image source={require('../assets/imgs/This_Old_House.jpeg')} style={{width: 190, height: 130, resizeMode: 'stretch'}} />
              </View>
            </View>





            <View style={{paddingLeft: 10}}>  
              <Image source={require('../assets/imgs/sectiondivider.png')} style={{height: 75, width: '100%', resizeMode: 'contain'}}>
                <Text style={{color:'#00bff2', fontSize: 25}}>ROOFING</Text>
              </Image>
            </View>

            <View style={{marginBottom: 50}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 450}}>
                  <Text style={{color:'#00bff2', fontSize: 20, paddingLeft: 20}}>SLOPED(ROOF)</Text>
                  <Text style={{paddingLeft:10, paddingRight:20}}>Level: 2nd floor, LocationL North, Life expectancy: 7-10 yrs, Estimatedcost: hight, Monitor for signs of deterioration </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: 192}}>
                  <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} style={{width: 190, height: 130, resizeMode: 'stretch'}} />
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
                <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} style={{width: 190, height: 130, resizeMode: 'stretch', marginRight: 10}} />                
                <Image source={require('../assets/imgs/This_Old_House.jpeg')} style={{width: 190, height: 130, resizeMode: 'stretch'}} />
              </View>
            </View>

            <View style={{marginBottom: 50}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 450}}>
                  <Text style={{color:'#00bff2', fontSize: 20, paddingLeft: 20}}>SLOPED(ROOF)</Text>
                  <Text style={{paddingLeft:10, paddingRight:20}}>Level: 2nd floor, LocationL North, Life expectancy: 7-10 yrs, Estimatedcost: hight, Monitor for signs of deterioration </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: 192}}>
                  <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} style={{width: 190, height: 130, resizeMode: 'stretch'}} />
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>
                <Image source={require('../assets/imgs/This_Old_Houseedited.jpg')} style={{width: 190, height: 130, resizeMode: 'stretch', marginRight: 10}} />
                <Image source={require('../assets/imgs/This_Old_House.jpeg')} style={{width: 190, height: 130, resizeMode: 'stretch', marginRight: 10}} />
                <Image source={require('../assets/imgs/This_Old_House.jpeg')} style={{width: 190, height: 130, resizeMode: 'stretch'}} />
              </View>
            </View>




          </View>
        </ScrollView>
        <View style={{position: 'absolute', right: 0}}>
          <View>
            <Image source={require('../assets/imgs/addressBoxBG.png')} style={{width: 320, height: 40, resizeMode: 'stretch', justifyContent: 'center', paddingLeft: 20, paddingRight: 50}}>
              <Text>123 Smaple Ss dfs df sdf sd fsdf </Text>
            </Image>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerPreviewRight;
