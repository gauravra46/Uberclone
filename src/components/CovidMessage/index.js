import React from "react";
import {Text} from "react-native";
import { View } from "react-native";
import styles from "./styles";

const CovidMessage= (props) =>{
    return(
        <View style= {styles.container} >
            <Text style={styles.title}>Travel only if neccesary</Text>
            <Text style={styles.text}>This is super odd, why does this work? There's a warning error saying "Font failed to load" but all the icons are there. Will this only works on simulator but completely failed on device</Text>
            <Text style={styles.learnMore}>Learn More</Text>
        </View> 

 
    )
};

export default CovidMessage;