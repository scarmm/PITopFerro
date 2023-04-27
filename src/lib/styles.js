import { StyleSheet } from "react-native";

const borderRadius = 40;
const inputPaddingX = 20;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3ECE8",
    padding: 30,
  },
  input: {
    height: 55,
    width: 320,
    margin: 15,
    paddingLeft: inputPaddingX,
    paddingRight: inputPaddingX,
    borderRadius: borderRadius,
    borderTopEndRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    backgroundColor: "white",
    color: "#BAC4BD",
    overflow: "hidden",
    fontSize: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  texto: {
    justifyContent: "flex-end",
    display: "flex",
    paddingLeft: 170,
    margin: 5,
  },

  texto1: {
    color: "#707070",
    fontWeight: "200",
    fontSize: 15,
  },

  img: {
    width: 220,
    height: 200,
  },

  img1: {
    width: 250,
    height: 250,
    margin: 40,
  },
  imgespecifico: {
    width: 250,
    height: 250,
  },

  botao: {
    backgroundColor: "#FFAFCC",
    margin: 15,
  },

  botao1: {
    justifyContent: "center",
    display: "flex",
  },

  btt: {
    backgroundColor: "#34271F",
    margin: 20,
    width: 160,
    height: 50,
    borderRadius: 50,
    padding: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  texto2: {
    display: "flex",
    paddingTop: 60,
    fontWeight: "800",
  },

  imgE: {
    width: 160,
    height: 32,
  },

  textoC: {
    fontSize: 20,
    marginBottom: 30,
  },

  input1: {
    marginTop: 80,
  },

  textos: {
    display: "flex",
    justifyContent: "center",
  },

  textoR: {
    fontSize: 20,
    textAlign: "center",
  },

  textoS: {
    fontSize: 15,
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    width: 430,
  },

  textoN: {
    fontSize: 15,
    marginBottom: 60,
    marginTop: 30,
  },

  imgS: {
    width: 100,
    height: 100,
  },

  textos: {
    marginTop: 40,
    textAlign: "center",
  },

  textosms: {
    marginTop: 30,
    fontSize: 20,
  },

  textosms1: {
    paddingLeft: 170,
    color: "#707070",
    fontWeight: "200",
    fontSize: 15,
  },

  textoemail: {
    marginBottom: 60,
    marginTop: 30,
    fontSize: 20,
  },

  textosenha: {
    fontSize: 20,
    marginBottom: 70,
  },

  img2: {
    width: 150,
    height: 150,
  },

  imgicon: {


  },
  
  imgicon1: {
    width: 30,
    height: 50,
    padding: 20,
  },

  container1: {
    flex: 1,
    backgroundColor: "#F3ECE8",
  },

  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerIcones: {
    paddingLeft: 330,
  },

  botaoE: {
    margin: 30,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
    border: 10,
    color: "black",
  },

  alert: {
    fontSize: 25,
    width: 350,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  CO: {
    justifyContent: "space-around",

  },
});
