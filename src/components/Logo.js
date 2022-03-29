import React from 'react'
import { Image } from 'react-native'

export default function Logo() {
  return <Image source={require('../../assets/logo.png')} style={{
    width: 260,
    height: 150,
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center"
  }} />
}