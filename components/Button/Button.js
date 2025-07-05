import { Pressable,Text } from "react-native";
import PropTypes from 'prop-types';
import styles from "./style";

const Button=(props)=>{
    return(
        <Pressable 
            disabled={props.isDisabled}
            style={[styles.button, props.isDisabled && styles.disabled]}
            onPress={()=>props.onPress()}
        >
            <Text style={styles.title}>{props.title}</Text>
        </Pressable>
    );
};

Button.default={
    isDisabled:false,
    onPress:()=>{},
}

Button.propTypes={
    title:PropTypes.string.isRequired,
    isDisabled:PropTypes.bool,
    onPress:PropTypes.func
};

export default Button;