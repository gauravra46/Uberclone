import React, { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native";
import { useState } from "react";
import { GooglePlaceData } from "react-native-google-places-autocomplete";
import { GooglePlaceDetail } from "react-native-google-places-autocomplete";
import { GooglePlacesAutocomplete  } from "react-native-google-places-autocomplete";
import PlaceRows from "./PlaceRows";
import separator from "react-native";
import { useNavigation } from "@react-navigation/native";

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };


const DestinationSearch = (props) =>{

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);
  

    const navigation = useNavigation();

    const checkNavigation = () => {
        if (originPlace && destinationPlace) {
      
          navigation.navigate('SearchResults', {
            originPlace,
            destinationPlace,
          })
        }
      }
    
      useEffect(() => {
        checkNavigation();
      }, [originPlace, destinationPlace]);
    
    return(
        <SafeAreaView style={styles.Wcontainer}>
        <View style = {styles.container}>

            <GooglePlacesAutocomplete
            placeholder="from?"
            onPress={(data, details = null) => {
                setOriginPlace({data, details});
              }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            currentLocation={true}
            currentLocationLabel='Current location'
            styles={{
                textInput: styles.TextInput,
                container:styles.autocompleteContainer,
                listView: styles.listView,
                separator: styles.separator,
            }}
            fetchDetails
            query ={{
                key: 'AIzaSyBCrnue7K5FmV3Ubft6_wSU4FW7jBjM6qg',
                language:'en',
            }}
            renderRow = {(data) => <PlaceRows data={data}></PlaceRows>}
            renderDescription={(data) => data.description || data.vicinity}
            predefinedPlaces={[homePlace, workPlace]}
            >
            

            </GooglePlacesAutocomplete>
            

            <GooglePlacesAutocomplete
            placeholder="Where to?"
            onPress={(data , details = null) => {
                setDestinationPlace( {value:{data,details}}, checkNavigation);
                console.log(data, details);

            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            styles={{
                textInput: styles.TextInput,
                container:{...styles.autocompleteContainer,
                    top:55,
                },
               separator: styles.separator,
            }}
            fetchDetails
            query ={{
                key: 'AIzaSyBCrnue7K5FmV3Ubft6_wSU4FW7jBjM6qg',
                language:'en',
            }}
            renderRow = {(data ) => <PlaceRows data={data}></PlaceRows>}
            >

            </GooglePlacesAutocomplete>
            <View>

                {/* {Circle near Origin input} */}
                    <View style={styles.circle}></View>
                {/* {Line between Dots} */}
                    <View style={styles.line}></View>
                {/* {square ear Destination } */}
                    <View style={styles.square}></View>
            </View>
        </View>
        </SafeAreaView>
    );
};

export default DestinationSearch;

