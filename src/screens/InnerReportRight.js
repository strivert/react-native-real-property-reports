import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InputToggleText
} from '../components/Atoms';
import {
  DetailMultiSelectList,
  Compass,
  Floor,
  FiveStep,
  CameraPic
} from '../components/Molecule';

const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  TouchableOpacity
} = ReactNative;

import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * Container component for Right of Report page
 */
class InnerReportRight extends Component {

  /**
    * ReportRight Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);

  }

  shouldComponentUpdate(nextProps, nextState){
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }

  handleGoDetail(index) {
    this.props.handleGoDetail(index);
  }

  handleSelectDetail() {
  }

  renderHighLight() {
    const {highlight} = this.props;

    if (highlight) {
      return (
        <TouchableOpacity onPress={()=>{
          this.props.handleChangeHighlight(false);
        }}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={require('../assets/imgs/Blue-waving-flag-iconSM.png')}/>
            </View>
            <View>
              <Text style={{fontStyle: 'italic', marginTop: 15, marginLeft: 10}}>remove highlight</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={()=>{
          this.props.handleChangeHighlight(true);
        }}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={require('../assets/imgs/Blue-waving-flag-iconSM.png')} style={{opacity: 0.2}} />
            </View>
            <View>
              <Text style={{fontStyle: 'italic', marginTop: 15, marginLeft: 10}}>highlight item</Text>
            </View>
          </View>
        </TouchableOpacity>
      );      
    }
  }

  /**
   * Render ReportRight page
   * @return {jsxresult} result in jsx format
   */
  render() {
    
    let detailList = this.props.dataList;
    const {location, floor, life, cost, highlight} = this.props;
    const {goDetail, endDataList, isEdit, addressName} = this.props;
    let reportRightTop = 
    (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {
          isEdit ?
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <View>
                <TouchableOpacity 
                  onPress={()=>{
                    if(goDetail) {
                      this.props.handleCreateItem();
                    }
                  }}
                >
                  <Image source={require('../assets/imgs/plusButtonSmall.png')} style={{marginTop: 5}} />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 7, marginLeft: 10}}>Add New Item</Text>
              </View>
            </View>            
          :
            this.renderHighLight()
        }
        <View>
          <Image source={require('../assets/imgs/addressBoxBG.png')} style={{width: 320, height: 40, resizeMode: 'stretch', justifyContent: 'center', paddingLeft: 20, marginRight: 50}}>
            <Text>{addressName}</Text>
          </Image>
        </View>
      </View>
    );

    let renderCnt = (goDetail)?
      (
        <View style={{flex:1}}>          
          {reportRightTop}
          

          <ScrollView>
            <DetailMultiSelectList
              items={detailList}
              handleChangeItem = {(selectedArray)=>{this.props.handleChangeRightItem(selectedArray);}}
              goDetail={true}
              handleGoDetail={(index)=>this.handleGoDetail(index)}
              isEdit={isEdit}
            />
          </ScrollView>
          <View style={styles.ctrlPan}>
            <View style={{flexDirection: 'row'}}>
              <Compass
                direction={location}
                handleChangeCompass={(val)=>{this.props.handleChangeCompass(val);}}
              />
              <Floor 
                floor={floor}
                handleChangeFloor={(val)=>{this.props.handleChangeFloor(val);}}
              />
              <FiveStep
                selected={life}
                stepText={{
                  'first': '< 3 yrs',
                  'second': '3-5 yrs',
                  'third': '5-7 yrs',
                  'forth': '7-10 yrs',
                  'fifth': '10+ yrs'
                }}
                handleChangeFiveStep={(val)=>{this.props.handleChangeFiveStep(val, 'life');}}
                initText='life expectancy'
              />
              <FiveStep
                selected={cost}
                stepText={{
                  'first': '$',
                  'second': '$$',
                  'third': '$$$',
                  'forth': '$$$$',
                  'fifth': '$$$$$'
                }}
                handleChangeFiveStep={(val)=>{this.props.handleChangeFiveStep(val, 'cost');}}
                initText='cost'
              />
            </View>
          </View>
        </View>
      )
      :
      (
        <View style={{flex: 1}}>
          {reportRightTop}
          <ScrollView>
            <DetailMultiSelectList
              items={endDataList}
              handleChangeItem = {(selectedArray)=>{this.props.handleChangeRightItem(selectedArray);}}
              goDetail={false}
              isEdit={isEdit}
            />
          </ScrollView>
          <View style={styles.tmpPan}>
          </View>
        </View>
      )

    return (
      <View style={{flex:1, padding:10, paddingLeft: 40, paddingRight: 20, paddingBottom: 70, paddingTop: 0}}>
        {renderCnt}
      </View>
    );
  }
}

let styles = EStyleSheet.create({
  ctrlPan: {
    height: 'auto'
  },
  tmpPan: {
    height: 150
  },
  '@media (max-height: 719)': {
    ctrlPan: {
      height: 330
    },
    tmpPan: {
      height: 300
    }
  }
});

export default InnerReportRight;
