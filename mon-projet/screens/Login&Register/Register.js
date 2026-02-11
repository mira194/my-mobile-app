import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import { Feather, FontAwesome, Fontisto, MaterialIcons } from '@expo/vector-icons';
import {useState} from 'react';
import axios from 'axios';
import {RadioButton} from 'react-native-paper';

function Register() {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('');
  const [secretText, setSecretText] = useState('');

  const navigation = useNavigation();

  function handelSubmit() {
    
       const userData={ name,
        email,  
        mobile,
        password,
        userType
      }
      axios
      .post('http://10.20.160.2:3000/register', userData).then(res => {
        console.log(res.data);
        if (res.data.status === 'ok') {
          Alert.alert('Registered Successfully!!');
          navigation.navigate('Login');
        } else {
          Alert.alert(JSON.stringify(res.data));
        }
      })
      .catch(e => console.log(e));
  }

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(nameVar.length > 1);
  }

  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar));
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(/[6-9]{1}[0-9]{9}/.test(mobileVar));
  }

  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar));
  }

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}
      style={{backgroundColor: 'white'}}>
      <View>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/signUp.png')}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.text_header}>Register!!!</Text>

          {userType === 'Admin' && (
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                color="#420475"
                style={styles.smallIcon}
              />
              <TextInput
                placeholder="Secret Text"
                style={styles.textInput}
                onChange={e => setSecretText(e.nativeEvent.text)}
              />
            </View>
          )}

          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#420475"
              style={styles.smallIcon}
            />
            <TextInput
              placeholder="Name"
              style={styles.textInput}
              onChange={e => handleName(e)}
            />
            {name.length > 0 && (
              nameVerify ? (
                <Feather name="check-circle" color="green" size={20} />
              ) : (
                <MaterialIcons name="error" color="red" size={20} />
              )
            )}
          </View>
          {name.length > 0 && !nameVerify && (
            <Text style={{marginLeft: 20, color: 'red'}}>
              Name should be more than 1 character.
            </Text>
          )}

          <View style={styles.action}>
            <Fontisto
              name="email"
              color="#420475"
              size={24}
              style={{marginLeft: 0, paddingRight: 5}}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              onChange={e => handleEmail(e)}
            />
            {email.length > 0 && (
              emailVerify ? (
                <Feather name="check-circle" color="green" size={20} />
              ) : (
                <MaterialIcons name="error" color="red" size={20} />
              )
            )}
          </View>
          {email.length > 0 && !emailVerify && (
            <Text style={{marginLeft: 20, color: 'red'}}>
              Enter Proper Email Address
            </Text>
          )}

          <View style={styles.action}>
            <FontAwesome
              name="mobile"
              color="#420475"
              size={35}
              style={{paddingRight: 10, marginTop: -7, marginLeft: 5}}
            />
            <TextInput
              placeholder="Mobile"
              style={styles.textInput}
              onChange={e => handleMobile(e)}
              maxLength={10}
            />
            {mobile.length > 0 && (
              mobileVerify ? (
                <Feather name="check-circle" color="green" size={20} />
              ) : (
                <MaterialIcons name="error" color="red" size={20} />
              )
            )}
          </View>
          {mobile.length > 0 && !mobileVerify && (
            <Text style={{marginLeft: 20, color: 'red'}}>
              Phone number with 6-9 and remaining 9 digits with 0-9
            </Text>
          )}

          <View style={styles.action}>
            <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              onChange={e => handlePassword(e)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {password.length > 0 && (
                showPassword ? (
                  <Feather
                    name="eye"
                    style={{marginRight: -10}}
                    color={passwordVerify ? 'green' : 'red'}
                    size={23}
                  />
                ) : (
                  <Feather
                    name="eye-off"
                    style={{marginRight: -10}}
                    color={passwordVerify ? 'green' : 'red'}
                    size={23}
                  />
                )
              )}
            </TouchableOpacity>
          </View>
          {password.length > 0 && !passwordVerify && (
            <Text style={{marginLeft: 20, color: 'red'}}>
              Uppercase, Lowercase, Number and 6 or more characters.
            </Text>
          )}
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.inBut} onPress={() => handelSubmit()}>
            <View>
              <Text style={styles.textSign}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;