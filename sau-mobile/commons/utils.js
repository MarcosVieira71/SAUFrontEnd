import React, { Component } from 'react'
import { Image } from 'react-native'

const HeaderImage = () => (
    <Image source={ require('../assets/adaptive-iconsau.png')}
        style = {{ width: 50, 
        height: 50, 
        }}
    />
)


export {
    HeaderImage
  }
