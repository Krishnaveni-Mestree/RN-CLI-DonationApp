import React from "react";
import { View, Image } from "react-native";
import PropTypes from 'prop-types'
import styles from "./style";

import Badge from "../Badge/Badge";
import Header from "../Header/Header";

const SingleDonationItem=(props)=>{
    return(
        <View>
            <View>
                <View style={styles.badge}>
                    <Badge title={props.badgeTitle}/>
                </View>
                <Image 
                    source={{uri:props.uri}}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
            <View style={styles.donationInfo}>
                <Header 
                    title={props.donationTitle} 
                    type={3} 
                    color={'#0a043c'}
                />
                <View style={styles.price}>
                    <Header 
                        title={'$'+ props.price.toFixed(2)} 
                        type={3} 
                        color={'#156cf7'}
                    />
                </View>
            </View>
            
        </View>
    );
};

SingleDonationItem.proptypes={
    uri:PropTypes.string.isRequired,
    badgeTitle:PropTypes.string.isRequired,
    donationTitle:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
}
export default SingleDonationItem;