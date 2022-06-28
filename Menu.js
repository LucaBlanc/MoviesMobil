import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

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
        <Animatable.View style={styles.menuBox}  animation={this.state.animation} duration={500} useNativeDriver>
            <View style={styles.headerBurgerMenu}>
              <Text style={styles.menuTxtHeader}>Menu</Text>
              <TouchableOpacity onPress={this.displayBurgerMenu} style={styles.burgerOpen}>
                <FontAwesomeIcon style={{color:"#aa67eb",padding:15}} icon={faXmark}/>
              </TouchableOpacity>
            </View>

            <View style={styles.burgerMainMenu}>
              <TouchableOpacity onPress={() => this.props.setRoute('movies')}>
                <Text style={this.props.route == 'movies' ? styles.menuTxtSelected : styles.menuTxt}>Films</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.setRoute('shows')}>
                <Text style={this.props.route == 'shows' ? styles.menuTxtSelected : styles.menuTxt}>Séries</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.setRoute('actors')}>
                <Text style={this.props.route == 'actors' ? styles.menuTxtSelected : styles.menuTxt}>Acteurs</Text>
              </TouchableOpacity>
            </View>

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
  },
  logo: {
    fontSize: 35,
    color: "#aa67eb",
  },
  burgerMainMenu:{
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    justifyContent:'space-between',
    width: '100%',
    position:'relative',
    zIndex: 200,
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
    marginTop: Platform.OS === 'ios' ? 50 : 10,
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
    paddingRight: 10,
    paddingLeft: 20,
    borderTopStartRadius: 20,
    borderBottomStartRadius: 20,
    zIndex:100,

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
    paddingHorizontal: 10,
  },
  menuTxtSelected:{
    fontSize:28,
    marginRight: 15,
    marginBottom:20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 17,
    color:'#aa67eb',
    overflow:"hidden"
  },
  menuTxtHeader:{
    fontSize:30,
    color: '#fff',
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
    fontSize: 25,
    color:'#fff',
    marginBottom: -5
  },
  footerVers:{
    fontSize: 15,
    color:'#fff'
  },
})