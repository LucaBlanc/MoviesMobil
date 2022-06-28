import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Menu from './Menu'
import Card from './Card'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

//import { FlatList } from 'react-native-bidirectional-infinite-scroll'

import RNPickerSelect from 'react-native-picker-select';
import Recherche from './Recherche'

export default class Series extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      results: [],
    }
  }

  componentDidMount(){
    fetch('https://cburdeyron.com/api/popular-shows/', {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token 50769535b75136734a5c3a8cc790d25c571bdb9a',
        }
      })
      .then(resp => resp.json())
      .then(data => {
        this.setState({results: data.results})
      })
      .catch(error => console.log("Error is : ", error))
  }
  render() {
    console.log(this.state.results)
    return (
      <>
        <Menu route={this.props.route} setRoute={this.props.setRoute}/>
        <ScrollView style={{width:'100%',marginTop:10}}>
          <Recherche title="Séries"/>
          <View style={{display:'flex',alignItems:'center'}}>
            {
              this.state.results.map((result) => {
                return(<Card inforRoute={this.props.infoRoute} title={result.name} imgurl={result.poster_path} date={result.first_air_date} note={result.vote_average} id={result.id}/>)
              })
            }
          
          </View>
        </ScrollView>
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
  },
  picker:{
    backgroundColor:'#ededed',
    borderRadius: 50,
    marginHorizontal:0,
    alignItems:'center',
    paddingHorizontal:10,
    paddingVertical: 3,
    display: 'flex',
    flexDirection:'row'
  },
  filterBox:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '100%',
    paddingHorizontal:10,
  },
  defBox:{
    backgroundColor:'#ededed',
    paddingHorizontal:4,
    marginRight: 10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  defTxt:{
    
    fontSize: 20,
    marginHorizontal: 3,
    paddingHorizontal: 3,
  },  
  defTxtActive:{
    
    fontSize: 20,
    marginHorizontal: 3,
    paddingHorizontal: 8,
    backgroundColor:'#aa67eb',
    borderRadius: 20,
    color:'#fff'
  },
  searchBox:{
    display: 'flex',
    flexDirection:'row',
    width:'100%',
    backgroundColor:'#aa67eb',
    marginTop: 15,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical: 10,
    marginBottom: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  searchInput:{
    backgroundColor:'#fff',
    
    fontSize:22,
    width: 220,
  },
  searchInputBox:{
    paddingRight:5,
    paddingLeft: 15,
    paddingVertical:3,
    backgroundColor:'#fff',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row'
  },
  searchBtnBox:{
    backgroundColor:'#fff',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchBtn:{
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor:'#efefef',
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }

})