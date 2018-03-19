import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class CarouselItemComponent extends Component {
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
          <View style={styles.textContainer}>
            <Text style={styles.paragraph}>
              {this.props.title}
            </Text>
            <Text style={styles.description}>
              {this.props.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const width = 300,
  height = 200,
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
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  textContainer: {
    marginLeft: 0,
    marginRight: 5,
  },
  paragraph: {
    marginTop: 8,
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',
  },
  description: {
    marginLeft: 8,
    marginBottom: 16,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#9da0a5',
  },
  img: {
    ...baseStyle
  }
});
