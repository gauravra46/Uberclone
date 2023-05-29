import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
    Wcontainer:{
        backgroundColor:"#ffffff",
    },
    container:{
        padding:10,
        backgroundColor:"#ffffff",
        height:'100%',
        
    },
    TextInput:{
        padding:10,
        backgroundColor:"#eee",
        marginVertical: 5,
        borderRadius:5, 
        marginLeft:20,
    },  
    separator:{
        backgroundColor:"#efefef",
        height:1,
    },
    listView:{
        position: 'absolute',
        top:105 ,
   },

    row:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10,
    },
    iconContainerhome:{
        backgroundColor:"#4c76e2",
        padding:5, 
        borderRadius:50, 
        marginRight:15,
    },
   

    locationText:{

    },
    autocompleteContainer:{
            position:'absolute', 
            top:0,
            left:10,
            right:10,
        },

    circle:{
        width:6,
        height:6,
        backgroundColor: "#4c76e2",
        position:"absolute",
        top:9,
        left:5,
        borderRadius:5,
    },
    line:{
        width:2,
        height:50,
        backgroundColor:"#c4c4c4",
        position:"absolute",
        top:15,
        left:7,
 
    },
    square:{
        width:6,
        height:6,
        backgroundColor: 'black',
        position:"absolute",
        top:65,
        left:5,
        
    },    
    


});
export default styles;