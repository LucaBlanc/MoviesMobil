import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Menu from './Menu'

export default class Films extends Component {
  render() {
    return (
      <>
        <Menu/>

        <View style={{display: 'flex',alignItems: 'center',marginTop: 20}}>
          <Text style={{fontSize:35, fontFamily:"Staatliches-Regular"}}>Films</Text>
          <View style={styles.bandeHeader}></View>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  bandeHeader: {
    backgroundColor:'#aa67eb',
    width: 55,
    height: 3,
    borderRadius: 20
  }
})