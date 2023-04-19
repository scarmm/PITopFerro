import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Button, TextInput, Text, HelperText } from "react-native-paper";
import { styles } from "../lib/styles";

export const TelaLogin = ({ route, navigation }) => {
  const [Email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [Senha, setSenha] = useState({
    value: "",
    error: "",
  });
  const [mostraErro, setMostraErro] = useState("");
  const { mensagem } = route.params || false;

  // Set up an effect that listens for changes in the user's authentication state
  // useEffect(() => {
  //   // Create a function to unsubscribe from the authentication state listener
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     // If the user is logged in, navigate to the "Principal" screen
  //     if (user) {
  //       // const userId = user.uid; // Extract the user's unique ID from the authentication object
  //       // console.log("User logged in:", user);
  //       navigation.navigate("Principal");
  //     }
  //   });
  //   // Return the unsubscribe function to clean up the effect when it unmounts
  //   return () => unsubscribe;
  // }, []); // The effect only runs once, when the component mounts, because the dependency array is empty.

  function onLoginPressed() {
    if (Email.value === "" || Senha.value === "") {
      setEmail({ ...Email, error: "Entre com um e-mail válido" });
      setSenha({ ...Senha, error: "Entre com uma senha" });
      return;
    }
    console.log(auth, Email.value, Senha.value);
    signInWithEmailAndPassword(auth, Email.value, Senha.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("LoginIniciado");
        navigation.navigate("Inicio");
      })
      .catch((error) => {
        console.log("batataquente", error);
        lidarComErro(error.code);
      });
  }

  function lidarComErro(erro) {
    if (erro == "auth/wrong-password") {
      setMostraErro("Senha errada 😕");
      return;
    }
    if (erro == "auth/user-not-found") {
      setMostraErro("Usuário não encontrado 😕");
      return;
    }
    if (erro == "auth/invalid-email") {
      setMostraErro("E-mail inválido 😕");
      return;
    }
    setMostraErro(erro);
  }

  const images2 = require("../imagens/icon-login.png");

  return (
    <View style={styles.container}>
      {/* <Image style={styles.imgespecifico} source={images2} /> */}

      <View>
        {mensagem && <HelperText type="info">{mensagem}</HelperText>}
        <HelperText type="error">{mostraErro}</HelperText>
        <TextInput
          style={styles.input}
          testID="email"
          placeholder="Email"
          mode="flat"
          value={Email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!Email.error}
          errorText={Email.error}
          returnKeyType="next"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <HelperText visible={!!Email.error}>{Email.error}</HelperText>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          testID="senha"
          returnKeyType="done"
          value={Senha.value}
          onChangeText={(text) => setSenha({ value: text, error: "" })}
          error={!!Senha.error}
          errorText={Senha.error}
          secureTextEntry
        />
      </View>

      <View style={styles.texto}>
        <Text
          style={styles.texto1}
          onPress={() => navigation.navigate("EsqueceuaSenha")}
        >
          Esqueci minha senha
        </Text>
      </View>

      <View style={styles.botao1}>
        <Button style={styles.btt} mode="contained" onPress={onLoginPressed}>
          Entrar
        </Button>
      </View>

      <View style={styles.cadastro}>
        <Text
          style={styles.cadastro}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Não tem conta? Cadastre-se
        </Text>
      </View>
    </View>
  );
};
