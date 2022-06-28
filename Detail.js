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
    constructor(props) {
        super(props)
      
        this.state = {
          result: {},
          dateTab: []
        }
    }

    componentDidMount(){
        fetch('https://cburdeyron.com/api/'+this.props.type+'/'+this.props.id+'/', {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token 50769535b75136734a5c3a8cc790d25c571bdb9a',
            }
          })
          .then(resp => resp.json())
          .then(data => {
            if(this.props.type != 'actor'){
                let date = this.props.type == 'movie' ? data.release_date : data.first_air_date
                let dateTab = date.split('-')
                this.setState({result: data, dateTab})
            }else{
                this.setState({result: data})
            }
                
          })
          .catch(error => console.log("Error is : ", error))
    }
  render() {
    const posterUrl = 'https://image.tmdb.org/t/p/w500'+this.state.result.poster_path
    const banUrl = 'https://image.tmdb.org/t/p/w500'+this.state.result.backdrop_path
    const profilUrl = 'https://image.tmdb.org/t/p/w500'+this.state.result.profile_path
    return (
    <>
        <Menu route={this.props.route} setRoute={this.props.setRoute}/>
        <ScrollView style={{marginTop: 20,display:'flex',width:'100%'}}>
            {this.props.type != "actor" ?
            <>
                <ImageBackground source={{uri: banUrl}} resizeMode="cover" style={styles.banAffiche}>
                    <View style={{backgroundColor:'#00000090',width:160,display:'flex',alignItems:'center',flexDirection:'row'}}>
                        <Image source={{uri: posterUrl}} style={styles.afficheImg}/>
                        <View style={styles.noteBox}>
                            <Text style={{fontSize:18,color:'#fff'}}>{this.state.result.vote_average*10}%</Text>
                        </View>
                    </View>
                </ImageBackground>
                <Text style={styles.headerTxtDetail}>{ this.props.type == 'movie' ? this.state.result.title +' ('+this.state.dateTab[0]+')' : this.state.result.name +' ('+this.state.dateTab[0]+')'}</Text>
                <Text style={styles.introTxtDetail}>
                    {this.state.result.overview}
                </Text>
                <View style={{display:'flex',flexDirection:'row'}}>
                    {this.props.type == 'show' ?
                        <>
                            <Text style={styles.creaTxtDetail}>Saisons: <Text style={{color:'#000'}}>{this.state.result.number_of_seasons}</Text></Text>
                        </>
                    :
                        <>
                            <Text style={styles.creaTxtDetail}>Budget: <Text style={{color:'#000'}}>{this.state.result.budget+' $'}</Text></Text>
                            <Text style={styles.creaTxtDetail}>Durée: <Text style={{color:'#000'}}>{Math.trunc(this.state.result.runtime/60)+'h '+this.state.result.runtime % 60+'min'}</Text></Text>
                        </>
                    }
                </View>
                <View style={{display:'flex',flexDirection:'row',marginHorizontal:20,marginTop:10}}>
                    <Text style={styles.genreDetail}>Crime</Text>
                    <Text style={styles.genreDetail}>Science-Fiction & Fantastique</Text>
                </View>
                {/* <View style={styles.distribDetail}>
                    <Text style={{fontSize: 23,color:'#fff',marginLeft:20,marginTop:20}}>Distribution des rôles</Text>
                    <DistribCard/>
                </View> */}
            </>
            :
            <>
                <Image style={styles.acteurImg} source={{uri: profilUrl}}/>
                <Text style={styles.headerTxtDetail}>{this.state.result.name}</Text>
                <Text style={styles.introTxtDetail}>
                    {this.state.result.biography}
                </Text>
                {/* <View style={styles.distribDetail}>
                    <Text style={{fontSize: 23,color:'#fff',marginLeft:20,marginTop:20}}>Filmographie</Text>
                    <MoviesCard/>
                </View> */}
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
        paddingVertical:12,
        borderRadius: 10,
        marginRight: 60,
        position:'relative',
        top: 80,
        right: 30
    },
    headerTxtDetail:{
        alignSelf:'center',
        fontSize: 28,
        marginTop:15,
        textAlign:'center',
        width: '90%'
    },
    introTxtDetail:{
        marginTop:15,
        alignSelf:'center',
        fontSize: 15,
        marginHorizontal: 20,
        paddingBottom: 40,
    },
    creaTxtDetail:{
        marginTop:15,
        fontSize: 15,
        marginHorizontal: 20,
        color:'#aaa',
    },
    genreDetail:{
        overflow:'hidden',
        fontSize: 15,
        backgroundColor:'#aa67eb',
        borderRadius: 10,
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