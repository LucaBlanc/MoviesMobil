import { Text, StyleSheet, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Menu from './Menu'

import testban from './assets/Images/testban.jpg'
import testimg from './assets/Images/testimg.jpg'
import testactorBig from './assets/Images/testactorBig.jpg'

import {getScreenWidth, getScreenHeight} from './screenSize';

import DistribCard from './DistribCard'
import MoviesCard from './MoviesCard'

export default class Detail extends Component {
  render() {
    return (
    <>
        <Menu route={this.props.route} setRoute={this.props.setRoute}/>
        <ScrollView style={{marginTop: 20,display:'flex',width:'100%'}}>
            {this.props.type != "actor" ?
            <>
                <ImageBackground source={testban} resizeMode="cover" style={styles.banAffiche}>
                    <View style={{backgroundColor:'#00000060',width:160,display:'flex',alignItems:'center',flexDirection:'row'}}>
                        <Image source={testimg} style={styles.afficheImg}/>
                        <View style={styles.noteBox}>
                            <Text style={{fontFamily:'Staatliches-Regular',fontSize:18,color:'#fff'}}>85%</Text>
                        </View>
                    </View>
                </ImageBackground>
                <Text style={styles.headerTxtDetail}>Lucifer (2016)</Text>
                <Text style={styles.introTxtDetail}>
                    Lassé d’être le Seigneur des Enfers, 
                    le diable s’installe à Los Angeles où il ouvre un 
                    nightclub et se lie avec une policière de la brigade 
                    criminelle...
                </Text>
                <View style={{display:'flex',flexDirection:'row'}}>
                    {this.props.type == 'show' ?
                        <>
                            <Text style={styles.creaTxtDetail}>Création: <Text style={{color:'#000'}}>Tom Kapinos</Text></Text>
                            <Text style={styles.creaTxtDetail}>Saisons: <Text style={{color:'#000'}}>6</Text></Text>
                        </>
                    :
                        <>
                            <Text style={styles.creaTxtDetail}>Réalisation: <Text style={{color:'#000'}}>Tom Kapinos</Text></Text>
                            <Text style={styles.creaTxtDetail}>Durée: <Text style={{color:'#000'}}>1h36</Text></Text>
                        </>
                    }
                </View>
                <View style={{display:'flex',flexDirection:'row',marginHorizontal:20,marginTop:10}}>
                    <Text style={styles.genreDetail}>Crime</Text>
                    <Text style={styles.genreDetail}>Science-Fiction & Fantastique</Text>
                </View>
                <View style={styles.distribDetail}>
                    <Text style={{fontSize: 23,fontFamily: "Staatliches-Regular",color:'#fff',marginLeft:20,marginTop:20}}>Distribution des rôles</Text>
                    <DistribCard/>
                </View>
            </>
            :
            <>
                <Image style={styles.acteurImg} source={testactorBig}/>
                <Text style={styles.headerTxtDetail}>Tom ellis</Text>
                <Text style={styles.introTxtDetail}>
                    Tom Ellis is a Welsh actor, best known for playing Dr. Oliver Cousins in the BBC soap opera "EastEnders" and Detective Sergeant Sam Speed in a "Life on Mars" parody in the "The Catherine Tate Show. He was also Sam in the BBC comedy "Pulling", and plays Gary in Miranda Hart's BBC2 comedy "Miranda".  Other notable roles include Justyn in Channel 4's "No Angels" and Thomas Milligan in the series three finale of British science-fiction television programme "Doctor Who". He also starred in the ITV comedy drama "Monday Monday" during July and August 2009 alongside Fay Ripley.
                    {"\n"}{"\n"}
                    Ellis is married to actress Tamzin Outhwaite. The family moved to England and Ellis attended High Storrs School in Sheffield and was a French Horn player in the City of Sheffield Youth Orchestra. He was also a huge Sheffield Wednesday fan, but now supports Arsenal.
                </Text>
                <View style={styles.distribDetail}>
                    <Text style={{fontSize: 23,fontFamily: "Staatliches-Regular",color:'#fff',marginLeft:20,marginTop:20}}>Filmographie</Text>
                    <MoviesCard/>
                </View>
            </>
            }
        </ScrollView>
    </>
    )
  }
}

const styles = StyleSheet.create({
    afficheImg:{
        width:120, 
        resizeMode:'contain',
        height:250,
        borderRadius:20,
        marginLeft:20
    },
    acteurImg:{
        width: getScreenWidth(),
        height: 250
    },
    banAffiche:{
        height: 250,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    noteBox:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#27ae60',
        paddingHorizontal: 6,
        paddingVertical:8,
        borderRadius: 10,
        marginRight: 60,
        position:'relative',
        top: 80,
        right: 30
    },
    headerTxtDetail:{
        alignSelf:'center',
        fontSize: 28,
        fontFamily: "Staatliches-Regular",
        marginTop:15,
    },
    introTxtDetail:{
        marginTop:15,
        alignSelf:'center',
        fontSize: 15,
        marginHorizontal: 20,
    },
    creaTxtDetail:{
        marginTop:15,
        fontSize: 15,
        fontFamily: "Staatliches-Regular",
        marginHorizontal: 20,
        color:'#aaa',
    },
    genreDetail:{
        fontFamily:'Staatliches-Regular',
        fontSize: 15,
        backgroundColor:'#aa67eb',
        borderRadius: 50,
        color:'#fff',
        paddingHorizontal: 7,
        paddingVertical: 1,
        marginRight:5,
    },
    distribDetail:{
        backgroundColor:'#aa67eb',
        marginTop: 20,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        paddingBottom: 30,
        marginBottom: 0
    }
})