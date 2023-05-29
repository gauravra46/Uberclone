import React from "react";
import { Text } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
const PlaceRows = ({data}) => {
    return(
        <View style={styles.row}>
           <View  style={styles.iconContainerhome}>
           {data.description ==='Home' 
                ?<Entypo name='home' size={20} color={'white'} ></Entypo>
                :<Entypo name='location-pin' size={20} color={'white'}></Entypo>} 
                
           </View>
           <Text style={styles.locationText }>{data.description || data.vicinity}</Text>
        </View>
    )
}

export default PlaceRows; 