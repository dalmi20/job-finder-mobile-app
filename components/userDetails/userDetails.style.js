import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    userPic:{
        height:100,
        width:100,
        borderColor:COLORS.gray, 
        borderRadius:SIZES.small/1.25 ,
        marginVertical:20,
    },
    username:{
        color:COLORS.primary,
        fontFamily: "DMMedium",
        fontSize:SIZES.xLarge,
        marginBottom:15
    },
    jobContainer:{
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        flexDirection:'row',
        padding:5
    },
    jobName:{
        fontFamily:"DMBold",
        fontSize:SIZES.medium-1
    },
    location:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'row'
    },
    locationLogo:{
        width: 14, 
        height: 14, 
        tintColor: COLORS.gray,

    },
    locationName:{
        fontFamily: "DMMedium",
        fontSize:SIZES.small,
        color:COLORS.gray
    }

})
export default styles