import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import CustomHeader from '../../components/CustomHeader'

export default function RegisterScreen({navigation}) {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const onSignUpPressed = () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError || nameError) {
          setName({ ...name, error: nameError })
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          return
        }
        navigation.reset({
          index: 0,
          routes: [{ name: 'Profile' }],
        })
      }
    return (
        <View style={{flex: 1}}>
            <CustomHeader title="Register" navigation={navigation}/>
            <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Create Account</Text>
            <TextInput
                style={styles.inputText}
                label="Name"
                returnKeyType="next"   
                value={name.value}
                onChangeText={(text) => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
            />
            <TextInput
                style={styles.inputText}
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />
            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <Button
                mode="contained"
                onPress={onSignUpPressed}
                style={{ marginTop: 24 }}
                title={"Sign Up"}
            />
            <View style={styles.row}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')}>
                <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>

</View>
    
  )
}
 
//     )
// }



const styles = StyleSheet.create({
    inputText: {
        height: 40,
        width: "90%",
      marginBottom: 12,
      marginHorizontal: 20,
      borderWidth: 1,
      padding: 12,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
      },
      link: {
        fontWeight: 'bold',
        
      },
})
