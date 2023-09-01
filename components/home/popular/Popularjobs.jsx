import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,//like a spinner 
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  const router =useRouter()
  const {data,isLoading,error} =useFetch("search",{
    query:'Popular jobs',
    num_pages:3
  })
  console.log(data)

  return (
  <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.headerTitle}>Popular jobs</Text>
       <TouchableOpacity onPress={()=>  router.push(`/allPopularJobs/pop`)}>
        <Text style={styles.headerBtn}>
          Show all 
        </Text>
       </TouchableOpacity>


     </View>
     <View style={styles.cardsContainer} >
        {
          isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ):error ? (
            <Text>SomeThing went wrong</Text>
          ):(
            <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
                
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
               
           
          )
        }

     </View>
  </View>
  );
};

export default Popularjobs;
