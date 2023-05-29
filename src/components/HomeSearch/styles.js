import { StyleSheet } from "react-native";


const styles =StyleSheet.create({

    HomeSearchContainer :{
        backgroundColor:"#ffffff",
    },
            // {/* { Input Box} */}
    inputBox : {
        backgroundColor: "#e7e7e7",
        padding:10,
        margin:10,
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,

    },
    inputText:{
        fontSize:20,
        fontWeight:'600',
        color:"#434343"

    },
    timeContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:100,
        padding:10,
        borderRadius: 50,
        backgroundColor:"#fff",


    },

                // {/* {Previous Destination} */}

    row:{
        flexDirection:"row",
        padding:20,
        alignItems:"center",
        borderBottomWidth:1,
        borderColor:"#dbdbdb",
    },
    
    iconContainer:{
        backgroundColor:"#b3b3b3",
        padding:10,
        borderRadius:25,
    },

    destination:{
        marginLeft:10,
        fontWeight:'500',
        fontSize:16,

    },
});
export default styles;