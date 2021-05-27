import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomHeader from '../components/CustomHeader'

const CategoriesScreen = (navigation) => {
    return (
        <View style={{flex: 1}}>
            {/* <CustomHeader title="Categories" isHome={true} navigation={navigation}/> */}
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>CategoriesScreen</Text>
            </View>
        </View> 
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
