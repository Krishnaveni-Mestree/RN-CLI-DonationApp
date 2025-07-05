import { useRef, useState } from "react";
import { View,Text } from "react-native";
import PropTypes from 'prop-types';
import styles from "./style";
import { horizontalScale } from "../../assets/styles/scaling";


const Badge=(props)=>{
    const [textWidth,setTextWidth]=useState(0)
    const textRef=useRef(null);
    const paddingHorizontal=10;
    const tabWidth={
        width:horizontalScale(paddingHorizontal*2+textWidth)
    }
    return(
        <View 
            style={[styles.badge,tabWidth]}
            onPress={()=>props.onPress()}
        >
            <Text 
                onTextLayout={(e)=>{
                    setTextWidth(e.nativeEvent.lines[0].width)
                }}
                ref={textRef}
                style={[styles.title]}

            >{props.title}</Text>
        </View>
    );
};

Badge.default={
    isInactive:false,
}

Badge.propTypes={
    title:PropTypes.string.isRequired,
};

export default Badge;