import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Menu from './Menu'
import Card from './Card'

import Recherche from './Recherche'

export default class Films extends Component {
  render() {
    return (
      <>
        <Menu route={this.props.route} setRoute={this.props.setRoute}/>
        <ScrollView style={{width:'100%',marginTop:10}}>
          <Recherche title="Films"/>
          <View style={{display:'flex',alignItems:'center'}}>
            <Card inforRoute={this.props.infoRoute}/>
          </View>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({})