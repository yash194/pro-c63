import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App   () {


  return (
    <View style={styles.container}>
      <Text  style={styles.text} >DICTIONARY</Text>
      <StatusBar style="auto" />

     <TextInput style={{marginBottom:200,marginRight:100,borderWidth:5,alignItems:"center",textAlign:"center",width:200}}
     placeholder="search word"
     
     
     />

<TouchableOpacity style={styles.button}  onPress={()=>{
 <Text style={{fontSize:80}} >
   no
   </Text>
}}  >
  <Text  style={{fontSize:20}}  >search</Text>
 
</TouchableOpacity>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:500,height:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    marginBottom:420,
    fontSize:65,backgroundColor:"red",
    alignItems:"center",textAlign:"center",marginRight:90

  },

  button:{
    width:100,height:40,backgroundColor:"yellow",marginBottom:10,marginRight:100, alignItems: 'center',
    justifyContent: 'center',
    
  }
});
