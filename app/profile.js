import { View,Text,ScrollView,SafeAreaView,Image,TouchableOpacity } from "react-native";
import { Stack,router,useRouter } from "expo-router";
import {COLORS,icons,images,SIZES,SHADOWS,FONT} from "../constants"
import { ScreenHeaderBtn } from "../components";
import { useState } from "react";
import { JobTabs,JobAbout } from "../components";
import SkillCard from "../components/common/cards/skillCard/skillCard";
import UserDetails from "../components/userDetails/userDetails";
const ProfileScreen = ()=>{
   const tabs=["About","Skills","Experiences"]
   const [activeTab,setActiveTab]=useState(tabs[0])
   const info="Dedicated Full Stack Developer with over 2 years of experience designing and developing robust web applications. Proficient in front-end and back-end technologies, with expertise in JavaScript, React.js, Node.js, MongoDB, and MySQL.Skilled in building responsive and user-friendly interfaces while ensuring efficient databasemanagement and optimization. Strong problem-solving abilities and a keen interest in creating innovative and scalable solutions. Excellent collaboration and communication skills, capable of working effectively in cross-functional teams."
   const skills=["react","html5","css3","node","js","java","git-alt","python"]
   const experiences=""
   const displayTabContent =() =>{
      switch (activeTab) {
        case "Skills":
         return(
            <SkillCard skills={skills}/>
         )
       
          break;
        case "About":
          return (
            <JobAbout title="Description :" info={info ?? "No data provided"} />
          );
          
          break;
        case "Experiences":
         return(
         <JobAbout title="Experiences :" info={"No data provided"} />
         )
          break;
        default:
          break;
      }
    }
   
    return(
       <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
          <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite},
         headerShadowVisible:false,
         headerLeft:()=>(
            <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={()=>router.back()}/>
         ),
         headerRight:()=>(
            <ScreenHeaderBtn iconUrl={icons.envoyer} dimension="60%" handlePress={{}}/>
         ),
         headerTitle:""}}
    />
        <UserDetails/>
        <View style={{padding:SIZES.medium+2,paddingBottom:100}}>
        <JobTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}/>
        {displayTabContent()}
        </View>
       </SafeAreaView>
    )
}
export default ProfileScreen