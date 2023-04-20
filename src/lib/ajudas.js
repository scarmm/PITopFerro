//tela de ajuda bibop
import { StyleSheet } from "react-native";

export const ajudas = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#F3ECE8",
  },
  containerCentral: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
    marginTop: 150,
  },
  containerAjudaConta: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
    marginTop: 150,
  },
  containerSugestoes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
    marginTop: 150,
  },
  textoajuda1: {
    padding: 10,
  },
  img: {
    width: 125,
    height: 220,
  },
  imgajudaconta: {
    width: 160,
    height: 200,
  },
  imgsugestao: {
    width: 150,
    height: 150,
  },
  textoCentral: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 30,
  },
  textoCentral2: {
    color: "#707070",
    // opacity: "50%",
    maxWidth: 270,
  },
  textoajudaconta: {
    fontSize: 23,
    fontWeight: "bold",
    padding: 30,
  },
  textoajudaconta2: {
    textDecorationLine: "underline",
    padding: 10,
    fontSize: 17,
  },
});
