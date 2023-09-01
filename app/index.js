import { View,Text,ScrollView,SafeAreaView } from "react-native";
import { Stack,router,useRouter } from "expo-router";
import {COLORS,icons,images,SIZES} from "../constants"
import { useState } from "react";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn"
import Profile from "../components/common/header/profile/profile";
import Welcome from "../components/home/welcome/Welcome";
import Popularjobs from "../components/home/popular/Popularjobs";
import Nearbyjobs from "../components/home/nearby/Nearbyjobs";
const Home = ()=>{
   const [searchTerm, setSearchTerm] = useState('');
       
    return(
       <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
          <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite},
         headerShadowVisible:false,
         headerLeft:()=>(
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
         ),
         headerRight:()=>(
            <Profile iconUrl={images.profile} dimension="100%" />
         ),
    headerTitle:""}}
    />
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex:1,padding:SIZES.medium}}>
             <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={()=>{
               if(searchTerm){
                  router.push(`/search/${searchTerm}`)
               }
             }}/>
             <Popularjobs/>
             <Nearbyjobs/>
          </View>
      </ScrollView> 
       </SafeAreaView>
    )
}
export default Home