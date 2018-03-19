import React, { Component } from 'react';
import { View } from 'react-native';

// or any pure javascript modules available in npm
import CarouselComponent from "./CarouselComponent"
import GridComponent from "./GridComponent"


export default class RowComponent extends Component {
  render() {
    const isCarousel = this.props.layoutType == "carousel_items";
    const items = this.props.items
    
    const selectedComponent =  isCarousel ? (
      <CarouselComponent title={this.props.title} items={items}></CarouselComponent>
    ) : (
      <GridComponent title={this.props.title} items={items}></GridComponent>
    );
    return (
      <View>
        {selectedComponent}
      </View>
    );
  }
}
