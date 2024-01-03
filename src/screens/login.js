import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default Login = ({navigation}) => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="black-content"/>
            <View style={{height: "100%", width: "100%"}}>
                {/* Header */}
                <View style={{width: '100%', height: '8%', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, marginLeft: 20}}>Đăng nhập</Text>
                </View>
                {/* Boder */}
                <View style={{width: '100%', height: '92%', backgroundColor: '#F4F4F4', alignItems: 'center'}}>
                    {/* Login */}
                    <View style={{width: '90%'}}>
                        {/* Email */}
                        <View style={{borderWidth: 1, flexDirection: 'row', height: 50, alignItems: 'center', marginTop: 60, borderRadius:5}}>
                            <MaterialIcons name="mail-outline" size={30} color="gray" style={{marginLeft: 10}}/>
                            <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                            <TextInput 
                            placeholder="Email hoặc Tên đăng nhập"
                            style={{height: '100%', width: '70%', }}/>
                        </View>
                        {/* Password */}
                        <View style={{borderWidth: 1, flexDirection: 'row', height: 50, alignItems: 'center', marginTop: 20, borderRadius:5}}>
                            <Feather name="lock" size={30} color="gray" style={{marginLeft: 10}}/>
                            <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                            <TextInput 
                            placeholder="Mật khẩu"
                            style={{height: '100%', width: '70%', }}/>
                        </View>
                        {/* Forgot Password */}
                        <TouchableOpacity style={{marginTop: 30}}>
                            <Text style={{color: 'blue', textDecorationLine: 'underline'}}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                        {/* Login */}
                        <TouchableOpacity 
                            style={{marginTop: 30, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FD3708', borderRadius:5}}
                            onPress={() =>{
                                navigation.navigate('HomeTabs');
                               }} 
                            >
                            <Text style={styles.Text}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                        {/* Login with APPLE */}
                        <TouchableOpacity 
                        style={{marginTop: 20, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000000', borderRadius:5}}
                        onPress={() =>{
                            navigation.navigate('HomeTabs');
                           }} 
                        >
                            <Text style={styles.Text}>ĐĂNG NHẬP BẰNG APPLE</Text>
                        </TouchableOpacity>
                        {/* Login with FACEBOOK */}
                        <TouchableOpacity 
                        style={{marginTop: 20, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1875B8', borderRadius:5}}
                        onPress={() =>{
                            navigation.navigate('HomeTabs');
                           }} 
                        >
                            <Text style={styles.Text}>ĐĂNG NHẬP BẰNG FACEBOOK</Text>
                        </TouchableOpacity>
                        <View style={{alignItems: 'center', marginTop: 50, flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={{height: 1, width: '43%', backgroundColor: 'gray'}}></View>
                            <Text style={{color: 'gray'}}> Hoặc </Text>
                            <View style={{height: 1, width: '43%', backgroundColor: 'gray'}}></View>
                        </View>
                        <TouchableOpacity 
                            style={{alignItems: 'center', marginTop: 70}}
                            onPress={() =>{
                                navigation.navigate('Register');
                               }} 
                            >
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Đăng ký tài khoản Beta Cineplex</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
})