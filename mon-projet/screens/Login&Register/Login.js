
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';  
import styles from './style.js';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Login(props){
    const Navigation = useNavigation();
    return( 
    <View>
        <View style={styles.logoContainer}>
            <Image source={require('../../assets/cat.webp')} style={styles.logo} />
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
            <View style = {[styles.button, {marginTop: 50}]}>
                <TouchableOpacity style={styles.inBut}>
                  <View>
                    <Text style={styles.textSign}>Login</Text>
                  </View>
                  
                </TouchableOpacity>
                 <View style={{padding: 15}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
              ----Or Continue as----
            </Text>
          </View>
        <View style={styles.bottomButton}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity style={styles.inBut2}>
                <FontAwesome
                  name="user-circle-o"
                  color="white"
                  style={styles.smallIcon2}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Guest</Text>
            </View>
             <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={styles.inBut2}
                 onPress={() => Navigation.navigate('Register')
            }>
                <FontAwesome
                  name="user-plus"
                  color="white"
                  style={[styles.smallIcon2, {fontSize: 30}]}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText} >Sign Up</Text>
            </View>
             <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => alert('Coming Soon')}>
                <FontAwesome
                  name="google"
                  color="white"
                  style={[styles.smallIcon2, {fontSize: 30}]}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Google</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={styles.inBut2}
                onPress={() => alert('Coming Soon')}>
                <FontAwesome
                  name="facebook-f"
                  color="white"
                  style={[styles.smallIcon2, {fontSize: 30}]}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Facebook</Text>
            </View>
            
          </View>
            </View>
        </View>
    </View>
    )   
}


export default Login;