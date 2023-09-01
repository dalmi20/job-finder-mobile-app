import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./skillCard.style";
import { checkImageURL } from "../../../../utils";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons';
import { SIZES } from "../../../../constants";

const SkillCard = ({ skills }) => {
  return (
        <View style={styles.container}>
        <FlatList
                data={skills}
                renderItem={({ item }) => (
                <View style={styles.iconContainer}>
                  <FontAwesome5 name={item} size={24} color="black" />
                </View>
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                numColumns={5}
                
            />
    </View>
   
  );
};

export default SkillCard;
