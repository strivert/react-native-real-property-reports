import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InnerReportLeft,
  InnerReportRight
} from './';

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
 * Container component for InnerReport page
 */
class InnerReport extends Component {

  /**
    * InnerReport Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
    this.state = {
      listIndex: 0,
      listSubIndex: 0
    }
  }

  // letf
  handleChangeItem(listIndex, listSubIndex, label) {
    this.setState({
      listIndex: listIndex,
      listSubIndex: listSubIndex
    });
  }

  handleChangeRightItem(selectedArray) {
    this.props.handleChangeRightItem(this.state.listIndex, this.state.listSubIndex, selectedArray);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.selectedBigCategory !== nextProps.selectedBigCategory) {
      this.setState({
        listIndex: 0,
        listSubIndex: 0
      });
    }
  }

  /**
   * Render InnerReport page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {reportData} = this.props;
    const {listIndex, listSubIndex} = this.state;
    if ( !reportData )
      return null;
    let endData = [];
    let endDataSelected = [];
    let data = [];

    let location = '';
    let floor = '';
    let life = '';
    let cost = '';

    let count = 0;
    for (var k in reportData) {
      if (count === listIndex) {
        data = reportData[k][listSubIndex].data;
        endData = reportData[k][listSubIndex].endData;

        location = reportData[k][listSubIndex].location;
        floor = reportData[k][listSubIndex].floor;
        life = reportData[k][listSubIndex].life;
        cost = reportData[k][listSubIndex].cost;
      }
      count++;
    }

    let dataList = [];
    data.map((item, index)=>{
      dataList[index] = {'label':item.name, 'value': index, 'selected': item.selected};
    });

    return (
      <View style={{flex:1, flexDirection: 'row' }}>
        <View style={{width: 360}}>
          <InnerReportLeft 
            reportData = {reportData}
            handleChangeItem = {(listIndex, listSubIndex, label)=>{this.handleChangeItem(listIndex, listSubIndex, label)}}
            listIndex= {this.state.listIndex}
            listSubIndex= {this.state.listSubIndex}
          />
        </View>
        <View style={{flex: 1}}>
          <InnerReportRight 
            dataList = {dataList}
            location={location}
            floor={floor}
            life={life}
            cost={cost}
            handleChangeCompass={(val)=>{this.props.handleChangeCompass(listIndex, listSubIndex, val);}}
            handleChangeFloor={(val)=>{this.props.handleChangeFloor(listIndex, listSubIndex, val);}}
            handleChangeFiveStep={(val, type)=>{this.props.handleChangeFiveStep(listIndex, listSubIndex, val, type);}}
            handleChangeRightItem = {(selectedArray)=>{this.handleChangeRightItem(selectedArray)}}
          />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerReport;
