import React from "react";
import {Text} from "react-native";
import { View } from "react-native";
import MapView from "react-native-maps";
import { Platform, StyleSheet } from 'react-native';
import { PROVIDER_GOOGLE , Marker } from 'react-native-maps';
import { Image , FlatList } from "react-native";
import cars from "../../asessts/data/cars";
import showsUserLocation from "react-native-maps"
const HomeMap = (props) =>{

  const getImage =(type)=>{
    if (type === 'UberX'){
        return require (`../../asessts/images/top-UberX.png`);
    }
    if (type === 'Comfort'){
        return require (`../../asessts/images/top-Comfort.png`);
    }
    {
        return require (`../../asessts/images/top-UberXL.png`);
    }
};
    return(
   
       <MapView
         style={{   height: '100%' , width:'100%' }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation={true}
         initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
         latitudeDelta: 0.0222,
         longitudeDelta: 0.0121}}
      >

        {cars.map((car)=> (
           <Marker
           key={car.id}
           coordinate={{ latitude : car.latitude , longitude : car.longitude  }}
    
           >
           <Image 
           source ={getImage(car.type )}
           style ={{width :60,
                    height:60,
                    resizeMode: "contain",
                    transform:[{
                      rotate:`${car.heading}deg`
                    }]
                  }}
           />
           </Marker>
        ))}
      
       
      </MapView>
      
    )
};

export default HomeMap;