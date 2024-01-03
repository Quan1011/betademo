import React, { Component, useState } from 'react';
import { 
    Image, 
    Button, 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity, 
    SafeAreaView, 
    StatusBar,
    FlatList 
} from 'react-native';

const NEW = 'NEW';
const PROMOTION = 'PROMOTION'

      const ListNew = [
        {
          id:1,
          image: require('../image/img1.png'),
          new_name: 'CHỤP BĂNG MŨ RƠM - SIÊNG NĂNG GHÉ RẠP'
        },
        {
          id: 2,
          image: require('../image/img2.png'),
          new_name: 'MỪNG NGÀY THẦY CÔ - KHUYẾN MÃI HẾT CỠ'
        }, 
        {
          id: 3,
          image: require('../image/img3.jpg'),
          new_name: 'BLACK FRIDAY - COMBO GIÁ "NGÃ CÂY"'
        },
        {
          id: 4,
          image: require('../image/img4.jpg'),
          new_name: 'Ở GHÉP CÙNG APLUS'
        },
        {
          id: 5,
          image: require('../image/img5.jpg'),
          new_name: 'GIẢM NGAY 20K VỚI SHOPEE SCAN & PAY VOUCHER'
        },
        { 
          id: 6,
          image: require('../image/img6.jpg'),
          new_name: 'ƯU ĐÃI HỦY DIỆT - VÉ XEM PHIM 0 ĐỒNG'
        },
        {
          id: 7,
          image: require('../image/img7.jpg'),
          new_name: 'THÀNH VIÊN BETA - ĐỒNG GIÁ 45K/50K'
        },
      ]

      const ListPromotion = [
        {
          id:1,
          image: require('../image/img4.jpg'),
          new_name: 'Ở GHÉP CÙNG APLUS'
        },
        {
          id: 2,
          image: require('../image/benle1.png'),
          new_name: 'ƯU ĐÃI 15% KHÓA MINI-MBA, DÀNH CHO THÀNH VIÊN CỦA BETA CINEMAS'
        }, 
        {
          id: 3,
          image: require('../image/benle2.jpg'),
          new_name: 'THÁM TỪ LỪNG DANH CONAN - NÀNG DÂU HALLOWEEN - KHỞI CHIẾU ĐẶC BIỆT 21/...'
        },
        // {
        //   id: 4,
        //   image: require('../image/benle2.jpg'),
        //   new_name: 'Quảng cáo tại Rạp chiếu phim đẹp nhất Việt Nam'
        // },
        // {
        //   id: 5,
        //   image: require('../image/benle2.jpg'),
        //   new_name: 'SUẤT CHIẾU SỚM ĐẶC BIỆT - SÁT THỦ NHÂN TẠO 2 (29.02.2022)'
        // },
        { 
          id: 6,
          image: require('../image/benle5.jpg'),
          new_name: 'ĐIỆN THOẠI ĐEN SUẤT CHIẾU SỚM TỪ 22/06/2022'
        },
        {
          id: 7,
          image: require('../image/benle6.jpg'),
          new_name: 'CẢ HAI PHIM "TRỊNH CÔNG SƠN" & "EM VÀ TRỊNH" SẼ CÓ SUẤT CHIẾU ĐẶC BIỆT'
        },
      ] 
  
      const ItemNew = ({ item }) => (
        <TouchableOpacity style={styles.itemTopic}>
            <Image
                style={styles.topic_image}
                source= {item.image}
            />
            <View style={{width: '50%'}}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.new_name}</Text>
            </View>
        </TouchableOpacity>
      );

      const ItemPromotion = ({ item }) => (
        <TouchableOpacity style={styles.itemTopic}>
            <Image
                style={styles.topic_image}
                source= {item.image}
            />
            <View style={{width: '50%'}}>
              <Text style={{ fontSize: 15, fontWeight: 'bold'  }}>{item.new_name}</Text>
            </View>
        </TouchableOpacity>
    );

    const Promotion = ({navigation}) => {
      const [page, setPage] =useState(NEW);
      // const renderItemNew = ({ item }) => (
      //   <ItemNew new={item.new_name} image={item.image} />
      // );
      return (
        <View style={{width: '100%', height: '100%'}}>
          <View style={{ width: '100%', height: '18%'}}>
            <RedComponent page={page} setPage={setPage}/>
          </View>
          <View style={{width: '100%', height: '80%', backgroundColor: '#F4F4F4'}}>
            {page === NEW? <BlueComponent/> : null}
            {page === PROMOTION? <GreenComponent/> : null}
          </View>
        </View>
      );
};

export default Promotion;

const RedComponent = ({page, setPage}) => {
  return(
    <View style={{width: '100%', height: '100%'}}>
      <StatusBar barStyle='light-content'/>
      <View style={{flex: 1, width: '100%', paddingTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 10}}>Tin mới và Ưu đãi</Text>
      </View>
      <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
          <TouchableOpacity style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {setPage(NEW)}}
          disabled={page === NEW ? true: false}
          >
              <Text style={styles.Text}>KHUYẾN MÃI LỚN</Text>
              {page === NEW? <View style={{height: 2, width: '20%', backgroundColor: 'black', position: 'absolute', bottom: 10}}></View> :null}
          </TouchableOpacity>
          <TouchableOpacity style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {setPage(PROMOTION)}}
          disabled={page === PROMOTION ? true: false}
          >
              <Text style={styles.Text}>TIN BÊN LỀ</Text>
              {page === PROMOTION  ? <View style={{height: 2, width: '20%', backgroundColor: 'black', position: 'absolute', bottom: 10}}></View> :null}
          </TouchableOpacity>
      </View>
    </View>
  );
}

const BlueComponent = () => {
  return(
    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        // horizontal
        data={ListNew}
        renderItem={ItemNew}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const GreenComponent = () => {
  return(
    <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        // horizontal
        data={ListPromotion}
        renderItem={ItemPromotion}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemTopic: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    width: '95%',
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 20
  },
  topic_image: {
    width: '50%',
    height: '110%',
    borderRadius: 7,
    marginRight: 5
  },
})
