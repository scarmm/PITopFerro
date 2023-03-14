import { StyleSheet } from "react-native";

export const intro = StyleSheet.create({
  imagem1: {
    width: "100vw",
    height: "100vh",
  },
  pular: {
    position: "absolute",
    right: "40px",
    top: "40px",
    color: "#FFF",
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
  },
  TextIntro:{
    position:"absolute",
    bottom:"100px",
    color:"#FFF",
    left:"25px",
  }
});
