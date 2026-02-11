
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';  
import styles from './style.js';
import { FontAwesome, Feather } from '@expo/vector-icons';

function Register(){
    return( 
    <View>
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/signUp.png')} style={styles.logo} />
        </View>
        <View style={styles.loginContainer}>
            <Text style={styles.text_header}>Sign Up!</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" size={20} color="#05375a" style={styles.smallIcon} />
                <TextInput placeholder="Full Name" style={styles.textInput}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="envelope-o" size={20} color="#05375a" style={styles.smallIcon} />
                <TextInput placeholder="Email" style={styles.textInput}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="phone" size={20} color="#05375a" style={styles.smallIcon} />
                <TextInput placeholder="Mobile" style={styles.textInput}/>
            </View>
            <View style={styles.action}>
                <FontAwesome name="lock" size={20} color="#05375a" style={styles.smallIcon} />
                <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true}/>
            </View>
            <View style = {[styles.button, {marginTop: 50}]}>
                <TouchableOpacity style={styles.inBut}>
                  <View>
                    <Text style={styles.textSign}>Sign Up</Text>
                  </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )   
}


export default Register;