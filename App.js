import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import Films from './Films';
import Login from './Login';
import Series from './Series'

import {getNavbarBottomSize, getScreenHeight} from './screenSize';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       route: "login"
    }
    this.route = this.route.bind(this)
  }

  route(route){
    this.setState({route: route})
  }

  render(){
    console.log(this.state.route)
    return (
      <View style={styles.body}>
        <StatusBar animated={true} backgroundColor="#aa67eb" hidden={false}/>
        {this.state.route == "login" ?
          <Login route={this.route} />
        : 
          null
        }

        {this.state.route == "movies" ?
          <Films route={this.state.route} setRoute={this.route}/>
        : 
          null
        }

        {this.state.route == "shows" ?
          <Series route={this.state.route} setRoute={this.route}/>
        : 
          null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    height: getScreenHeight()-getNavbarBottomSize(),
    display:'flex',
    alignItems:'center'
  },
});

export default App;
