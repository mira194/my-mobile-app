
import React from 'react';
import { View, Text,Button } from 'react-native';  
import { useNavigation } from '@react-navigation/native';

function ProfileScreen(props){
    return( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ProfileScreen</Text>
            <Button title="Go to User" onPress={() => props.navigation.navigate('User')}/>
        </View>
    )   
}


export default ProfileScreen;