import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const imageUrl = 'https://image.tmdb.org/t/p/w500'+this.props.imgurl

    let date = this.props.date

    let dateTab = date.split('-')

    return (
      <TouchableOpacity onPress={() => this.props.inforRoute('movie', this.props.id)} activeOpacity={0.8} style={styles.cardBox}>
        <Image style={{width: 280,height:420,borderTopRightRadius:15,borderTopLeftRadius:15,resizeMode:'cover'}} source={{uri: imageUrl}}/>
        <View style={styles.dateBox}>
          <Text style={styles.txtDateCard}>{dateTab[2] +'/'+ dateTab[1] +'/'+ dateTab[0]}</Text>
        </View>
        <View style={styles.cardInfosBox}>
            <View style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <Text style={styles.txtCard}>{this.props.title}</Text>
            </View>
            <View style={styles.noteBox}>
                <Text style={{fontSize:25,color:'#fff'}}>{this.props.note*10}%</Text>
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
        width: 282,

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
        paddingHorizontal: 6,
        paddingVertical:14,
        borderRadius: 10,
    },
    txtCard:{
        fontSize: 23,
        width:170,
    },
    txtGenreCard:{
        fontSize: 15,
        backgroundColor:'#aa67eb',
        borderRadius: 50,
        color:'#fff',
        paddingHorizontal: 7,
        paddingVertical: 1,
    },
    txtDateCard:{
        fontSize: 22,
        backgroundColor:'#aa67eb',
        borderRadius: 14,
        right: 5,
        color:'#fff',
        paddingHorizontal: 10,
        paddingVertical: 1,
        position: 'relative',
        bottom: 20,
        alignSelf:'flex-end',
        marginBottom: -15,
        overflow:"hidden"
    },
})