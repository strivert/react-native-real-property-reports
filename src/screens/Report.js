import React, {Component} from 'react';
import ReactNative from 'react-native';
import {Header, Footer} from '../components';
import {InnerReport} from './';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as reportActions from '../modules/report';
import * as previewActions from '../modules/preview';
import update from 'react-addons-update';
import config from '../config/config';
const {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Linking,
  Alert
} = ReactNative;

var ImagePicker = require('react-native-image-picker');

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
    this.state= {
      goDetail: true,
      selectedGoDetailItemIndex: null,
      isEdit: false,
      isCameraPicVisible: false,
      isCategoryNoteVisible: false,
      isLimitationNoteVisible: false,
      listIndex: 0,
      listSubIndex: 0,
    };
  }

  handleGoDetail(index) {
    this.setState({
      goDetail: false,
      selectedGoDetailItemIndex: index
    });
  }

  cancelDetail() {
    this.setState({
      goDetail: true,
      selectedGoDetailItemIndex: null
    });    
  }

  handleEditReport() {
    this.setState({
      isEdit: true
    });
  }

  /**
   * Render Report page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {address, reportParent, reportSeed} = this.props;
    const {selectedAddressIndex} = address;

    const selectedBigCategory = reportParent.hasOwnProperty('reportData') ? reportParent.reportData[selectedAddressIndex].selectedBigCategory : 'Roofing';
    const report = reportParent.hasOwnProperty('reportData') ? reportParent.reportData[selectedAddressIndex] : {};

    const addressName = address.address[selectedAddressIndex]['reportName'];    

    const {goDetail, selectedGoDetailItemIndex, isEdit, isCameraPicVisible, isCategoryNoteVisible, isLimitationNoteVisible} = this.state;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
      	<Header.Main
          page='Report'
          goDetail={goDetail}
          cancelDetail={()=>this.cancelDetail()}
          onCategoryNoteToggle={()=>{
            this.setState({
              isCategoryNoteVisible: !this.state.isCategoryNoteVisible
            });
          }}
          onDisableCameraPicVisible={()=>{
            this.setState({
              isCameraPicVisible: !this.state.isCameraPicVisible
            });
          }}
          onFromPickerImage={()=>{
            let reportData = report[selectedBigCategory];
            let listIndex = this.state.listIndex;
            let listSubIndex = this.state.listSubIndex;

            let images = [];
            let count = 0;
            for (var k in reportData) {
              if (count === listIndex && reportData[k][listSubIndex]) {
                images = reportData[k][listSubIndex].images;
              }
              count++;     
            }

            
            if (images.length>=4) {
              Alert.alert(
                config.PIC_LIMIT_TITLE,
                config.PIC_LIMIT_CNT,
                [
                  {text: 'OK', onPress: () => { } }
                ]
              )
              return;
            }
            
            var options = {
              title: 'Select Avatar',
              storageOptions: {
                skipBackup: true,
                path: 'images'
              }
            };
            ImagePicker.launchImageLibrary(options, (response)  => {
              // Same code as in above section!
              let source = { uri: response.data };

              if (response.data) {
                this.props.reportActions.addImage({selectedAddressIndex: selectedAddressIndex, listIndex: this.state.listIndex, listSubIndex: this.state.listSubIndex, res: response.data});
              }

            });
          }}
          selectBigCategoryForPreview={()=>{
            this.props.previewActions.selectBigCategory({bigCategory: selectedBigCategory });
          }}
        />
     	  <View style={{flex:1}}>
          <Image source={require('../assets/imgs/mainBackground.png')}>
            <InnerReport 
              reportData = {report[selectedBigCategory]}
              selectedBigCategory={selectedBigCategory}
              sectionNote={report[`${selectedBigCategory}-notes`]}
              goDetail={goDetail}
              selectedGoDetailItemIndex={selectedGoDetailItemIndex}
              isEdit={isEdit}
              handleGoDetail={(index)=>this.handleGoDetail(index)}
              isCameraPicVisible={isCameraPicVisible}
              isCategoryNoteVisible={isCategoryNoteVisible}
              addressName={addressName}
              isLimitationNoteVisible={isLimitationNoteVisible}
              handleChangeHighlight={(highlight)=>{
                this.props.reportActions.setHighlight({selectedAddressIndex: selectedAddressIndex, selectedBigCategory:selectedBigCategory,  listIndex: this.state.listIndex, listSubIndex: this.state.listSubIndex, highlight: highlight});
              }}
              setLimitation = {(limitations)=>{
                this.props.reportActions.setLimitation({selectedAddressIndex: selectedAddressIndex, selectedBigCategory:selectedBigCategory,  listIndex: this.state.listIndex, listSubIndex: this.state.listSubIndex, limitations: limitations});
              }}
              onLimitationNote={()=>{
                this.setState({
                  isLimitationNoteVisible: !this.state.isLimitationNoteVisible
                });
              }}
              onCategoryNoteToggle={()=>{
                this.setState({
                  isCategoryNoteVisible: !this.state.isCategoryNoteVisible
                });
              }}
              onSaveCategoryNote={(listIndex, listSubIndex, categoryNote)=>{
                this.setState({
                  isCategoryNoteVisible: false
                }, ()=>{
                  this.props.reportActions.saveCategoryNote({selectedAddressIndex: selectedAddressIndex, selectedBigCategory:selectedBigCategory,  listIndex: listIndex, listSubIndex: listSubIndex, categoryNote: categoryNote});
                });                
              }}
              onDelCategoryNote={(listIndex, listSubIndex)=>{
                this.setState({
                  isCategoryNoteVisible: false
                }, ()=>{
                  this.props.reportActions.delCategoryNote({selectedAddressIndex: selectedAddressIndex, selectedBigCategory:selectedBigCategory, listIndex: listIndex, listSubIndex: listSubIndex});
                });
              }}
              onDelSectionNote={()=>{
                this.props.reportActions.delSectionNote({selectedAddressIndex: selectedAddressIndex, selectedBigCategory:selectedBigCategory});
              }}
              onSaveSectionNote={(sectionNote)=>{
                this.props.reportActions.saveSectionNote({selectedAddressIndex: selectedAddressIndex, selectedBigCategory:selectedBigCategory, sectionNote: sectionNote});
              }}
              setListIndexSubIndex={(listIndex, listSubIndex)=>{
                this.setState({
                  listIndex: listIndex,
                  listSubIndex: listSubIndex,
                })
              }}
              onDelImages={(listIndex, listSubIndex, imageIndex)=>{
                this.props.reportActions.delImage({selectedAddressIndex: selectedAddressIndex, listIndex: listIndex, listSubIndex: listSubIndex, imageIndex: imageIndex});
              }}
              onSaveImage={(listIndex, listSubIndex, imageIndex, res)=>{
                this.props.reportActions.saveImage({selectedAddressIndex: selectedAddressIndex, listIndex: listIndex, listSubIndex: listSubIndex, imageIndex: imageIndex, res: res});
              }}
              onAddImage={(listIndex, listSubIndex, res)=>{
                this.props.reportActions.addImage({selectedAddressIndex: selectedAddressIndex, listIndex: listIndex, listSubIndex: listSubIndex, res: res});
              }}
              onDisableCameraPicVisible={()=>{
                this.setState({
                  isCameraPicVisible: !this.state.isCameraPicVisible
                });
              }}
              cancelDetail={()=>{
                this.setState({
                  isEdit:false
                });
                this.cancelDetail();
              }}
              handleChangeCompass={(listIndex, listSubIndex, val)=>{
                this.props.reportActions.updateLocation({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, location:val});
              }}
              handleChangeFloor={(listIndex, listSubIndex, val)=>{
                this.props.reportActions.updateFloor({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, floor:val});
              }}
              handleChangeFiveStep={(listIndex, listSubIndex, val, type)=>{
                if (type === 'life') {
                  this.props.reportActions.updateLife({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, life:val});
                } else {
                  this.props.reportActions.updateCost({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, cost:val});
                }                
              }}
              handleChangeRightItem={
                (listIndex, listSubIndex, selectedArray)=>{
                  if (goDetail)
                    this.props.reportActions.selectItem({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, selectedArray:selectedArray});
                  else
                    this.props.reportActions.selectDetailItem({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, selectedGoDetailItemIndex:selectedGoDetailItemIndex, selectedArray:selectedArray});
                }
              }
              handleLeftIcon={
                (label, listSubIndex, listIndex, isDefaultCategory)=>{
                  if (isDefaultCategory) {
                    let count = 0; let existCount = 0; let copiedObject = {};
                    for(var k in report[selectedBigCategory]) {
                      if ( count === listIndex) {
                        // copiedObject = Object.assign({}, report[selectedBigCategory][k][listSubIndex]);
                        copiedObject.state = '0';
                        copiedObject.data = report[selectedBigCategory][k][listSubIndex].data.map((item, index)=>{
                          return {
                            name: item.name,
                            selected: '0',
                            endDataSelected: [],
                            default: true
                          }
                        });
                        copiedObject.endData = Object.assign([], reportSeed[selectedBigCategory][k][listSubIndex].endData);
                        copiedObject.location = '';
                        copiedObject.floor = '';
                        copiedObject.life = '';
                        copiedObject.cost = '';
                        copiedObject.default = false;
                        copiedObject.images = [];
                        copiedObject.limitations = [];
                        copiedObject.highlight = false;


                        report[selectedBigCategory][k].map((item, index)=>{
                          if(item.name.indexOf(label) !== -1) {
                            existCount++;
                          }
                        });
                      }
                      count++;
                    }
                    copiedObject.name = `${label} (${(existCount+1)})`;
                    
                    this.props.reportActions.createCategory({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, label: label, copiedObject: copiedObject});
                  } else {
                    this.props.reportActions.removeCategory({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex});
                  }
                }
              }
              onSaveNewItem={(listIndex, listSubIndex, text)=>{
                this.props.reportActions.createItem({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, newValue: text});
              }}
              handleCreateItem={(listIndex, listSubIndex)=>{
                /*
                const {report, reportParent} = this.props;
                const {selectedAddressIndex} = address;
                const selectedBigCategory = reportParent.hasOwnProperty('reportData') ? reportParent.reportData[selectedAddressIndex].selectedBigCategory : 'Roofing';

                let count = 0; let copiedObject = {}; let label = '';
                let reportt = update({}, {$set:report});
                for(var k in reportt[selectedBigCategory]) {
                  if ( count === listIndex) {
                    copiedObject = update({}, {$set:reportt[selectedBigCategory][k]});
                    // copiedObject[listSubIndex].endData.push({name: 'hello'});

                    label = reportt[selectedBigCategory][k][listSubIndex].name;
                    reportt[selectedBigCategory][k].map((item, index)=>{
                      if(item.name.indexOf(label) !== -1) {
                        copiedObject[index].endData.push({name: 'hello'});
                      }
                    });
                  }
                  count++;
                }
                this.props.reportActions.createItem({selectedAddressIndex: selectedAddressIndex, listIndex:listIndex, listSubIndex:listSubIndex, copiedObject: copiedObject});
                */
              }}
            />
          </Image>
        </View>
        <Footer.Main
          page='Report'
          selectedBigCategory={selectedBigCategory}
          onLimitationNote={()=>{
            this.setState({
              isLimitationNoteVisible: !this.state.isLimitationNoteVisible
            });
          }}
          pressReportFooterBtn={(bigCategory)=>{
            this.setState({
              isEdit: false
            }, ()=>{
              this.props.reportActions.selectBigCategory({selectedAddressIndex: selectedAddressIndex, bigCategory:bigCategory});
            });            
          }}
          handleEditReport={()=>{this.handleEditReport();}}
          handleSaveUpdatedReport={()=>{
            this.setState({
              isEdit: false
            });
          }}
          isEdit={isEdit}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
});

export default connect(
  (state) => ({
    address: state.address,
    reportParent: state.report,
    reportSeed: state.reportSeed,
    //selectedBigCategory: state.report.selectedBigCategory
  }),
  (dispatch) => ({
    reportActions: bindActionCreators(reportActions, dispatch),
    previewActions: bindActionCreators(previewActions, dispatch)
  })
)(Report);
