import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, LogBox} from 'react-native';
import Films from './Films';
import Login from './Login';
import Series from './Series'

import {getNavbarBottomSize, getScreenHeight} from './screenSize';
import Detail from './Detail';
import Acteurs from './Acteurs';

LogBox.ignoreAllLogs();

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       route: "login",
       type: null,
       id: null,
    }
    this.route = this.route.bind(this)
    this.infoRoute = this.infoRoute.bind(this)
  }

  route(route){
    this.setState({route: route,type: null,id: null})
  }

  infoRoute(type, id){
    this.setState({type: type,id: id})
  }

  render(){
    return (
      <View style={styles.body}>
        <StatusBar animated={true} backgroundColor="#aa67eb" hidden={false}/>
        {this.state.route == "login" ?
          <Login route={this.route} />
        : 
          null
        }

        {this.state.route == "movies" ?
          this.state.type == null ? 
            <Films infoRoute={this.infoRoute} route={this.state.route} setRoute={this.route}/>
          :
            <Detail id={this.state.id} route={this.state.route} setRoute={this.route} type='movie'/>
        : 
          null
        }

        {this.state.route == "shows" ?
            this.state.type == null ?
            <Series infoRoute={this.infoRoute} route={this.state.route} setRoute={this.route}/>
          :
            <Detail id={this.state.id} route={this.state.route} setRoute={this.route} type='show'/>
        : 
          null
        }

        {this.state.route == "actors" ?
            this.state.type == null ?
            <Acteurs infoRoute={this.infoRoute} route={this.state.route} setRoute={this.route}/>
          :
            <Detail id={this.state.id} route={this.state.route} setRoute={this.route} type='actor'/>
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
    borderTopColor: '#aa67eb',
    borderTopWidth: Platform.OS === 'ios' ? 50 : 0,
    height: Platform.OS === 'ios' ? getScreenHeight() : getScreenHeight()-getNavbarBottomSize(),
    display:'flex',
    alignItems:'center'
  },
});

export default App;
