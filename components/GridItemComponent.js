import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class GridItemComponent extends Component {
  render() {
    return (
      <TouchableOpacity  onPress={()=> {
          console.log("Click ", this.props.deepLink)
          Linking.openURL(this.props.deepLink)
        }}
        >
        <View>
          <View style={styles.container}>
            <Image style={styles.img} source={{uri:this.props.imgUrl}}/>
          </View>
          <Text style={styles.paragraph}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const width = 190,
  height = 190,
  borders = {
    tl: 3,
    tr: 3,
    bl: 3,
    br: 3,
  };

const baseStyle = {
  width: width,
  height: height,
  borderTopLeftRadius: borders.tl,
  borderTopRightRadius: borders.tr,
  borderBottomLeftRadius: borders.bl,
  borderBottomRightRadius: borders.br,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    marginTop: 8,
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',
  },
  description: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9da0a5',
  },
  img: {
    ...baseStyle
  }
});
