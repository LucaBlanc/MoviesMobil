import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Menu from './Menu'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import RNPickerSelect from 'react-native-picker-select';

export default class Films extends Component {
  render() {
    return (
      <>
        <Menu/>

        <View style={{display: 'flex',alignItems: 'center',marginTop: 20,marginBottom: 20}}>
          <Text style={{fontSize:35, fontFamily:"Staatliches-Regular"}}>Films</Text>
          <View style={styles.bandeHeader}></View>
        </View>
        <View style={styles.filterBox}>
          <View style={styles.picker}>
              <RNPickerSelect
                  style={{
                    inputAndroid:{
                      color: '#666',
                      fontFamily: 'Staatliches-Regular',
                    },
                    placeholder:{
                      color: '#000',
                      fontSize: 20,
                    }
                  }}
                  placeholder={{
                    label: 'Genre',
                    value: '10',
                    color: '#666',
                  }}
                  selectedValue={null}
                  fixAndroidTouchableBug={true}
                  useNativeAndroidPickerStyle={false}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setSelectedTypeContact(itemValue)}
                  items={[
                    { label: 'Messagerie', value: 'voicemail', color: (Platform.OS === 'ios') ? '#fff' : '#000' },
                    { label: 'Utilisateur', value: 'user', color: (Platform.OS === 'ios') ? '#fff' : '#000' },
                    { label: 'File d\'attente', value: 'queue', color: (Platform.OS === 'ios') ? '#fff' : '#000' },
                    { label: 'Numéro libre', value: 'number', color: (Platform.OS === 'ios') ? '#fff' : '#000' },
                  ]}
              />
              <FontAwesomeIcon style={{color:"#aa67eb",padding:10,marginLeft:5}} icon={faCaretDown}/>
          </View>
          <View style={styles.defBox}>
            <Text>test</Text>
          </View>
        </View>
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
    paddingHorizontal:10,
    marginRight: 10,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 50
  }
})