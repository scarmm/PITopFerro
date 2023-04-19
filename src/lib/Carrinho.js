import { StyleSheet } from "react-native";
export const Carrinho = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
  },

  containerbotao: {
    padding: 30
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
    padding: 20,
  },

  imagem: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 15,
  },

  imagempc: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },

  container2: {
    width: 200,
    marginLeft: 20,
  },

  texto1: {
    fontSize: 17,
    fontWeight: "500",
    color: "#002710",
  },

  texto2: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: "500",
    color: "#30353B",
  },

  texto3: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "600",
    color: "gray",
  },

  texto: {
    fontSize: 18,
    fontWeight: "600",
    paddingTop: 20
  }

});
