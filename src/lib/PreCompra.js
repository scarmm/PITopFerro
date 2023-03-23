import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
  },

  container1: {
    flexDirection: "row",
    padding: "20px",
  },

  imagempc: {
    width: "150px",
    height: "150px",
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

  botoes: {
    backgroundColor: "#34271F",
    width: 160,
    height: 40,
    borderRadius: 40,
    margin: "20px",
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
    width: "170px",
    height: "200px",
    padding: "10px",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderRadius: 15,
    marginTop:"20px",
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
    fontSize: "14px",
    marginTop: "20px",
    fontWeight: "500",
    color: "#002710",
  },

  boxstext1: {
    marginTop: "2px",
    fontSize: "8px",
  },

  boxstext2: {
    marginTop: "10px",
    fontSize: "13px",
    fontWeight: "500",
    color: "gray",
  },

  imgbox: {
    width: "100px",
    height: "100px",
  },

  imgbox1: {
    justifyContent: "center",
    alignItems: "center",
  },

  textotitulo: {
    fontSize: "18px",
    fontWeight: "600",
  },
});
