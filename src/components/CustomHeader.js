import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {icons} from '../constants'


//const CustomHeader = ({title, isHome, navigation}) => (
export default function CustomHeader({title, isHome, navigation}){
    return (
        <View style={{flexDirection: 'row', height: 50}}>
            {
                isHome ? 
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image source={icons.barMenu}
                            style={{height: 30, width:30, marginLeft: 5}}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
                : 
                <TouchableOpacity 
                    style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
                    onPress={() => navigation.goBack()}
                    //onPress={goBack}
                >
                    <Image source={icons.back}
                        style={{height: 20, width:20, marginLeft: 5}}
                        resizeMode='contain'
                    />
                    <Text>Back</Text>
                </TouchableOpacity>
            }
            
            <View style={{flex: 1.5, justifyContent: 'center'}}>
                <Text style={{textAlign:'center'}}>{title}</Text>
            </View>
            <View style={{flex: 1}}></View>
        </View>
    )
}

//export default CustomHeader

const styles = StyleSheet.create({})
