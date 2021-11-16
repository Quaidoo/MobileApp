
import React from 'react';
import {  StyleSheet, Text, View ,  Image, SafeAreaView,Dimensions,TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import furnitures from '../../consts/furnitures';
const {width} = Dimensions.get('screen');


const Cartlist = ({navigation}) => {

  const PopularItemCard = ({furniture}) => {
    return (
      <View style={styles.boxshadow}>
      <View style={styles.popularItemCard}>
        
        <Image
          source={furniture.image}
          style={{
            width: 100,
            height: '100%',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginRight: 10,
          }}
        />
        <View style={{paddingVertical: 15, justifyContent: 'center'}}>
          <Text style={styles.cardName}>{furniture.name}</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.price}>{furniture.price}</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <Icon name="star" color={COLORS.yellow} size={18} />
              <Text style={styles.rating}>4.3</Text>
            </View>
          </View>
          
          
        </View>
      </View>
      </View>
    );
  };

  return (
    // GOOD
  


  <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
    <View style={styles.header}>
        <View style={styles.headerBtn}>
          <Icon name="chevron-left" size={25} onPress={navigation.goBack} style={{color:COLORS.white}} />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Cart</Text>
        <View style={styles.headerBtn}>
          <Icon name="dots-vertical" size={25} color={COLORS.primary} style={{color:COLORS.white}}  />
        </View>
      </View>


    <FlatList
         Vertical
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 20}}
          data={furnitures}
          renderItem={({item}) => <PopularItemCard furniture={item} />}
        />


            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize:14, fontWeight: 'bold',padding:10,}}>
                Total Price
              </Text>
              <Text style={{fontSize: 14, fontWeight: 'bold',padding:10,}}>$50</Text>
            </View>
            <TouchableOpacity style={styles.buttonMain}  onPress={() => navigation.replace('Checkout')}  >
            <Text  style={{color:"white", fontSize:18, fontWeight: 'bold', textAlign:'center'}}>Checkout</Text> 
            
            </TouchableOpacity>
    </SafeAreaView>
    
  );
}
  
const styles= StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonMain:{
  
    height:55, 
    justifyContent:'center',
    borderRadius:15, 
    backgroundColor:COLORS.primary, 
    alignSelf:"center", 
    textAlign: "center" ,
    width:"80%",
    marginTop:15,
    
  },  


  
  

  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.white,
    position: 'absolute',
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardName: {
    marginTop: 0,
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: 'bold',
  },

  price: {fontWeight: 'bold', color: COLORS.primary, fontSize: 13},
  rating: {
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: 12,
  },

  

 

  popularItemCard: {
    height: 100,
    width: width - 40,
    backgroundColor: COLORS.white,
    elevation: 10,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },    
  
  boxshadow:{
    
    marginTop:10,
    marginBottom:5,
    borderRadius:15, 
    shadowColor: '#cccccc',
      shadowOpacity: 0.3,
      shadowRadius: 10,
      
      shadowOffset: {
          width: 0,            
          height: 5,           
      },
      
    
  },
 

},

  
  
);

  export default Cartlist;
  