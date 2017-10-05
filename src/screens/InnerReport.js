import React, {Component} from 'react';
import ReactNative from 'react-native';
import {
  InnerReportLeft,
  InnerReportRight
} from './';

import {
  CameraPic, Notes, CategoryNotes
} from '../components/Molecule';

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
      listSubIndex: 0,
      goDetail: true,
      selectedGoDetailItemIndex: null,
      isSectionNoteVisible: false
    }
  }

  // letf
  handleChangeItem(listIndex, listSubIndex, label) {
    this.setState({
      listIndex: listIndex,
      listSubIndex: listSubIndex
    },()=>{
      this.props.cancelDetail();
      this.props.setListIndexSubIndex(listIndex, listSubIndex);
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
      }, ()=>{
        this.props.setListIndexSubIndex(0, 0);
      });
    }
  }

  handleGoDetail(index) {
    this.props.handleGoDetail(index);
  }

  /**
   * Render InnerReport page
   * @return {jsxresult} result in jsx format
   */
  render() {
    const {reportData, goDetail, selectedGoDetailItemIndex, isEdit} = this.props;
    const {listIndex, listSubIndex, isSectionNoteVisible } = this.state;
    const {isCameraPicVisible, sectionNote, selectedBigCategory, isCategoryNoteVisible} = this.props;
    if ( !reportData )
      return null;

    let endData = [];
    let data = [];

    let location = '';
    let floor = '';
    let life = '';
    let cost = '';
    let notes = '';
    let categoryName = '';

    let images = [];

    let count = 0;
    for (var k in reportData) {
      if (count === listIndex && reportData[k][listSubIndex]) {
        categoryName = reportData[k][listSubIndex].name;

        data = reportData[k][listSubIndex].data;
        endData = reportData[k][listSubIndex].endData;

        location = reportData[k][listSubIndex].location;
        floor = reportData[k][listSubIndex].floor;
        life = reportData[k][listSubIndex].life;
        cost = reportData[k][listSubIndex].cost;

        notes = reportData[k][listSubIndex].notes;

        images = reportData[k][listSubIndex].images;
      }
      count++;
    }

    let dataList = [];
    data.map((item, index)=>{
      dataList[index] = {'label':item.name, 'value': index, 'selected': item.selected};
    });
    
    let endDataList = [];
    endData.map((item, index)=>{
      if (selectedGoDetailItemIndex!==null && data[selectedGoDetailItemIndex].endDataSelected.indexOf(index) !== -1)
        endDataList[index] = {'label':item.name, 'value': index, 'selected': '1'};
      else
        endDataList[index] = {'label':item.name, 'value': index, 'selected': '0'};
    });

    return (
      <View style={{flex:1, flexDirection: 'row' }}>        
        <View style={{width: 360}}>
          <InnerReportLeft 
            reportData = {reportData}
            handleChangeItem = {(listIndex, listSubIndex, label)=>{this.handleChangeItem(listIndex, listSubIndex, label)}}
            handleLeftIcon = {(label, listSubIndex, listIndex, isDefaultCategory)=>{this.props.handleLeftIcon(label, listSubIndex, listIndex, isDefaultCategory)}}
            onVisibleSectionNote={()=>{
              this.setState({
                isSectionNoteVisible: true
              })
            }}
            listIndex= {this.state.listIndex}
            listSubIndex= {this.state.listSubIndex}
            isEdit={isEdit}
          />
        </View>
        <View style={{flex: 1}}>
          <InnerReportRight 
            dataList = {dataList}
            location={location}
            floor={floor}
            life={life}
            cost={cost}
            goDetail={goDetail}
            endDataList={endDataList}
            isEdit={isEdit}
            handleChangeCompass={(val)=>{this.props.handleChangeCompass(listIndex, listSubIndex, val);}}
            handleChangeFloor={(val)=>{this.props.handleChangeFloor(listIndex, listSubIndex, val);}}
            handleChangeFiveStep={(val, type)=>{this.props.handleChangeFiveStep(listIndex, listSubIndex, val, type);}}
            handleChangeRightItem = {(selectedArray)=>{this.handleChangeRightItem(selectedArray)}}
            handleGoDetail={(index)=>{this.handleGoDetail(index);}}
            handleCreateItem={()=>{this.props.handleCreateItem(listIndex, listSubIndex);}}
          />
        </View>
        {
          isCategoryNoteVisible &&
          <View>
            <CategoryNotes
              categoryNote={notes}
              categoryName={categoryName}
              onSaveCategoryNote={
                (categoryNote)=>{
                  this.props.onSaveCategoryNote(
                    this.state.listIndex,
                    this.state.listSubIndex,
                    categoryNote
                  );
                }
              }
              onDisableCategoryNoteVisible = {()=>{
                this.props.onCategoryNoteToggle();
              }}
              onDelCategoryNote={()=>{              
                this.props.onDelCategoryNote(this.state.listIndex, this.state.listSubIndex);
              }}

            />
          </View>
        }
        {
          isSectionNoteVisible && 
          <View>
            <Notes
              sectionNote={sectionNote}
              sectionName={selectedBigCategory}
              onSaveSectionNote={
                (sectionNote)=>{
                  this.setState({
                    isSectionNoteVisible: false
                  }, ()=>{
                    this.props.onSaveSectionNote(sectionNote);
                  });                  
                }
              }
              onDisableSectionNoteVisible = {()=>{
                this.setState({
                  isSectionNoteVisible: false
                });
              }}
              onDelSectionNote={()=>{
                this.setState({
                  isSectionNoteVisible: false
                }, ()=>{
                  this.props.onDelSectionNote();
                });
              }}
            />
          </View>
        }
        {
          isCameraPicVisible &&
          <View>
            <CameraPic 
              propImages={images}
              onDelImages={(imageIndex)=>{this.props.onDelImages(listIndex, listSubIndex, imageIndex);}}
              onSaveImage={(imageIndex, res)=>{this.props.onSaveImage(listIndex, listSubIndex, imageIndex, res);}}
              onAddImage={(res)=>{this.props.onAddImage(listIndex, listSubIndex, res);}}
              onDisableCameraPicVisible = {()=>{
                this.props.onDisableCameraPicVisible();
              }}
            />
          </View>
        }
      </View>
    );
  }
}

let styles = StyleSheet.create({
  
});

export default InnerReport;
