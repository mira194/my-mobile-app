
import React from 'react';
import { View, Text, Button,Image,TextInput, TouchableOpacity } from 'react-native';  
import styles from './style.js';
import { FontAwesome, Feather } from '@expo/vector-icons';

function Login(){
    return( 
    <View>
        <View style={styles.logoContainer}>
            <Image source={require('C:\\Users\\amira\\Desktop\\ReactNative-NodeJs\\mon-projet\\assets\\cat.webp')} style={styles.logo} />
        </View>
        <View style={styles.loginContainer}>
            <Text style={styles.text_header}>LogIn</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" size={20} color="#05375a" style={styles.smallIcon} />
                <TextInput placeholder="Mobile or Email" style={styles.textInput}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="lock" size={20} color="#05375a" style={styles.smallIcon} />
                <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true}/>
            </View>
            <View style={{ justifyContent: 'flex-end',alignItems: 'flex-end', marginRight: 10,marginTop:8}}>
                <Text style={{color:'#05375a',fontWeight:'700'}}>Forgot password?</Text>
            </View>
            <View style = {styles.button}>
                <TouchableOpacity style={styles.inBut}>
                  <View>
                    <Text style={styles.textSign}>Login</Text>
                  </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )   
}


export default Login;