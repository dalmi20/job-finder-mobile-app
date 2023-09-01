import { Image, TouchableOpacity,Text } from "react-native";

import styles from "./profile.style";
import { useRouter } from "expo-router";

const Profile = ({ iconUrl, dimension }) => {
    const router=useRouter()
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={()=>router.push('/profile')}>
    <Image
      source={iconUrl}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
    />
  </TouchableOpacity>
  );
};

export default Profile;
