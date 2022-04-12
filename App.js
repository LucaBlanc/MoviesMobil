import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import Films from './Films';
import Login from './Login';

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
          <Films/>
        : 
          null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
});

export default App;
