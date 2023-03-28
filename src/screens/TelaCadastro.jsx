import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { Button, TextInput, Text, HelperText } from "react-native-paper";
import { styles } from "../lib/styles";

export const telaCadastro = ({ navigation }) => {
  const [mostraErro, setMostraErro] = useState("");
  const [nome, setNome] = useState({
    value: "",
    error: "",
  });
  const [sobrenome, setSobrenome] = useState({
    value: "",
    error: "",
  });
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({
    value: "",
    error: "",
  });
  const [confirmaPassword, setConfirmaPassword] = useState({
    value: "",
    error: "",
  });

  function onRegisterPressed() {
    console.log("RegistroIniciado");
    let erro = false;
    if (nome.value === "") {
      setNome({ ...nome, error: "Entre com o seu nome maravilhoso" });
      erro = true;
    }
    if (email.value === "") {
      setEmail({ ...email, error: "Entre com um e-mail válido" });
      erro = true;
    }
    if (password.value === "") {
      setPassword({ ...password, error: "Entre com uma senha" });
      erro = true;
    }
    if (confirmaPassword.value === "") {
      setConfirmaPassword({
        ...confirmaPassword,
        error: "Repita sua senha",
      });
      erro = true;
    }
    if (confirmaPassword.value != password.value) {
      erro = true;
      setConfirmaPassword({
        ...confirmaPassword,
        error: "Senhas não conferem",
      });
    }
    if (!erro) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((value) => {
          console.log("Cadastrado com sucesso! " + value.user.uid);
          navigation.navigate("Inicio", {
            mensagem: "Você se registrou com muito sucesso! 💋",
          });
        })
        .catch((error) => lidarComErro(error.code));
    }
  }

  function lidarComErro(erro) {
    if (erro == "auth/weak-password") {
      setMostraErro("Senha muito Fraquinha");
      return;
    }
    if (erro == "auth/credential-already-in-use") {
      setMostraErro("E-mail já cadastrado");
      return;
    }
    if (erro == "auth/invalid-email") {
      setMostraErro("E-mail inválido");
      return;
    }
    setMostraErro(erro);
  }

  return (
    <View style={styles.container}>
      <View style={styles.cadastro}>
        <View>
          <Text style={styles.textoC}>Crie seu cadastro</Text>
          <HelperText type="error">{mostraErro}</HelperText>
        </View>
        <Image
          style={styles.imgE}
          source={{ uri: require("../imagens/bolinhasE.png") }}
        />
      </View>
      <View style={styles.input1}>
        <TextInput
          placeholder="Digite seu E-mail"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          style={styles.input}
          /* não essenciais  */
          returnKeyType="next"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Nome Completo"
          style={styles.input}
          value={nome.value}
          onChangeText={(text) => setNome({ value: text, error: "" })}
          error={!!nome.error}
          errorText={nome.error}
          /* não essenciais  */
          returnKeyType="next"
          textContentType="givenName"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={sobrenome.value}
          onChangeText={(text) => setSobrenome({ value: text, error: "" })}
          error={!!sobrenome.error}
          errorText={sobrenome.error}
          /* não essenciais  */
          returnKeyType="next"
          textContentType="givenName"
          keyboardType="default"
        />
      </View>

      <View style={styles.bot}>
        <Button style={styles.btt} mode="contained" onPress={(onRegisterPressed) => navigation.navigate("Cadastro2")}>Continuar</Button>
      </View>

      <View style={styles.texto2}>
        <Text
          style={styles.texto3}
          onPress={() => navigation.navigate("Login")}
        >
          Já tem conta? Faça login
        </Text>
      </View>
    </View>
  );
};
