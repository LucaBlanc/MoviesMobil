import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

import NavigationBar from 'react-native-navbar-color'
import * as Animatable from 'react-native-animatable'

export default class Menu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      menuBurger: false,
      animation: 'fadeOutRight'
    }
    this.displayBurgerMenu = this.displayBurgerMenu.bind(this)
    this.isBurgerMenu = this.isBurgerMenu.bind(this)
  }

  componentDidMount(){
    NavigationBar.setColor('#313131')
  }


  isBurgerMenu(){
    this.setState({menuBurger: !this.state.menuBurger})
  }

  displayBurgerMenu(){
    if(this.state.animation == 'fadeOutRight'){
      this.setState({animation: 'fadeInRight'})
      this.isBurgerMenu()
    }else{
      this.setState({animation: 'fadeOutRight'})
      setTimeout(this.isBurgerMenu, 500)
    }
  }

  render() {
    let menuBurger;
    if(this.state.menuBurger){
      menuBurger = 
          <Animatable.View style={styles.menuBox} animation={this.state.animation} duration={500} useNativeDriver>
              <View style={styles.headerBurgerMenu}>
                <Text style={styles.menuTxtHeader}>Menu</Text>
                <TouchableOpacity onPress={this.displayBurgerMenu} style={styles.burgerOpen}>
                  <FontAwesomeIcon style={{color:"#aa67eb",padding:15}} icon={faXmark}/>
                </TouchableOpacity>
              </View>

              <Text style={styles.menuTxtSelected}>Films</Text>
              <Text style={styles.menuTxt}>Séries</Text>
              <Text style={styles.menuTxt}>Acteurs</Text>

              <View style={styles.footerBurgerMenu}>
                <Text style={styles.footerTxt}>Movies®</Text>
                <Text style={styles.footerVers}>V 1.0.0</Text>
              </View>
          </Animatable.View>
    }
    return (
      <>
      <View style={styles.contain}>
        <Text style={styles.logo}>Movies</Text>

        <TouchableOpacity onPress={this.displayBurgerMenu} style={styles.burger}>
          <FontAwesomeIcon style={{color:"#aa67eb",padding:15}} icon={faBars}/>
        </TouchableOpacity>
      </View>
      {menuBurger}
      </>
    )
  }
}

const styles = StyleSheet.create({
  contain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
    zIndex: 10,
  },
  logo: {
    fontFamily: "Staatliches-Regular",
    fontSize: 35,
    color: "#aa67eb",
  },
  burger: {
    backgroundColor: "#ededed",
    padding: 10,
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  burgerOpen: {
    backgroundColor: "#ededed",
    padding: 10,
    borderRadius: 50,
    alignSelf: 'flex-end',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  headerBurgerMenu:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width: '100%',
    marginTop: 10,
    marginBottom: 50
  },
  menuBox:{
    backgroundColor: "#aa67eb",
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 220,
    display: 'flex',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingLeft: 20,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    zIndex:10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  menuTxt:{
    fontSize:28,
    marginRight: 15,
    marginBottom:20,
    color: '#fff',
    fontFamily: "Staatliches-Regular",
    paddingHorizontal: 10,
  },
  menuTxtSelected:{
    fontSize:28,
    marginRight: 15,
    marginBottom:20,
    fontFamily: "Staatliches-Regular",
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 50,
    color:'#aa67eb'
  },
  menuTxtHeader:{
    fontSize:30,
    color: '#fff',
    fontFamily: "Staatliches-Regular",
    marginLeft: 35
  },
  footerBurgerMenu:{
    display: 'flex',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 15,
  },
  footerTxt:{
    fontFamily: "Staatliches-Regular",
    fontSize: 25,
    color:'#fff',
    marginBottom: -5
  },
  footerVers:{
    fontFamily: "Staatliches-Regular",
    fontSize: 15,
    color:'#fff'
  },
})