import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const styles=StyleSheet.create({
    button:{
        backgroundColor:'#2979f2',
        height:verticalScale(55),
        justifyContent:'center',
        borderRadius:horizontalScale(50)
    },
    disabled:{
        opacity:0.5,
    },
    title:{
        fontFamily:getFontFamily('Inter','500'),
        fontSize:scaleFontSize(16),
        lineHeight:scaleFontSize(19),
        color:'#ffffff',
        textAlign:'center'
    }
});

export default styles;