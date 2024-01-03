import { 
    ActivityIndicator, 
    FlatList, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
    Image, 
    SectionList, 
    StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ListItem = ({item}) => {
  return(
    <TouchableOpacity style = {styles.item}>
      <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
      />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Text style={styles.itemText1}>{item.text1}</Text>
      </View>
    </TouchableOpacity>
  )
}

const SECTIONS=[
  {
  horizontal:true,
  data: [
    {
      key:"1",
      text:"Beta Thanh Xuân",
      text1: "13.7 km",
      uri:"https://files.betacorp.vn/files/ecm/2018/07/04/15676168-708711372631104-1938445758628400757-o-104437-040718-50.jpg",
    
    },
    {
      key:"2",
      text:"Beta Giải Phóng",
      text1: "18.2 km",
      uri:"https://files.betacorp.vn/files/ecm/2020/11/30/untitled-1-174101-301120-13.jpg",
    
    },
    {
      key:"3",
      text:"Beta Mỹ Đình",
      text1: "10.6 km",
      uri:"https://files.betacorp.vn/files/ecm/source_files/2018/05/05/rapmydinh-114006-050518-31.jpg",
    
    },
    {
      key:"4",
      text:"Beta Đan Phượng",
      text1: "4.2 km",
      uri:"https://files.betacorp.vn/files/ecm/2018/07/04/26814841-1983196721944128-7463239005301519863-n-110550-040718-26.jpg",
    
    },
    {
      key:"5",
      text:"Beta Bắc Giang",
      text1: "59.4 km",
      uri:"https://files.betacorp.vn/files/ecm/source_files/2018/05/05/rapbacgiang-115328-050518-51.jpg",
    
    },
    {
      key:"6",
      text:"Beta Thái Nguyên",
      text1: "60.9 km",
      uri:"https://files.betacorp.vn/files/ecm/2018/07/04/35359362-242694916502971-7052850785574453248-n-103924-040718-45.png",
    
    },
  ]
  }
]

export default function MovieTheater() {
    return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
            <View style = {{height: '10%', backgroundColor:'black', justifyContent: 'center', paddingLeft: 10}}>
                <Text style = {{fontSize: 20, fontWeight: 'bold', color:'white'}}>Rạp phim BETA</Text>
            </View>
            <View style={{height: '25%'}}>
                <View style={{height: '30%', justifyContent: 'center'}}>
                    <Text style={styles.text}>RẠP PHIM GẦN BẠN</Text>
                </View>
                <SectionList
                contentContainerStyle={{paddingHorizontal:3}}
                stickySectionHeadersEnabled={false}
                sections={SECTIONS}
                renderSectionHeader={({section})=>(
                    <>
                    {/* <Text style={styles.sectionHeader}>{section.title}</Text> */}
                    <FlatList 
                    data={section.data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=>{
                    return <ListItem item={item} />
                    }}
                    />
                    </>
                )}
                renderItem={({item,section})=>{
                    return null
                    return <ListItem item={item} />
                }}
                />
            </View>
            <View style={{height: '65%'}}> 
                <View style={{height: '12%', justifyContent: 'center'}}>
                    <Text style = {styles.text}>CHỌN RẠP THEO KHU VỰC</Text>
                </View>
                <ScrollView>
                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.topic}>
                        <View style={styles.address}>
                            <Text style={{fontWeight:'bold',fontSize:15, color:'grey'}}>Hà Nội</Text>
                            <AntDesign name="downcircleo" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topic}>
                        <View style={styles.address}>
                            <Text style={{fontWeight:'bold',fontSize:15, color:'grey'}}>TP. Hồ Chí Minh</Text>
                            <AntDesign name="downcircleo" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topic}>
                        <View style={styles.address}>
                            <Text style={{fontWeight:'bold',fontSize:15, color:'grey'}}>Bắc Giang</Text>
                            <AntDesign name="downcircleo" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topic}>
                        <View style={styles.address}>
                            <Text style={{fontWeight:'bold',fontSize:15, color:'grey'}}>Đồng Nai</Text>
                            <AntDesign name="downcircleo" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topic}>
                        <View style={styles.address}>
                            <Text style={{fontWeight:'bold',fontSize:15, color:'grey'}}>Khánh Hòa</Text>
                            <AntDesign name="downcircleo" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topic}>
                        <View style={styles.address}>
                            <Text style={{fontWeight:'bold',fontSize:15, color:'grey'}}>Thanh Hóa</Text>
                            <AntDesign name="downcircleo" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topic}>
                        <View style={styles.address}>
                            <Text style={{fontWeight:'bold',fontSize:15, color:'grey'}}>Bà Rịa - Vũng Tàu</Text>
                            <AntDesign name="downcircleo" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4'
    },

    text: {
        fontSize: 24, 
        color:'grey', 
        paddingLeft: 10
    },

    topic: {
      width: '90%',
      height:60,
      backgroundColor:'white',
      marginTop: 15,
      borderRadius:10,
      //alignItems:'center',
      justifyContent: 'center'
    },
    
    address: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },

    item: {
      margin:10,
      height: 115,
      width: 150,
      backgroundColor: '#fff',
      borderRadius: 5,
      justifyContent: 'center'
    },

    itemPhoto: {
      width:150,
      height:75,
      borderRadius:5,
    },

    itemText: {
        fontWeight: 'bold'
    },

    itemText1: {
        color: 'blue'
    }
});