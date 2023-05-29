import React from "react";
import {Text} from "react-native";
import { View } from "react-native";
import MapView from "react-native-maps";
import { Platform, StyleSheet } from 'react-native';
import { PROVIDER_GOOGLE , Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
const RouteMap = (props) =>{
        const origin = {
            latitude:28.450627,
            longitude:-16.263045,

        };
        const destination = {
            latitude:28.450127,
            longitude:-16.269045,

        };
        const GOOGLE_MAPS_APIKEY ="AIzaSyBCrnue7K5FmV3Ubft6_wSU4FW7jBjM6qg";
   
    return(
   
       <MapView
            style={{  position: 'absolute', height: '100%' , width:'100%' }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={{
            latitude: 28.450627,
            longitude: -16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121}}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="black"
            />
                   <Marker

                    coordinate={origin}
                    title={'origin'}
                    />

                    <Marker
                    coordinate={destination}
                    title={'destination'}
                    />
      
       
        </MapView>
      
    )
};

export default RouteMap;