import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import testimg from './assets/Images/testimg.jpg'

export default class Card extends Component {
  render() {
    return (
      <View style={styles.cardBox}>
        <Image style={{width: 280,height:420,borderRadius:15}} source={testimg}/>
        <Text style={styles.txtDateCard}>13 dec. 2021</Text>
        <View style={styles.cardInfosBox}>
            <View style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <Text style={styles.txtCard}>Lucifer</Text>
                <Text style={styles.txtGenreCard}>Action</Text>
            </View>
            <View style={styles.noteBox}>
                <Text style={{fontFamily:'Staatliches-Regular',fontSize:25,color:'#fff'}}>85%</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    cardBox:{
        backgroundColor:'#efefef',
        padding: 10,
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
    noteBox:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#27ae60',
        paddingHorizontal: 8,
        paddingVertical:10,
        borderRadius: 10,
    },
    txtCard:{
        fontFamily:'Staatliches-Regular',
        fontSize: 23,
    },
    txtGenreCard:{
        fontFamily:'Staatliches-Regular',
        fontSize: 15,
        backgroundColor:'#aa67eb',
        borderRadius: 50,
        color:'#fff',
        paddingHorizontal: 7,
        paddingVertical: 1,
    },
    txtDateCard:{
        fontFamily:'Staatliches-Regular',
        fontSize: 22,
        backgroundColor:'#aa67eb',
        borderRadius: 50,
        color:'#fff',
        paddingHorizontal: 10,
        paddingVertical: 1,
        position: 'relative',
        bottom: 20,
        alignSelf:'flex-end',
        marginBottom: -15
    }
})