import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Header, Footer} from '../components';
import {InnerReport} from './';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as reportActions from '../modules/report';

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
 * Container component for Report page
 */
class Report extends Component {

  /**
    * Report Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props){
    super(props);
  }

  /**
   * Render Report page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {report, selectedBigCategory} = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Report'
        />
     	  <View style={{flex:1}}>
          <Image source={require('../assets/imgs/mainBackground.png')}>
            <InnerReport 
              reportData = {report[selectedBigCategory]}
              selectedBigCategory={selectedBigCategory}
              handleChangeCompass={(listIndex, listSubIndex, val)=>{
                this.props.reportActions.updateLocation({listIndex:listIndex, listSubIndex:listSubIndex, location:val});
              }}
              handleChangeFloor={(listIndex, listSubIndex, val)=>{
                this.props.reportActions.updateFloor({listIndex:listIndex, listSubIndex:listSubIndex, floor:val});
              }}
              handleChangeFiveStep={(listIndex, listSubIndex, val, type)=>{
                if (type === 'life') {
                  this.props.reportActions.updateLife({listIndex:listIndex, listSubIndex:listSubIndex, life:val});
                } else {
                  this.props.reportActions.updateCost({listIndex:listIndex, listSubIndex:listSubIndex, cost:val});
                }                
              }}
              handleChangeRightItem={
                (listIndex, listSubIndex, selectedArray)=>{
                  this.props.reportActions.selectItem({listIndex:listIndex, listSubIndex:listSubIndex, selectedArray:selectedArray});
                }
              }
            />
          </Image>
        </View>
        <Footer.Main
          page='Report'
          selectedBigCategory={selectedBigCategory}
          pressReportFooterBtn={(bigCategory)=>{this.props.reportActions.selectBigCategory(bigCategory);}}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
});

export default connect(
  (state) => ({
    report: state.report,
    selectedBigCategory: state.report.selectedBigCategory
  }),
  (dispatch) => ({
    reportActions: bindActionCreators(reportActions, dispatch)
  })
)(Report);
