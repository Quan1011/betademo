import React, { useState, useEffect, Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  StatusBar
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-gesture-handler";


export default function User({navigation}) {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View>
      <View style={styles.head}>
        <TouchableOpacity
        onPress={() =>{
          navigation.goBack();
         }} 
        >
          <AntDesign name="left" size={25} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingLeft: "6%",
            color: "white",
          }}
        >
          Thành viên Beta
        </Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box1}></View>
          <View style={styles.box2}>
            <View style={{ alignItems: "center", marginTop: "-17%" }}>
              <View style={styles.avatar}>
                <View style={{ alignItems: "center", paddingTop: "40%" }}>
                  <View style={{ zIndex: 1000 }}>
                    <Button
                      title="chọn ảnh"
                      onPress={pickImage}
                      color={"#3e77a0"}
                    />
                  </View>
                  {image && (
                    <>
                      <Image
                        source={{ uri: image }}
                        style={{
                          width: 120,
                          aspectRatio: 1,
                          marginTop: "-73%",
                          zIndex: 1,
                          borderRadius: 100,
                        }}
                      />
                    </>
                  )}
                </View>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Kim Quân
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "5%",
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "400", paddingTop: "2%" }}
                >
                  Thẻ thành viên
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  1234567899876</Text>
              </View>
            </View>
            <View style={{ marginTop: "-13%", paddingHorizontal: "5%" }}>
              <Image
                source={require("../image/ma.png")}
                style={{ width: "100%", height: "60%", resizeMode: "contain" }}
              />
            </View>
            <View style={styles.pay}>
              <View style={styles.send}>
                <Text style={styles.total}>Tổng chi tiêu</Text>
                <Text style={styles.number}>0đ</Text>
              </View>
              <View style={styles.bonus}>
                <Text style={styles.total}>Điểm thưởng</Text>
                <Text style={styles.number}>0</Text>
              </View>
            </View>
            <View style={styles.point}>
              <Image
                source={require("../image/12.png")}
                style={{ width: "15%", height: "261%" }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  paddingLeft: "2%",
                  width: "67%",
                }}
              >
                <Text>Bạn cần tích lũy thêm </Text>
                <Text style={{ color: "#e55f47" }}>3.000.000vnđ </Text>
                <Text>để </Text>
              </Text>
              <Image
                source={require("../image/13.png")}
                style={{ width: "15%", height: "261%" }}
              />
            </View>
            <Text
              style={{ fontSize: 13, fontWeight: "bold", marginLeft: "40%" }}
            >
              nâng hạng VIP
            </Text>
            <View style={styles.line}></View>
            <View style={styles.money}>
              <Text style={styles.txt}>0</Text>
              <Text style={styles.txt}>3.000.000</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.service}>
              <Text style={styles.act}>Điểm Beta</Text>
              <View style={styles.icon}>
                <AntDesign name="rightcircle" size={24} color="#9592a1" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.service2}>
              <Text style={styles.act}>Giới thiệu bạn bè</Text>
              <View style={styles.icon}>
                <AntDesign name="rightcircle" size={24} color="#9592a1" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.service2}>
              <Text style={styles.act}>Lịch sử giao dịch</Text>
              <View style={styles.icon}>
                <AntDesign name="rightcircle" size={24} color="#9592a1" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.service2}>
              <Text style={styles.act}>Thẻ thành viên</Text><View style={styles.icon}>
                <AntDesign name="rightcircle" size={24} color="#9592a1" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.service2}>
              <Text style={styles.act}>Thông tin thành viên</Text>
              <View style={styles.icon}>
                <AntDesign name="rightcircle" size={24} color="#9592a1" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.service2}>
              <Text style={styles.act}>Thay đổi mật khẩu</Text>
              <View style={styles.icon}>
                <AntDesign name="rightcircle" size={24} color="#9592a1" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.service2}>
              <Text style={styles.act}>Xóa tài khoản</Text>
              <View style={styles.icon}>
                <AntDesign name="rightcircle" size={24} color="#9592a1" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() =>{
            navigation.navigate('Login');
           }}
          >
            <Text
              style={{
                fontSize: 19,
                color: "#ef3f2f",
                marginTop: "5%",
                marginLeft: "7%",
                marginBottom: "5%",
              }}
            >
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    zIndex: 1,
  },
  head: {
    flexDirection: "row",
    paddingTop: "15%",
    paddingLeft: '5%',
    position: "absolute",
    zIndex: 2,
  },
  box1: {
    backgroundColor: "#3e77a0",
    height: 180,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  box2: {
    // borderRightColor: 'gray',
    // borderLeftColor: 'gray',
    marginTop: "0%",
    // borderWidth: 7,
    // // borderColor:'white',
    // marginHorizontal: '3%',
    marginLeft: "2%",
    height: 530,
    width: "96%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.49,
    elevation: 12,
    borderRadius: 5,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "white",
    borderRadius: 100,
    borderColor: "red",
    borderWidth: 1,
  },
  pay: {
    flexDirection: "row",
    marginTop: "-40%",
  },
  send: {
    alignItems: "center",
    borderWidth: 3,
    borderRightWidth: 1.5,
    borderLeftColor: 0,
    borderColor: "#e3e3e3",
    width: "50%",
  },
  bonus: {
    alignItems: "center",
    borderWidth: 3,
    borderLeftWidth: 1.5,
    borderRightColor: 0,
    borderColor: "#e3e3e3",
    width: "50%",
  },
  total: {
    fontSize: 18,
    color: "#878690",
    fontWeight: "500",
    padding: "6%",
  },number: {
    fontSize: 25,
    color: "#0c589c",
    fontWeight: "bold",
    paddingBottom: "5%",
  },
  point: {
    flexDirection: "row",
    marginTop: "10%",
    alignItems: "center",
    width: "100%",
    marginHorizontal: "2%",
  },
  line: {
    backgroundColor: "#f3f3f3",
    height: "1%",
    width: "95%",
    marginHorizontal: "3%",
    marginTop: "5%",
    borderRadius: 5,
  },
  money: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: "2%",
    paddingHorizontal: "2%",
  },
  txt: {
    fontWeight: "800",
    color: "#545366",
  },
  service: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.49,
    elevation: 12,
    height: 50,
    width: "96%",
    marginTop: "3%",
    marginLeft: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  service2: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.49,
    elevation: 12,
    height: 50,
    width: "96%",
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "2%",
    borderRadius: 5,
  },
  act: {
    fontSize: 16,
    paddingTop: "4%",
    paddingLeft: "5%",
    fontWeight: "350",
  },
  icon: {
    paddingRight: "5%",
    paddingTop: "4%",
  },
});