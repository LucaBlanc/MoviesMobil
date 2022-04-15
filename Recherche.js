import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import RNPickerSelect from 'react-native-picker-select';

export default class Recherche extends Component {
    render() {
        return (
        <>
            <View style={{display: 'flex',alignItems: 'center',marginTop: 20,marginBottom: 30}}>
                <Text style={{fontSize:35, fontFamily:"Staatliches-Regular"}}>{this.props.title}</Text>
                <View style={styles.bandeHeader}></View>
            </View>
            {this.props.title != 'Acteurs' ?
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
                    <Text style={styles.defTxtActive}>tout</Text>
                    <Text style={styles.defTxt}>hd</Text>
                    <Text style={styles.defTxt}>4K</Text>
                </View>
            </View>
            :
            null
            }

            <View style={styles.searchBox}>
                <View style={styles.searchInputBox}>
                    <TextInput style={styles.searchInput} placeholder='Rechercher'/>
                    <TouchableOpacity style={styles.searchBtn}>
                        <FontAwesomeIcon style={{color:"#aa67eb",padding:10,}} icon={faMagnifyingGlass}/>
                    </TouchableOpacity>
                </View>
            </View>
        </>
        )
    }
}

const styles = StyleSheet.create({
    bandeHeader: {
        backgroundColor: '#aa67eb',
        width: 55,
        height: 3,
        borderRadius: 20
    },
    picker: {
        backgroundColor: '#ededed',
        borderRadius: 50,
        marginHorizontal: 0,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 3,
        display: 'flex',
        flexDirection: 'row'
    },
    filterBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
    },
    defBox: {
        backgroundColor: '#ededed',
        paddingHorizontal: 4,
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    defTxt: {
        fontFamily: 'Staatliches-Regular',
        fontSize: 20,
        marginHorizontal: 3,
        paddingHorizontal: 3,
    },
    defTxtActive: {
        fontFamily: 'Staatliches-Regular',
        fontSize: 20,
        marginHorizontal: 3,
        paddingHorizontal: 8,
        backgroundColor: '#aa67eb',
        borderRadius: 20,
        color: '#fff'
    },
    searchBox: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#aa67eb',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        marginBottom: 50,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    searchInput: {
        backgroundColor: '#fff',
        fontFamily: 'Staatliches-Regular',
        fontSize: 22,
        width: 220,
        position: 'relative',
        zIndex: 1,
    },
    searchInputBox: {
        paddingRight: 5,
        paddingLeft: 15,
        paddingVertical: 3,
        backgroundColor: '#fff',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row'
    },
    searchBtnBox: {
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    searchBtn: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: '#efefef',
        borderRadius: 50,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
})