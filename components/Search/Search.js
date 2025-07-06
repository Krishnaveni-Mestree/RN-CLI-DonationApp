import React, { useRef, useState } from "react";
import { TextInput, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'

import styles from "./style";
import { scaleFontSize } from "../../assets/styles/scaling";

const Search=(props)=>{
    const textInputRef=useRef(null);
    const [search,setSearch]=useState('')

    const handleFocus=()=>{
        textInputRef.current.focus();
    };

    const handleSearch=(searchValue)=>{
        setSearch(searchValue);
        props.onSearch(searchValue)
    };

    return (
        <Pressable 
            style={styles.searchInputContainer}
            onPress={handleFocus}
        >
            <FontAwesomeIcon 
                icon={faSearch} 
                color={"#25c0ff"}
                size={scaleFontSize(22)}
            />
            <TextInput 
                ref={textInputRef} 
                style={styles.searchInput}
                value={search}
                onChangeText={(val)=>handleSearch(val)}
            />
        </Pressable>
    );
};

Search.defaultProps={
    onSearch:()=>{}
}

Search.proptypes={
    onSearch:PropTypes.func,
}


export default Search;