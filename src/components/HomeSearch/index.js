import React from "react";
import {Text} from "react-native";
import { View } from "react-native";
import { Pressable } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const HomeSearch = (props) =>{
    const navigation =useNavigation();
    const goToSearch =() =>{
        navigation.navigate('DestinationSearch')
    }
    return(
        <View style={styles.HomeSearchContainer}>
             
            {/* { Input Box} */}
                <Pressable onPress={goToSearch} style={styles.inputBox}>
                    <Text style={styles.inputText}>Where to?</Text>
                        <View style={styles.timeContainer}>
                             <AntDesign name={"clockcircle"} size={16} color={"#535353"} ></AntDesign>
                             <Text>Now</Text>
                             <MaterialIcons name={"keyboard-arrow-down"} size={16}></MaterialIcons>
                        </View>
                </Pressable>

            {/* {Previous Destination} */}
                <View style={styles.row}>
                    <View style ={styles.iconContainer}>
                    <MaterialIcons name={"nightlife"} size={20} color={"#ffffff"} ></MaterialIcons>
                    </View>
                  

                    <Text style={styles.destination}>Spin nightclub</Text>
                </View>


            {/* { Home Destination} */}
            <View style={styles.row}>
                    <View style ={[styles.iconContainer , {backgroundColor:"#218cff"}]}>
                    <Entypo name={"home"} size={20} color={"#ffffff"} ></Entypo>
                    </View>
                    <Text style={styles.destination}>Home</Text>
                </View>

       </View>  
    )
};

export default HomeSearch;