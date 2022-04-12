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

          <TextInput style={styles.input} placeholder="Login"/>
          <TextInput style={styles.input} placeholder="Mot de passe"/>

          <TouchableOpacity onPress={() => this.props.route('movies')} style={styles.loginBtn}>
            <Text style={{color: '#fff',fontSize: 30,fontFamily: "Staatliches-Regular",}}>Connexion</Text>
          </TouchableOpacity>
        </>
    )
  }
}

const styles = StyleSheet.create({
    logo: {
        fontFamily: "Staatliches-Regular",
        fontSize: 60,
        color: "#aa67eb",
        marginTop: 50,
        marginBottom: 100,
    },
    input: {
        backgroundColor:"#eeeeee",
        width: 250,
        borderRadius: 50,
        fontSize: 25,
        marginTop: 40,
        paddingHorizontal: 20,
        paddingVertical: 8,
        textAlign: 'center',
        color: '#aa67eb',
        textDecorationLine: 'none',
        fontFamily: "Staatliches-Regular",
    },
    loginBtn:{
        backgroundColor:"#a55eea",
        paddingHorizontal: 50,
        paddingVertical: 5,
        borderRadius: 50,
        position: 'absolute',
        bottom: 50,
    },
})