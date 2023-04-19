import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
    padding:20,
  },

  container1: {
    flexDirection: "row",
    padding: 20,
  },

  imagempc: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },

  imagem: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
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

  botoes: {
    backgroundColor: "#34271F",
    width: 160,
    height: 40,
    borderRadius: 40,
    margin: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    justifyContent: "center",
  },

  todosbotoes: {
    flexDirection: "row",
  },

  boxs: {
    position: "relative",
    backgroundColor: "#fff",
    width: 170,
    height: 200,
    padding: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 15,
    marginTop:20,
    alignContent: "space-around",
  },

  imgbox1: {
    justifyContent: "center",
    alignItems: "center",
  },

  containerprodutos: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-between",
  },

  boxstext: {
    fontSize: 14,
    marginTop: 20,
    fontWeight: "500",
    color: "#002710",
  },

  boxstext1: {
    marginTop: 2,
    fontSize: 8,
  },

  boxstext2: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "500",
    color: "gray",
  },

  imgbox: {
    width: 100,
    height: 100,
  },

  imgbox1: {
    justifyContent: "center",
    alignItems: "center",
  },

  textotitulo: {
    fontSize: 18,
    fontWeight: "600",
    marginTop:20
  },
});
