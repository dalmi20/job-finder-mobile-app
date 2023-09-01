import react from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,//like a spinner 
} from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/nearby/NearbyJobCard"
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const router =useRouter()
  const {data,isLoading,error} =useFetch("search",{
    query:'Nearby jobs',
    num_pages:1
  })
  console.log(data)

  return (
  <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.headerTitle}>Nearby jobs</Text>
     </View>
     <View style={styles.cardsContainer} >
        {
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ):error ? (
            <Text>SomeThing went wrong</Text>
          ):(
          data?.map((job) =>(
           <NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`}
           handleNavigate={()=> router.push(`/job-details/${job?.job_id}`)}
           /> 
          ))
               
           
          )
        }

     </View>
  </View>
  );
};

export default Nearbyjobs;
