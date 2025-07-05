import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const styles=StyleSheet.create({
    badge:{
        backgroundColor:'#145855',
        height:verticalScale(22),
        justifyContent:'center',
        borderRadius:horizontalScale(50)
    },
    title:{
        fontFamily:getFontFamily('Inter','500'),
        fontSize:scaleFontSize(14),
        lineHeight:scaleFontSize(17),
        color:'#ffffff',
        textAlign:'center'
    },
});

export default styles;