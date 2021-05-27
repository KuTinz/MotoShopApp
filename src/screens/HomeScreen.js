import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader'


const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <CustomHeader title='Home' isHome= {true} navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text styles>HomeScreen test</Text>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
