import React, { Component } from 'react';
import { ToolbarAndroid, View, StyleSheet, ListView} from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import RowComponent from './components/RowComponent';
// import data from './assets/homepage.json'

export default class App extends Component {
   constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
    var homepage = require('./assets/homepage.json');
    
    this.state = {
      dataSource: ds.cloneWithRows(
        homepage
      ),
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar} />
        <ListView
          style={styles.listview}
          horizontal={false}
          dataSource={this.state.dataSource}
          removeClippedSubviews={false}
          renderRow={
            (rowData) =>
              <View>
                <RowComponent title={rowData.title} layoutType={rowData.layout_type} items={rowData.items}></RowComponent>
              </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 50,
    width: 1000,
    backgroundColor: "#4286f4"
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  listview: {
    paddingTop: 15
  }
});
