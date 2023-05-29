import React from "react";
import { Pressable, View } from "react-native";
import { Text } from "react-native";
import UberTypesRow from "../UberTypesRow";
import types from "../../asessts/data/types";
import styles from "./styles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const UberTypes =(props) =>{
    const confirm =() =>{
        console.warn({data:"confirm"});
    };
    return(
        <View>
         {types.map(type =>{
             return <UberTypesRow
                 type={type}>
                 key={type.id}   
             </UberTypesRow>;
         })}

         <Pressable onPress={confirm} style={{
            
            backgroundColor:"black",
            padding:12,
            margin:10,
            alignItems:"center", 
            borderRadius:5,
         }}>
         
            <Text style={{color:'white' , fontWeight:'bold'}}>
                 Confirm Uber
            </Text>
         </Pressable>
            
        </View>
    );
};

export default UberTypes;
