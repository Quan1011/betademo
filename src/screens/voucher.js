import React from 'react';
import { 
    Image, 
    Button, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    SafeAreaView, 
    StatusBar 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Voucher () {
  return (
    <View style={{flex: 1}}>
            <StatusBar barStyle="light-content"/>
            <View style={{height: "100%", width: "100%"}}>
                {/* Header */}
                <View style={{width: '100%', height: '9%', paddingTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 10}}>Voucher của bạn</Text>
                    <View style={{flexDirection: 'row', marginRight: 10}}>
                      <TouchableOpacity>
                        <Ionicons name="add" size={24} color="#fff" />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <MaterialCommunityIcons name="calendar-refresh" size={24} color="#fff" style={{marginLeft: 25}}/>
                      </TouchableOpacity>
                    </View>
                </View>
                {/* Boder */}
                <View style={{width: '100%', height: '92%', backgroundColor: '#F4F4F4',justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#016CAF'}}>BẠN KHÔNG CÓ VOUCHER NÀO!</Text>
                    <Text>Bạn có thể tìm kiếm thêm voucher miễn phí hoặc thêm</Text>
                    <Text>mới voucher của bạn.</Text>
                    <TouchableOpacity style={{marginTop: 20, width: '90%', height: 45, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1875B8', borderRadius:5}}>
                      <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>VOUCHER MIỄN PHÍ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
}
