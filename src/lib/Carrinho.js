import { StyleSheet } from "react-native";
export const Carrinho = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
  },

  containerbotao:{
    padding:"30px"
  },

  botao2: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    backgroundColor: "#2C2019",
    width: 300,
    height: 45,

},

container1: {
  flexDirection: "row",
  padding: "20px",
},

imagem: {
  shadowColor: "#171717",
  shadowOffset: { width: -2, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  borderRadius: 15,
},

imagempc: {
  width: "150px",
  height: "150px",
  borderRadius: 15,
},

container2: {
  width: "200px",
  marginLeft: "20px",
},

texto1: {
  fontSize: "17px",
  fontWeight: "500",
  color: "#002710",
},

texto2: {
  fontSize: "12px",
  marginTop: "10px",
  fontWeight: "500",
  color: "#30353B",
},

texto3: {
  marginTop: "10px",
  fontSize: "17px",
  fontWeight: "600",
  color: "gray",
},

});
