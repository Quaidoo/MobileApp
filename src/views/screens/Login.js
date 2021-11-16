import React from 'react';
import { Image, StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import COLORS from '../../consts/colors';


function Login({navigation}) {
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'white' }}>

      <Image source={require('C:/Users/Ebenezer Quaidoo/Documents/MobileApp/src/assets/log.png')} style={{ height:200, width:200, borderRadius:100}} />

       
        
  
        <Text style={styles.mainStyled}> Hi, there ! </Text>
  
        <Text style={{color:'#122636', marginBottom:50, }}> Welcome back! we missed you </Text>
          <TouchableOpacity style={styles.buttonCatnew} >
          <TextInput style={{color:'#122636', fontSize:15,paddingLeft:10, }} placeholder=' Email'/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCatnew} >
          <TextInput secureTextEntry={true} keyboardType="default" style={{color:'#122636', fontSize:15,paddingLeft:10, }} placeholder=' Password'/>
          </TouchableOpacity>

            <TouchableOpacity style={styles.buttonMain}  onPress={() => navigation.replace('HomeScreen')}  >
            <Text  style={{color:"white", fontSize:18, fontWeight: 'bold', textAlign:'center'}}>Login</Text> 
            
            </TouchableOpacity>
            <Text style={{color:'#122636', marginTop:20, }}> Dont have an account? <Text style={{fontWeight:'bold'}}  onPress={() => navigation.push('Signup')}> Signup </Text>  </Text>
  
  
  
      </View>
    );
  }

  const styles = StyleSheet.create({
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
      buttonCatnew:{
        width:330,
        height:55,
        justifyContent:'center',
        borderRadius:15, 
        backgroundColor:"#fafafa",
        textAlign: "center" ,
        marginRight:10,
        marginLeft:10,
        marginTop:20,
      },

      mainStyle2:{
        height: 50, 
        width: "80%", 
        borderBottomWidth:1, 
        marginBottom:"5%", 
        fontSize: 20,
        },

      mainStyled:{
        height: 50,
        width: "80%",
        marginTop:"2%" , 
        textAlign:"center",
        fontSize: 40, 
        fontWeight: 'bold', color:"#262626",
        },
        roundShape:{
          alignSelf:'center',
          marginBottom:20,
          borderRadius:150,
          backgroundColor:'#4dd2ff',
          width:170,
          height:170,
          
        },
    
        roundShape:{
          alignSelf:'center',
          marginBottom:20,
          borderRadius:150,
          backgroundColor:'#4dd2ff',
          width:170,
          height:170,
          
        },
    
        roundShape1:{
          alignSelf:'center',
          borderRadius:150,
          backgroundColor:'#99e6ff',
          width:120,
          height:120,
          marginTop:25,
        },
    
        roundShape2:{
          alignSelf:'center',
          borderRadius:150,
          backgroundColor:'#d9d9d9',
          width:70,
          height:70,
          marginTop:25,
        },

  });
  

  export default Login;