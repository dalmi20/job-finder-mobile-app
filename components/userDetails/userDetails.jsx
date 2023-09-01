import React from 'react'
import { View,Text,Image } from 'react-native'
import { images,icons } from '../../constants'
import styles from './userDetails.style'
function UserDetails() {
  return (
    <View style={styles.container}>
    <Image  source={images.profile} style={styles.userPic} />
    <Text style={styles.username}>Kessaissia Ferdaous</Text>
        <View style={styles.jobContainer}>
           <Text style={styles.jobName}>FullStack Developer |</Text>
           <View style={styles.location}>
              <Image source={icons.location}  resizeMode="contain" style={styles.locationLogo}/>
               <Text style={styles.locationName}>Algeria</Text></View>
        </View>
        
</View>
  )
}

export default UserDetails
