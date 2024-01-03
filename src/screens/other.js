import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Other({navigation}) {
  return (
    
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={{ fontSize: 37, fontWeight: "bold", color: "#16232b", marginLeft: "5%",}}>Khác</Text>
      </SafeAreaView>
      <ScrollView>
      <View style={{height :"70%", justifyContent: "space-between"}}>
      <View style={styles.box}>
        <TouchableOpacity>
          <View style={styles.bt_1}>
            <View style={styles.service}>
              <View style={{ backgroundColor: "#e4f5ff", height: "50%", width: "35%", alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
                <MaterialIcons name="card-giftcard" size={30} color="#71b4e2" />
              </View>
              <Text style={styles.txt}>Voucher miễn phí</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.bt_1}>
            <View style={styles.service}>
              <View
                style={{
                  backgroundColor: "#e7f9f9",
                  height: "50%",
                  width: "35%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                }}
              >
                <Fontisto name="film" size={30} color="#46c0c1" />
              </View>
              <Text
                style={styles.txt}>
                Rạp phim Beta{" "}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
        onPress={() =>{
          navigation.navigate('User');
         }} 
        >
          <View style={styles.bt_1}>
            <View style={styles.service}>
              <View style={{
                  backgroundColor: "#f2f8ea",
                  height: "50%",
                  width: "35%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                }}
              >
                <MaterialCommunityIcons name="account-outline" size={30} color="#a6d460" />
              </View>
              <Text style={styles.txt}>Thành viên Beta</Text>
            </View>
          </View>
          </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.bt_1}>
            <View style={styles.service}>
              <View
                style={{
                  backgroundColor: "#fff1e8",
                  height: "50%",
                  width: "35%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                }}
              >
                <Feather name="bell" size={30} color="#e98641" />
              </View>
              <Text
                style={styles.txt}>
                Thông báo{" "}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity>
          <View style={styles.bt_1}>
            <View style={styles.service}>
              <View
                style={{
                  backgroundColor: "#fae6f2",
                  height: "50%",
                  width: "35%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                }}
              >
                <Ionicons name="document-text-outline" size={30} color="#c8317a" />
              </View>
              <Text
                style={styles.txt}>
                Tuyển dụng
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.bt_1}>
            <View style={styles.service}>
              <View
                style={{
                  backgroundColor: "#f6f3fe",
                  height: "50%",
                  width: "35%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                }}
              >
                <Feather name="settings" size={30} color="#a684e9" />
              </View>
              <Text
                style={styles.txt}>
                Cài đặt{" "}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: "33%",
    marginVertical: "10%",
  },
  bt_1: {
    height: "150%",
    width: 175,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 5,
  },

  service: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
  },
  txt: {
    paddingTop: "7%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#79858e",
  },
});