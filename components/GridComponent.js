import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GridView from 'react-native-super-grid';

import GridItemComponent from './GridItemComponent'

export default class GridComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.items
    }
  }
  
  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{this.props.title}</Text>
        <Text style={styles.underline}>-------------------------------------------------------------------------------------</Text>
        <View style={styles.container}>
          <GridView
              itemDimension={130}
              items={this.state.dataSource}
              renderItem={item => (
                <GridItemComponent
                  title={item.title}
                  imgUrl={item.images.large}
                  deepLink={item.link.android_deeplink}
                />
                )}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  underline: {
    marginLeft: 5,
    marginRight: 5,
    color: '#b4bac4',
    textAlign: "center"
  },
  paragraph: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
  },
});
