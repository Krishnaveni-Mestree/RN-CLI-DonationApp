import { useRef, useState } from "react";
import { Pressable,Text } from "react-native";
import PropTypes from 'prop-types';
import styles from "./style";
import { horizontalScale } from "../../assets/styles/scaling";


const Tab=(props)=>{
    const [textWidth,setTextWidth]=useState(0)
    const textRef=useRef(null);
    const paddingHorizontal=33;
    const tabWidth={
        width:horizontalScale(paddingHorizontal*2+textWidth)
    }
    return(
        <Pressable 
            disabled={props.isInactive}
            style={[styles.tab, props.isInactive && styles.inactiveTab,tabWidth]}
            onPress={()=>props.onPress()}
        >
            <Text 
                onTextLayout={(e)=>{
                    setTextWidth(e.nativeEvent.lines[0].width)
                }}
                ref={textRef}
                style={[styles.title, props.isInactive && styles.inactiveTitle]}

            >{props.title}</Text>
        </Pressable>
    );
};

Tab.default={
    isInactive:false,
    onPress:()=>{},
}

Tab.propTypes={
    title:PropTypes.string.isRequired,
    isInactive:PropTypes.bool,
    onPress:PropTypes.func
};

export default Tab;