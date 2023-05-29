import React from "react";
import { Dimensions, useWindowDimensions, View } from "react-native";
import { Text } from "react-native";
import HomeMap from "../../components/HomeMap";
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";
import { useRoute } from "@react-navigation/native";
const SearchResults =(props) =>{
    const route = useRoute();

    console.log(route.params); 
    return(
        <View style ={{display:'flex', justifyContent:'space-between'}}>
            <View style={{height:Dimensions.get('window').height- 380}}>
            <HomeMap></HomeMap>
            </View>
            <UberTypes></UberTypes>
        </View>
    );
};

export default SearchResults;
