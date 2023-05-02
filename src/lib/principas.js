import { StyleSheet } from "react-native";

export const principas = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
  },

  tela: {
    backgroundColor: "#F3ECE8",
    flex: 1,
  },

  containerboxs: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },

  barrapesquisa: {
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 10,
    width: 290,
    maxHeight: 40,
  },

  boxs: {
    backgroundColor: "#fff",
    width: 172,
    height: 220,
    padding: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 15,
    marginBottom: 18,
  },

  boxstext: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "500",
    color: "#34271F",
    paddingLeft: 5,
  },

  boxstext1: {
    marginTop: 2,
    fontSize: 15,
    fontWeight: "700",
    color: "gray",
    paddingLeft: 5,
  },

  boxstext2: {
    marginTop: 10,
    fontSize: 17,
    fontWeight: "500",
    color: "#A69387",
  },

  imgbox: {
    width: 100,
    height: 100,
    margin: 5,
  },

  imgbox1: {
    justifyContent: "center",
    alignItems: "center",
  },

  titulotext1: {
    fontSize: 20,
    padding: 10,
    fontWeight: "700",
    color: "#A69387",
  },
  circulos: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: "#E7D5CA",
    flexDirection: "column",
  },

  shadowProp: {
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circulosfora: {
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "center",
    flexDirection: "row",
    marginBottom: 40,
  },

  minitexto: {
    paddingTop: 10,
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
    color: "#A69387",
  },
  iconebotao: {
    width: 90,
    marginLeft: 7,
    marginTop: 6,
  },
  carrosa: {
    borderRadius: 30,
    marginBottom: 40,
    marginTop: 20,
    
  },
  carrosa2: {
    
    borderRadius: 30,
    marginLeft: 13,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 15,
  },
  image: {
    width: 370,
    height: 175,
    flex: 1,
  },
});
