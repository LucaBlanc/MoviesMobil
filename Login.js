import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react'

import NavigationBar from 'react-native-navbar-color'

export default class Login extends Component {

  componentDidMount(){
    NavigationBar.setColor('#aa67eb')
  }

  render() {
    return (
        <>
          <Text style={styles.logo}>Movies</Text>

          <TextInput style={styles.input} placeholder="l.blanc@sciencesu-lyon.fr" placeholderTextColor="#aa67eb"/>
          <TextInput style={styles.input} placeholder="************" placeholderTextColor="#aa67eb"/>

          <TouchableOpacity onPress={() => this.props.route('movies')} style={styles.loginBtn}>
            <Text style={{color: '#fff',fontSize: 30}}>Connexion</Text>
          </TouchableOpacity>
        </>
    )
  }
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 60,
        color: "#aa67eb",
        marginTop: 50,
        marginBottom: 100,
    },
    input: {
        backgroundColor:"#eeeeee",
        width: 300,
        borderRadius: 50,
        fontSize: 22,
        marginTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 8,
        textAlign: 'center',
        color: '#aa67eb',
        textDecorationLine: 'none',
    },
    loginBtn:{
        backgroundColor:"#a55eea",
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 50,
        position: 'absolute',
        bottom: 50,
    },
})