import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import Menu from './Menu'
import ActorCard from './ActorCard'

import testactor from './assets/Images/testactorBig.jpg'
import Recherche from './Recherche'

export default class Acteurs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      results: [],
    }
  }

  componentDidMount(){
    fetch('https://cburdeyron.com/api/actors/', {
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
                <Recherche title="Acteurs"/>
                <View style={{display:'flex',alignItems:'center'}}>
                  {
                    this.state.results.map((result) => {
                      return(<ActorCard inforRoute={this.props.infoRoute} name={result.name} url={result.profile_path} birth={result.birthday} id={result.id}/>)
                    })
                  }
                </View>
            </ScrollView>
        </>
    )
  }
}

const styles = StyleSheet.create({
    
})