import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  TextBtn,
  TextWithLetterSpacing
} from '../components/Atoms';
import {
  ItemList
} from '../components/Molecule';
import EStyleSheet from 'react-native-extended-stylesheet';
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

  dispImage(arrObj, styleObj) {
    let obj = 
      arrObj['drawImage'] !='' ?
        (<Image source={{uri: `data:image/png;base64,${arrObj.drawImage}`}} style={styleObj} />)
      :
        (<Image source={{uri: `data:image/png;base64,${arrObj.backImage}`}} style={styleObj} />);

    return obj;
  }

  /**
   * Render SetupUserLeft page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {previewData, addressName} = this.props;
    let previewViewItems = [];
    let count = 0;
    for (var bigCategory in previewData) {
      let cateogryCount = 0;
      let previewCategoryItems = [];
      for( var category in previewData[bigCategory]) {
        previewCategoryItems[cateogryCount] = 
          (<View style={{marginBottom: 50}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.txtCnt}>
                <Text style={{color:'#00bff2', fontSize: 20, paddingLeft: 20}}>{category}</Text>
                <Text style={{paddingLeft:10, paddingRight:20}}>{previewData[bigCategory][category]['desc']}</Text>
              </View>
              {
                previewData[bigCategory][category]['images'].hasOwnProperty(0) &&
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: 192}}>
                  {
                    this.dispImage( previewData[bigCategory][category]['images'][0], {width: 190, height: 130, resizeMode: 'stretch'})
                  }
                </View>
              }
            </View>
            <View style={styles.bottomImgs}>
              {
                previewData[bigCategory][category]['images'].hasOwnProperty(3) &&
                  this.dispImage( previewData[bigCategory][category]['images'][3], {width: 190, height: 130, resizeMode: 'stretch', marginRight: 10})
              }
              {
                previewData[bigCategory][category]['images'].hasOwnProperty(2) &&
                  this.dispImage( previewData[bigCategory][category]['images'][2], {width: 190, height: 130, resizeMode: 'stretch', marginRight: 10})
              }
              {
                previewData[bigCategory][category]['images'].hasOwnProperty(1) &&
                  this.dispImage( previewData[bigCategory][category]['images'][1], {width: 190, height: 130, resizeMode: 'stretch'})
              }
            </View>
          </View>)
        cateogryCount++;
      }
      if (cateogryCount > 0) {
        previewViewItems[count] = 
          (
            <View>
              <View style={{paddingLeft: 10}}>  
                <Image source={require('../assets/imgs/sectiondivider.png')} style={{height: 75, width: '100%', resizeMode: 'contain'}}>
                  <Text style={{color:'#00bff2', fontSize: 25}}>{bigCategory}</Text>
                </Image>
              </View>
              {
                previewCategoryItems
              }
            </View>
          );

        count++;
      }
    }
    return (
      <View style={styles.previewCnt}>
        <ScrollView>
          <View style={{backgroundColor: 'white', paddingTop: 100}}>
            
            {
              previewViewItems
            }    

            {
              /*
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
              */
            }




          </View>
        </ScrollView>
        <View style={{position: 'absolute', right: 0}}>
          <View>
            <Image source={require('../assets/imgs/addressBoxBG.png')} style={{width: 320, height: 40, resizeMode: 'stretch', justifyContent: 'center', paddingLeft: 20, marginRight: 50}}>
              <Text>{addressName}</Text>
            </Image>
          </View>
        </View>
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  previewCnt: {
    flex:1, padding:10, paddingLeft: 10, paddingRight: 10, paddingBottom: 70, paddingTop: 0
  },
  txtCnt: {
    width: 450
  },
  bottomImgs: {
    flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10    
  },
  '@media (max-height: 719)': {
    previewCnt: {
      paddingBottom: 200
    },
    txtCnt: {
      width: 390      
    },
    bottomImgs: {
      marginRight: 60
    }
  } 
});

export default InnerPreviewRight;
