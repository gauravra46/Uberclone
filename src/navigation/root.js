import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "../screens/Homescreen";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
const Stack = createStackNavigator();

const RootNavigator =(props) =>{
    return(

             <NavigationContainer>
               <Stack.Navigator
               screenOptions={{
                headerShown: false,
               }
               }
          
               >
                    <Stack.Screen name={"Home"} component={Homescreen} ></Stack.Screen>
                    <Stack.Screen name={"DestinationSearch"} component={DestinationSearch} ></Stack.Screen>
                    <Stack.Screen name={"SearchResults"} component={SearchResults} ></Stack.Screen>
               </Stack.Navigator>

            </NavigationContainer>

    );
};

export default  RootNavigator;