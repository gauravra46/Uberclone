import { StyleSheet } from "react-native";

const styles =StyleSheet.create({
  container:{
    flexDirection: "row",
    borderTopLeftRadius: 10,
    alignItems:"center", 
    color:"red",
    padding: 13,
  },

  image:{
    height:70,
    width:80,
    resizeMode:'contain',

  },

  middleContainer:{
    flex:1,
    marginHorizontal:10,

  },

  type:{
    fontWeight:'bold',
    fontSize:18,
    marginBottom:5,
  },

  time:{
    color:"#5d5d5d",
  },

  rightContainer:{
        justifyContent:"flex-end",
        flexDirection:"row",
  },

  price:{
    fontWeight:'bold',
    fontSize:18,
    marginLeft:5,
  },
});

export default styles; 