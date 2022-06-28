import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

import {getScreenWidth, getScreenHeight} from './screenSize';

import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import testimg from './assets/Images/testimg.jpg'

export default class DistribCard extends Component {

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={testimg}/>

                <View style={{padding: 5}}>
                    <Text style={styles.title}>Lucifer</Text>
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
        height: 207,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    title:{
        fontSize: 17,
        textAlign:'center'
    }
})