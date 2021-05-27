import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import CustomHeader from '../../components/CustomHeader'

export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })
  
    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          return
        }}

    const emailValidator = (email) => {
        const re = /\S+@\S+\.\S+/
        if (!email) return "Email can't be empty."
        if (!re.test(email)) return 'Ooops! We need a valid email address.'
        return ''
        }
    
    const passwordValidator = (password) => {
        if (!password) return "Password can't be empty."
        if (password.length < 5) return 'Password must be at least 5 characters long.'
        return ''
        }   
    //console.log(navigation) 

    return (
        <View style={{flex: 1}}>
            <CustomHeader title="Login" navigation={navigation} goBack={navigation.goBack}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>LoginScreen</Text>
                <TextInput style={styles.inputText}
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
                placeholder="Email"
                />
                <TextInput style={styles.inputText}
                    label="Password"
                    returnKeyType="done"
                    value={password.value}
                    onChangeText={(text) => setPassword({ value: text, error: '' })}
                    error={!!password.error}
                    errorText={password.error}
                    secureTextEntry
                    placeholder="Password"
                />
                 <View style={styles.forgotPassword}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}
                    >
                    <Text style={styles.forgot}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>
                <Button onPress={onLoginPressed} 
                    title={"Login"}
                >
                
                </Button>
                <View style={styles.row}>
                    <Text>Don’t have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.replace('Register')}>
                    <Text style={styles.link}>Sign up</Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        width: "90%",
      marginBottom: 12,
      marginHorizontal: 20,
      borderWidth: 1,
      padding: 12,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
      },
      row: {
        flexDirection: 'row',
        marginTop: 4,
      },
      forgot: {
        fontSize: 13,
        
      },
      link: {
        fontWeight: 'bold',
       
      },
  })
