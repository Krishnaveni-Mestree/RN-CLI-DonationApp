import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const styles=StyleSheet.create({
    tab:{
        backgroundColor:'#2979f2',
        height:verticalScale(50),
        justifyContent:'center',
        borderRadius:horizontalScale(50)
    },
    inactiveTab:{
        backgroundColor:'#f3f5f9'
    },
    title:{
        fontFamily:getFontFamily('Inter','500'),
        fontSize:scaleFontSize(14),
        lineHeight:scaleFontSize(17),
        color:'#ffffff',
        textAlign:'center'
    },
    inactiveTitle:{
        color:'#79869f'
    },
});

export default styles;