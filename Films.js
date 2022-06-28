import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Menu from './Menu'
import Card from './Card'

import Recherche from './Recherche'

export default class Films extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      results: [],
    }
  }

  componentDidMount(){
    fetch('https://cburdeyron.com/api/popular-movies/', {
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
    return (
      <>
        <Menu route={this.props.route} setRoute={this.props.setRoute}/>
        <ScrollView style={{width:'100%',marginTop:10}}>
          <Recherche title="Films"/>
          <View style={{display:'flex',alignItems:'center'}}>
            {
              this.state.results.map((result) => {
                return(<Card inforRoute={this.props.infoRoute} title={result.title} imgurl={result.poster_path} date={result.release_date} note={result.vote_average} id={result.id}/>)
              })
            }
          </View>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({})