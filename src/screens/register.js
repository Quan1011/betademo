import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default Register = ({navigation}) => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle="black-content"/>
            <View style={{height: "100%", width: "100%"}}>
                {/* Header */}
                <View style={{width: '100%', height: '8%', flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() =>{
                        navigation.navigate('Login');
                    }} 
                    >
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{fontSize: 24}}>Đăng Ký</Text>
                </View>
                {/* Boder */}
                <ScrollView>
                    <View style={{width: '100%', height: '92%', backgroundColor: '#F4F4F4', alignItems: 'center'}}>
                        {/* Login */}
                        <View style={{width: '90%'}}>
                            <View>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>THÔNG TIN BẮT BUỘC</Text>
                            </View>
                            {/* Name */}
                            <View style={styles.TextInput}>
                                <FontAwesome name="user-o" size={30} color="gray" style={{marginLeft: 10}}/>
                                <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                                <TextInput 
                                placeholder="Họ tên"
                                style={{height: '100%', width: '70%', }}/>
                            </View>
                            {/* Email */}
                            <View style={styles.TextInput}>
                                <MaterialIcons name="mail-outline" size={30} color="gray" style={{marginLeft: 10}}/>
                                <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                                <TextInput 
                                placeholder="Email"
                                style={{height: '100%', width: '70%', }}/>
                            </View>
                            {/* PassWord */}
                            <View style={styles.TextInput}>
                                <Feather name="lock" size={30} color="gray" style={{marginLeft: 10}}/>
                                <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                                <TextInput 
                                placeholder="Mật khẩu"
                                style={{height: '100%', width: '70%', }}/>
                            </View>
                            {/* PassWord */}
                            <View style={styles.TextInput}>
                                <Feather name="lock" size={30} color="gray" style={{marginLeft: 10}}/>
                                <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                                <TextInput 
                                placeholder="Nhập lại mật khẩu"
                                style={{height: '100%', width: '70%', }}/>
                            </View>
                            {/* PhoneNumber */}
                            <View style={styles.TextInput}>
                                <Feather name="smartphone" size={30} color="gray" style={{marginLeft: 10}}/>
                                <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                                <TextInput 
                                placeholder="Số điện thoại"
                                style={{height: '100%', width: '70%', }}/>
                            </View>
                            <View>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>THÔNG TIN BỔ SUNG</Text>
                            </View>
                            {/* Date */}
                            <View style={styles.TextInput}>
                                <FontAwesome name="birthday-cake" size={24} color="gray" style={{marginLeft: 10}}/>
                                <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                                <TextInput 
                                placeholder="Ngày sinh"
                                style={{height: '100%', width: '70%', }}/>
                            </View>
                            {/* Sex */}
                            <View style={styles.TextInput}>
                                <FontAwesome name="intersex" size={30} color="gray" style={{marginLeft: 10}}/>
                                <View style={{width: 1.5, marginHorizontal: 10, height: '60%', backgroundColor: 'gray'}}></View>
                                <TextInput 
                                placeholder="Giới tính"
                                style={{height: '100%', width: '70%', }}/>
                            </View>
                            {/* Cam kết */}
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity style={{ height: 15, width: 15, borderWidth: 1, borderRadius: 100, marginTop: 3}}></TouchableOpacity>
                                <Text style={{marginTop: 20, marginLeft: 5}}>Tôi cam kết tuân theo 
                                <Text style={{fontWeight: 'bold', color: '#356B97'}}> chính sách bảo mật </Text> 
                                và 
                                <Text style={{fontWeight: 'bold', color: '#356B97'}}> điều khoản sử dụng </Text> 
                                của Betacineplex.</Text>
                            </View>
                            {/* Register */}
                            <TouchableOpacity 
                                style={{marginTop: 20, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1875B8', borderRadius:5}}
                                onPress={() =>{
                                    navigation.navigate('Login');
                                }} 
                                >
                                <Text style={styles.Text}>ĐĂNG KÝ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        borderWidth: 1, 
        flexDirection: 'row', 
        height: 50, 
        alignItems: 'center', 
        marginTop: 15, 
        borderRadius:5
    },

    Text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
})