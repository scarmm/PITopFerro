import { StyleSheet } from "react-native";

export const principas = StyleSheet.create({
tela:{
    flex:1,
    backgroundColor:"#F3ECE8"
},
barrapesquisa:{
    borderRadius:"20px",
    marginRight:"30px",
    width:"290px",
    height:"35px",

},
circulos:{
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor:"#E7D5CA",
    alignItems:"center",
    
},
circulosfora:{
    justifyContent:"space-evenly",
    flexDirection:"row",
    flex:1,
    alignItems:"center"
},
shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
iconebotao:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    alignContent:"center"
}
})