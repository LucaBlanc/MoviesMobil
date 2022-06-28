import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import testactorBig from './assets/Images/testactorBig.jpg'


export default class ActorCard extends Component {
  render() {
    const imageUrl = 'https://image.tmdb.org/t/p/w500'+this.props.url

    let birth = this.props.birth

    let birthTab = birth.split('-')
    return (
        <TouchableOpacity onPress={() => this.props.inforRoute('actor', this.props.id)} activeOpacity={0.8} style={styles.cardBox}>
        <Image style={{width: 280,height:350,borderTopRightRadius:15,borderTopLeftRadius:15,}} source={{uri: imageUrl}}/>
        <View style={styles.cardInfosBox}>
            <View style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <Text style={styles.txtCard}>{this.props.name}</Text>
                <Text style={styles.subtxtCard}>{birthTab[2] +'/'+ birthTab[1] +'/'+ birthTab[0]}</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    cardBox:{
        backgroundColor:'#efefef',
        padding: 0,
        paddingBottom: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor:'#dddddd',
        display:'flex',
        alignContent:'center',
        marginBottom: 50,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,
    
        elevation: 3,
    },
    cardInfosBox:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginTop: 10,
        alignItems:'center',
    },
    txtCard:{
        fontSize: 23,
    },
    subtxtCard:{
        fontSize: 15,
        color:'#666'
    },
})