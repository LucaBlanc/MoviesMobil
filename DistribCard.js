import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

import {getScreenWidth, getScreenHeight} from './screenSize';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import testactor from './assets/Images/testactor.jpg'

export default class DistribCard extends Component {

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={testactor}/>

                <View style={{padding: 10}}>
                    <Text style={styles.title}>Tom Ellis</Text>
                    <Text>Lucifer Morningstar</Text>
                </View>
            </View>
        );
    }

  render() {
    return (
      <View>
        <Carousel
            sliderWidth={getScreenWidth()}
            sliderHeight={getScreenHeight()}
            itemWidth={140}
            data={[{
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/UYiroysl.jpg',
              },
              {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/UYiroysl.jpg',
              },
              {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: 'https://i.imgur.com/UYiroysl.jpg',
              }]}
            renderItem={this._renderItem}
            activeSlideAlignment='start'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    item: {
        marginTop: 10,
        backgroundColor:'#fff',
        borderRadius: 10,
        marginHorizontal: 10,
        width: 138,
    },
    image: {
        resizeMode: 'contain',
        width: 138,
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
    },
    title:{
        fontFamily: "Staatliches-Regular",
        fontSize: 18,
    }
})