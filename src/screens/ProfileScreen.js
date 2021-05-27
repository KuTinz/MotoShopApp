import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native'
import CustomHeader from '../components/CustomHeader'

const ProfileScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <CustomHeader title="Profile" isHome={true} navigation={navigation}/>

                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'blue'}}>
                        <Image source={require('../assets/icons/guest_user.png')}
                            style={{height: 120, width: 120, borderRadius: 60 }}        
                        />
                    </View>
                    <View style={{flex: 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
                        <Text style={styles.text}>Guest</Text>
                        <Button 
                        title="Login"
                        onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                    
                </View>   
            </View>
        </ScrollView>                
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center'  },
    text: {fontSize: 20, } 
  });
