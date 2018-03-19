import React, { Component } from 'react';
import { View, ListView, Text, StyleSheet } from 'react-native';

// or any pure javascript modules available in npm
import CarouselItemComponent from './CarouselItemComponent';

export default class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(
        props.items
      ),
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.paragraph}>{this.props.title}</Text>
        <Text style={styles.underline}>-----------------------------------------------------------------------------------------------------</Text>
        <View style={styles.container}>
          <ListView
            horizontal={true}
            dataSource={this.state.dataSource}
            removeClippedSubviews={true}
            renderRow={
              (rowData) => 
                <CarouselItemComponent
                  title={rowData.title}
                  description={rowData.description}
                  imgUrl={rowData.images.large}
                  deepLink={rowData.link.android_deeplink}
                ></CarouselItemComponent>
                // <Text>{rowData.title}</Text>
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
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
  }
});
