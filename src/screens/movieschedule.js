import React, { Component, useState, useEffect, useRef } from 'react';
import { StatusBar, SafeAreaView, ActivityIndicator, FlatList, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, Image, SectionList, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const {width: screenWidth} = Dimensions.get('window');
const HEIGHT = Dimensions.get('window').height;
const COMING = 'COMING';
const SHOWING = 'SHOWING';
const EARLY = 'EARLY';

export default function MovieSchedule() {
   
  const [page, setPage] =useState(SHOWING);
  

  return (
    // <SafeAreaView style={styles.container}>
    //   <StatusBar barStyle='dark-content'/>
    //   <View style = {{height: '10%', width: '100%', flexDirection: 'row', justifyContent:'space-between', backgroundColor: '#fff'}}>
    //     <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 10}}>
    //       <FontAwesome5 name="user-circle" size={50} color="grey"/>
    //     </TouchableOpacity>
    //     <View style={{ justifyContent: 'center'}}> 
    //       <Text>Chào<Text style = {{fontWeight: 'bold'}}> Tùng Lâm </Text></Text>
    //       <View style = {{flexDirection: 'row', marginTop: 10}}>
    //         <View style={{flexDirection: 'row', marginRight: 10}}>
    //           <Feather name="user" size={20} color="#047DCA" />
    //           <Text style = {{fontWeight: 'bold', marginLeft: 3, marginTop: 2}}>MEMBER</Text>
    //         </View>
    //         <View style={{flexDirection: 'row', marginRight: 10}}>
    //           <AntDesign name="staro" size={20} color="#73B013"/>
    //           <Text style = {{fontWeight: 'bold', marginLeft: 3, marginTop: 2}}>24.400</Text>
    //         </View>
    //         <View style={{flexDirection: 'row'}}>
    //           <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color="#D96D24" />
    //           <Text style = {{fontWeight: 'bold', marginLeft: 3, marginTop: 2,}}> 0 </Text>
    //         </View>
    //       </View>
    //     </View>
    //     <View style = {{}}>
    //       <Image
    //       source={require('../image/logo.png')} 
    //       />
    //     </View>
    //   </View>
    //   <View style={{width: '100%', borderBottomColor: '#959595', borderBottomWidth: 1}}></View>
    //   <View style={{width: '100%', height: 60, flexDirection: 'row', backgroundColor: '#fff'}}>
    //       <TouchableOpacity style={{width: '33.333%', justifyContent: 'center', alignItems: 'center'}}
    //       onPress={() => {setPage(COMING)}}
    //       disabled={page === COMING ? true: false}
    //       >
    //           <Text style={styles.Text}>SẮP CHIẾU</Text>
    //           {page === COMING? <View style={{height: 2, width: '20%', backgroundColor: 'black', position: 'absolute', bottom: 10}}></View> :null}
    //       </TouchableOpacity>
    //       <TouchableOpacity style={{width: '33.333%', justifyContent: 'center', alignItems: 'center'}}
    //       onPress={() => {setPage(SHOWING)}}
    //       disabled={page === SHOWING ? true: false}
    //       >
    //           <Text style={styles.Text}>ĐANG CHIẾU</Text>
    //           {page === SHOWING? <View style={{height: 2, width: '20%', backgroundColor: 'black', position: 'absolute', bottom: 10}}></View> :null}
    //       </TouchableOpacity>
    //       <TouchableOpacity style={{width: '33.333%', justifyContent: 'center', alignItems: 'center'}}
    //       onPress={() => {setPage(EARLY)}}
    //       disabled={page === EARLY ? true: false}
    //       >
    //           <Text style={styles.Text}>SUẤT CHIẾU SỚM</Text>
    //           {page === EARLY  ? <View style={{height: 2, width: '20%', backgroundColor: 'black', position: 'absolute', bottom: 10}}></View> :null}
    //       </TouchableOpacity>
    //   </View>
    //   <ScrollView style={{width: screenWidth}}>
    //   <View style= {{width: screenWidth, height: 140, marginBottom: 5}}>
    //       <ScrollView
    //         horizontal
    //         pagingEnabled
    //         contentContainerStyle={{ width: screenWidth * imageList.length, height: 200}}
    //         onScroll = {handleScroll}
    //         scrollEventThrottle={16}
    //         ref={stepCarousel}
    //       >
    //       {imageList.map((e, index) => 
    //         <View key={index.toString()}>
    //           {e.image}
    //         </View>
    //         )}
    //       </ScrollView>
    //   </View>
    //   <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/jailangkung.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Jailangkung:...</Text>
    //       <Text style={styles.minute}>92 phút</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/chunguyentaisinh.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Chú Nguyền ...</Text>
    //       <Text style={styles.minute}>94 phút</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/santaclause.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Đêm Hung Tàn</Text>
    //       <Text style={styles.minute}>118 phút</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/avatar.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Avatar 2: Dò...</Text>
    //       <Text style={styles.minute}>192 phút</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/BlackPink.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Chiến Binh B...</Text>
    //       <Text style={styles.minute}>162 phút</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/cuocdieuhanhthamlang.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Cuộc Diễu ...</Text>
    //       <Text style={styles.minute}>130 phút</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/hanhphucmau.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Hạnh Phúc ...</Text>
    //       <Text style={styles.minute}>110 phút</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/OP.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>One Piece Fil...</Text>
    //       <Text style={styles.minute}>115 phút</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/trotanrucro.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Tro Tàn Rực Rỡ</Text>
    //       <Text style={styles.minute}>115 phút</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
    //     <TouchableOpacity style={styles.film}>
    //       <Image source={require('../image/xamchiemvatchu.png')} resizeMode='stretch' style={styles.image}/>
    //       <Text style={styles.name}>Xâm Chiếm V...</Text>
    //       <Text style={styles.minute}>92 phút</Text>
    //     </TouchableOpacity>
    //   </View>
    //   </ScrollView>
    // </SafeAreaView>
    <View style={{width: '100%', height: '100%'}}>
      <View style={{ width: '100%', height: '20%'}}>
        <HeaderComponent page={page} setPage={setPage}/>
      </View>
      <View style={{width: '100%', height: '80%', backgroundColor: '#F4F4F4'}}>
        {page === SHOWING? <BodyComponent/> : null}
        {page === COMING? <SoonComponent/> : null}
        {page === EARLY? <SpecialComponent/> : null}
      </View>
    </View>
  );
}

const HeaderComponent = ({page, setPage}) => {

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content'/>
      <View style = {{flex: 1, width: '100%', flexDirection: 'row', justifyContent:'space-between', backgroundColor: '#fff'}}>
        <TouchableOpacity 
        style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 10}}
        // onPress={() =>{
        //   navigation.navigate('User');
        //  }}
        >
          <FontAwesome5 name="user-circle" size={50} color="grey"/>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center'}}> 
          <Text>Chào<Text style = {{fontWeight: 'bold'}}> Kim Quân </Text></Text>
          <View style = {{flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Feather name="user" size={20} color="#047DCA" />
              <Text style = {{fontWeight: 'bold', marginLeft: 3, marginTop: 2}}>MEMBER</Text>
            </View>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <AntDesign name="staro" size={20} color="#73B013"/>
              <Text style = {{fontWeight: 'bold', marginLeft: 3, marginTop: 2}}>24.400</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color="#D96D24" />
              <Text style = {{fontWeight: 'bold', marginLeft: 3, marginTop: 2,}}> 0 </Text>
            </View>
          </View>
        </View>
        <View style = {{}}>
          <Image
          source={require('../image/logo.png')} 
          />
        </View>
      </View>
      <View style={{width: '100%', borderBottomColor: '#959595', borderBottomWidth: 1}}></View>
      <View style={{width: '100%', height: 50, flexDirection: 'row', backgroundColor: '#fff'}}>
          <TouchableOpacity style={{width: '33.333%', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {setPage(COMING)}}
          disabled={page === COMING ? true: false}
          >
              <Text style={styles.Text}>SẮP CHIẾU</Text>
              {page === COMING? <View style={{height: 2, width: '20%', backgroundColor: 'black', position: 'absolute', bottom: 10}}></View> :null}
          </TouchableOpacity>
          <TouchableOpacity style={{width: '33.333%', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {setPage(SHOWING)}}
          disabled={page === SHOWING ? true: false}
          >
              <Text style={styles.Text}>ĐANG CHIẾU</Text>
              {page === SHOWING? <View style={{height: 2, width: '20%', backgroundColor: 'black', position: 'absolute', bottom: 10}}></View> :null}
          </TouchableOpacity>
          <TouchableOpacity style={{width: '33.333%', justifyContent: 'center', alignItems: 'center'}}
          onPress={() => {setPage(EARLY)}}
          disabled={page === EARLY ? true: false}
          >
              <Text style={styles.Text}>SUẤT CHIẾU SỚM</Text>
              {page === EARLY  ? <View style={{height: 2, width: '20%', backgroundColor: 'black', position: 'absolute', bottom: 10}}></View> :null}
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const BodyComponent = () => {
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  // const stepCarousel = useRef(null);

  useEffect (() => {
    //load data
    const data = [
      {
        image: <Image source={require('../image/slider1.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider2.png')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider3.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider4.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider5.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
    ];

    //cap nhat
    setImageList(data);
  }, [])

  useEffect (() => {
    if (imageList.length > 0) {
      let index = 0;
      setInterval(() => {
        // stepCarousel.current.scrollTo({ x: index * screenWidth, y: 0, animated: true});
        index += 1;
        if (index === imageList.length) {
          index = 0;
        }
      }, 5000);
    }
  }, [imageList])

  const handleScroll = (e) => {
    if(!e) {
      return;
    }
    const { nativeEvent } = e;
    if ( nativeEvent && nativeEvent.contentOffset ) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      if (nativeEvent.contentOffset.x > 0) {
        imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
      }
      setCurrentImage(imageIndex);
    }
  }
  return(
    <ScrollView style={{width: screenWidth}}>
      <View style= {{width: screenWidth, height: 140, marginBottom: 5}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            pagingEnabled
            contentContainerStyle={{ width: screenWidth * imageList.length, height: 200}}
            onScroll = {handleScroll}
            scrollEventThrottle={16}
            // ref={stepCarousel}
          >
          {imageList.map((e, index) => 
            <View key={index.toString()}>
              {e.image}
            </View>
            )}
          </ScrollView>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/jailangkung.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Jailangkung:...</Text>
          <Text style={styles.minute}>92 phút</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/chunguyentaisinh.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Chú Nguyền ...</Text>
          <Text style={styles.minute}>94 phút</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/santaclause.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Đêm Hung Tàn</Text>
          <Text style={styles.minute}>118 phút</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/avatar.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Avatar 2: Dò...</Text>
          <Text style={styles.minute}>192 phút</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/BlackPink.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Chiến Binh B...</Text>
          <Text style={styles.minute}>162 phút</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/cuocdieuhanhthamlang.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Cuộc Diễu ...</Text>
          <Text style={styles.minute}>130 phút</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/hanhphucmau.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Hạnh Phúc ...</Text>
          <Text style={styles.minute}>110 phút</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/OP.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>One Piece Fil...</Text>
          <Text style={styles.minute}>115 phút</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/trotanrucro.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Tro Tàn Rực Rỡ</Text>
          <Text style={styles.minute}>115 phút</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/xamchiemvatchu.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Xâm Chiếm V...</Text>
          <Text style={styles.minute}>92 phút</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
}

const SpecialComponent = () => {
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  // const stepCarousel = useRef(null);

  useEffect (() => {
    //load data
    const data = [
      {
        image: <Image source={require('../image/slider1.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider2.png')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider3.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider4.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider5.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
    ];

    //cap nhat
    setImageList(data);
  }, [])

  useEffect (() => {
    if (imageList.length > 0) {
      let index = 0;
      setInterval(() => {
        // stepCarousel.current.scrollTo({ x: index * screenWidth, y: 0, animated: true});
        index += 1;
        if (index === imageList.length) {
          index = 0;
        }
      }, 5000);
    }
  }, [imageList])

  const handleScroll = (e) => {
    if(!e) {
      return;
    }
    const { nativeEvent } = e;
    if ( nativeEvent && nativeEvent.contentOffset ) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      if (nativeEvent.contentOffset.x > 0) {
        imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
      }
      setCurrentImage(imageIndex);
    }
  }
  return(
    <ScrollView style={{width: screenWidth}}>
      <View style= {{width: screenWidth, height: 140, marginBottom: 5}}>
          <ScrollView
            horizontal
            pagingEnabled
            contentContainerStyle={{ width: screenWidth * imageList.length, height: 200}}
            onScroll = {handleScroll}
            scrollEventThrottle={16}
            // ref={stepCarousel}
          >
          {imageList.map((e, index) => 
            <View key={index.toString()}>
              {e.image}
            </View>
            )}
          </ScrollView>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/avatar.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.name}>Avatar 2: Dò...</Text>
          <Text style={styles.minute}>192 phút</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
}

const SoonComponent = () => {
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  // const stepCarousel = useRef(null);

  useEffect (() => {
    //load data
    const data = [
      {
        image: <Image source={require('../image/slider1.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider2.png')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider3.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider4.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
      {
        image: <Image source={require('../image/slider5.jpg')} resizeMode='stretch' style={{width: screenWidth, height: '70%'}}/>
      },
    ];

    //cap nhat
    setImageList(data);
  }, [])

  useEffect (() => {
    if (imageList.length > 0) {
      let index = 0;
      setInterval(() => {
        // stepCarousel.current.scrollTo({ x: index * screenWidth, y: 0, animated: true});
        index += 1;
        if (index === imageList.length) {
          index = 0;
        }
      }, 5000);
    }
  }, [imageList])

  const handleScroll = (e) => {
    if(!e) {
      return;
    }
    const { nativeEvent } = e;
    if ( nativeEvent && nativeEvent.contentOffset ) {
      const currentOffset = nativeEvent.contentOffset.x;
      let imageIndex = 0;
      if (nativeEvent.contentOffset.x > 0) {
        imageIndex = Math.floor((nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth);
      }
      setCurrentImage(imageIndex);
    }
  }
  return(
    <ScrollView style={{width: screenWidth}}>
      <View style= {{width: screenWidth, height: 140, marginBottom: 5}}>
          <ScrollView
            horizontal
            pagingEnabled
            contentContainerStyle={{ width: screenWidth * imageList.length, height: 200}}
            onScroll = {handleScroll}
            scrollEventThrottle={16}
            // ref={stepCarousel}
          >
          {imageList.map((e, index) => 
            <View key={index.toString()}>
              {e.image}
            </View>
            )}
          </ScrollView>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/chuyendinhodoi.jpg')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.time}>23-12-2022</Text>
          <Text style={styles.name1}>Chuyến Đi N...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/daodocdac.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.time}>23-12-2002</Text>
          <Text style={styles.name1}>Đảo Độc Đắc ...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/quyettamcuaem.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.time}>23-12-2002</Text>
          <Text style={styles.name1}>Quyết Tâm C...</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/meodihia.jpg')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.time}>30-12-2022</Text>
          <Text style={styles.name1}>Mèo Đi Hia...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/thanhso.jpg')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.time}>30-12-2022</Text>
          <Text style={styles.name1}>Thánh Sói...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/sieulua.jpg')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.time}>22-01-2023</Text>
          <Text style={styles.name1}>Siêu Lừa Gặp...</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
        <TouchableOpacity style={styles.film}>
          <Image source={require('../image/shazam.png')} resizeMode='stretch' style={styles.image}/>
          <Text style={styles.time}>17-03-2023</Text>
          <Text style={styles.name1}>ShaZam! Cơn thịnh...</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },

    Text: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold'
    },

    film: {
      height: 250, 
      width: '30%', 
      alignItems: 'center', 
      paddingHorizontal: 6
    },

    image: {
      width: '120%', 
      height: '80%',
      borderRadius: 5
    },

    name: {
      fontWeight: 'bold',
      marginTop: 3,
      color: '#4C5862'
    },

    name1: {
      fontWeight: 'bold',
      color: '#4C5862'
    },

    minute: {
      fontSize: 12,
      color: 'grey'
    },

    time: {
      fontSize: 12,
      color: '#3FB4F7',
      marginTop: 3
    }
});
