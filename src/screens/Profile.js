import React, { useState} from 'react';
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import { Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function UploadImage() {
  const [image] = useState(null);
  const addImage=()=>{};
 
  return (
    <View style={imageUploaderStyles.container}>
      {image  &&<Image source={{ uri: image }} style={{ width: 100, height: 100, justifyContent: "center" }} />}
 
      <View style={imageUploaderStyles.uploadBtnContainer}>
        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
          <Text>{image ? 'Edit' : 'Upload'} Image</Text>
          <AntDesign name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
 }
 
 const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:200,
        width:200,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
        justifyContent: "center"

    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
 })





export default function Profile() {
  return (
    <>
      <UploadImage/>
      <Header>Personal Information</Header>

      <TextInput
        label="Full Name"
        returnKeyType="next"
        autoCapitalize="none"
      />

      <TextInput
        label="Birthday"
        returnKeyType="next"
        autoCapitalize="none"
      />

      <TextInput
        label="Street Address"
        returnKeyType="next"
        autoCapitalize="none"
      />

      <TextInput
        label="City"
        returnKeyType="next"
        autoCapitalize="none"
      />

      <TextInput
        label="State"
        returnKeyType="next"
        autoCapitalize="none"
      />

      <TextInput
        label="Zip Code"
        returnKeyType="next"
        autoCapitalize="none"
      />
    
    </>
  );
}
