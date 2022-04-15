import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import Menu from './Menu'
import ActorCard from './ActorCard'

import testactor from './assets/Images/testactorBig.jpg'
import Recherche from './Recherche'

export default class Acteurs extends Component {
  render() {
    return (
        <>
            <Menu route={this.props.route} setRoute={this.props.setRoute}/>
            <ScrollView style={{width:'100%',marginTop:10}}>
                <Recherche title="Acteurs"/>
                <View style={{display:'flex',alignItems:'center'}}>
                    <ActorCard inforRoute={this.props.infoRoute}/>
                </View>
            </ScrollView>
        </>
    )
  }
}

const styles = StyleSheet.create({
    
})