import React, {Component} from 'react';
import ReactNative from 'react-native';
import {ActionConst, Scene, Router} from 'react-native-router-flux';
import {
  Setup,
  Report,
  Preview
} from './screens'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as reportActions from './modules/report';

let SQLite = require('react-native-sqlite-storage')

const { StyleSheet, Text, View } = ReactNative;

function composeSectionName(sectionName) {
  let temp = sectionName.toLowerCase();
  return temp.charAt(0).toUpperCase() + temp.slice(1);
}

/**
 * High Level Container
 */
class App extends Component {

  /**
    * App Container Constructor
    * @param {props} props from parent component
    * @return {void}
    */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let sectionObj = {'selectedBigCategory': 'Roofing', Roofing:{}, Exterior:{}, Structure:{}, Interior:{}, Electrical:{}, Plumbing:{}, Cooling:{}, Heating:{}};

    let db = SQLite.openDatabase({name: 'test.db', createFromLocation: "~FortReport.db", location: 'Library'}, ()=>{
      console.log(sectionObj);
    }, ()=>{

    });
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM FR_CATEGORY_NAMES', [], (tx, results) => {
          
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            let sectionName = composeSectionName(row.CN_SECTION);
            
            if (!(sectionName in sectionObj)) {
              sectionObj[sectionName] = {};
            }

            if (!sectionObj[sectionName].hasOwnProperty(row.CN_GROUP)) {
              sectionObj[sectionName][row.CN_GROUP] = [];
            }

            let sItem = {
              name: row.CN_CATEGORY,
              state: "0",
              data: [],
              endData: [],
              location: '',
              floor: '',
              life: '',
              cost: '',
              default: true
            }
            
            tx.executeSql('SELECT * FROM FR_ITEM_SELECTIONS where IS_SECTION="'+sectionName+'" and IS_CATEGORY="'+row.CN_CATEGORY+'"', [], (tx, resultss) => {
              let lenn = resultss.rows.length;
              for (let ii = 0; ii < len; ii++) {
                let roww = resultss.rows.item(ii);

                if (roww) {
                  if ( roww.IS_ITEM === "Description" ) {
                    sItem.data.push({
                      name: roww.IS_SELECTION,
                      selected: '0',
                      endDataSelected: [],
                      default: true
                    });
                  } else if (roww.IS_ITEM === "Observation") {
                    sItem.endData.push({
                      name: roww.IS_SELECTION
                    });
                  }
                }
              }
              sectionObj[sectionName][row.CN_GROUP].push(sItem);  

              if( i==(len-1)){
                this.props.reportActions.setAllReport(sectionObj);
              }
              
            });
            
          }
        });    
    });
  }

  /**
   * Render a page(screen)
   * @return {jsxresult} result in jsx format
   */
  render() {
    return (
        <Router duration={0}>
          <Scene key="root" hideNavBar={true} hideTabBar={true} hideOnChildTabs={true}>
            <Scene key="setup" component={Setup} initial={true} />
            <Scene key="report" component={Report} />
            <Scene key="preview" component={Preview} />
          </Scene>
        </Router>
    );
  }
}

let styles = StyleSheet.create({
  iOsStatusBar: {
   marginTop:20 
  }
});

export default connect(
  null,
  (dispatch) => ({
    reportActions: bindActionCreators(reportActions, dispatch)
  })
)(App);
