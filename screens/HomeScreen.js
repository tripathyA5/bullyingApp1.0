import React,{Component} from 'react';

import {TouchableOpacity, View, Text, TextInput, Image} from 'react-native';
import RequestScreen from './RequestScreen'
import LoginScreen from './LoginScreen'
import LawsScreeb from './LawsScreen'
export default class HomeScreen extends Component{
    render(){
        return(
            <View>

            <Text>
                Bullying Advisary App
            </Text>
            <Image source={require('../images/Bullying-Image.jpg')}
            width='100%'
            />

          
            
            <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate('RequestScreen')
            }}
            >
                <Text>
                    Request
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={()=>{
                this.props.navigation.navigate('LawsScreen')}}
            >
                <Text>
                    Laws
                </Text>
            </TouchableOpacity>
            
</View>
        )
    }
}