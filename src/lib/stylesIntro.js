import { StyleSheet } from "react-native";

export const intro = StyleSheet.create({
  imagem1: {
    width: "100vw",
    height: "100vh",
  },

  pular: {
    // position: "absolute",
    right: -300,
    top: -295,
    color: "black",
    backfaceVisibility: "hidden",
    backgroundColor: "white",
    padding: 10,
    width: 70,
    marginTop: 40,
    textAlign: "center",
    borderRadius: 20,

  },

  botaoIntro: {
    color: "#ffffff",
  },

  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  fundo: {
    flex: 1,
  },
  botico: {
    justifyContent: "flex-end",
    backgroundColor: "none"
  },
  botico2: {
    justifyContent: "flex-start",
  },

  text: {
    color: "white",
  },

  setas: {
    flexDirection: "row",
    justifyContent: "space-between",
    backfaceVisibility: "hidden"
  },
  TextIntro: {
    bottom: -230,
    color: "#FFF",
    display: "flex",
    maxWidth: 400,
    textAlign: "left",
    paddingLeft: 30,
    paddingRight: 30
  }
});
