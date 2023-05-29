import React from "react";
import {Dimensions, Text} from "react-native";
import { View } from "react-native";
import HomeMap from "../../components/HomeMap";
import CovidMessage  from "../../components/CovidMessage";
import HomeSearch  from "../../components/HomeSearch";
const Homescreen = (props) =>{
    return(
        <View>
        <View style={{height:Dimensions.get('window').height- 410}}>
            <HomeMap></HomeMap>
        </View>
            {/* {CovidMessage} */}

        <CovidMessage> </CovidMessage> 

            {/* {BottomMessage} */}

        <HomeSearch></HomeSearch>    

    </View>  
    )
};

export default Homescreen;