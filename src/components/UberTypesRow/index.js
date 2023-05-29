import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from "./styles";
// import { googleMapIsInstalled } from "react-native-maps/lib/decorateMapComponent";


const UberTypesRow =(props) =>{

    const {type} = props;


        const getImage =()=>{
            if (type.type === 'UberX'){
                return require (`../../asessts/images/UberX.jpeg`);
            }
            if (type.type === 'Comfort'){
                return require (`../../asessts/images/Comfort.jpeg`);
            }
            {
                return require (`../../asessts/images/UberXL.jpeg`);
            }
        }
        
    return(
        <View style={styles.container}>
            {/* {ImageContainer} */}
            <Image
            style={styles.image}
            source={getImage()}>
            </Image>

            <View style={styles.middleContainer}> 
                <Text style={styles.type}>
                    {type.type}{'  '}
                    <Fontisto name="person" size={16}> 3</Fontisto>
                </Text>
                <Text style={styles.time}>
                    8:30 Drop Off
                </Text>
            </View>

            <View style={styles.rightContainer }>
                <Ionicons name="pricetag" size={20} color="#42f746"></Ionicons>
                <Text style={styles.price}> est. ${type.price} </Text>
            </View>
           
        </View>
    );
};

export default UberTypesRow;
