import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import CustomHeader from '../components/CustomHeader'

const NotificationScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notification test</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({})
