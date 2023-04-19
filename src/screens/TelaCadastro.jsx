import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { Button, TextInput, Text, HelperText } from "react-native-paper";
import { styles } from "../lib/styles";

export const TelaCadastro = ({ navigation }) => {
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

  function continuarCadastro() {
    navigation.navigate("Cadastro2", { nome: nome.value, sobrenome: sobrenome.value, email: email.value })
  }
  
const image = require ("../imagens/bolinhasE.png");


  return (
    <View style={styles.container}>
      <View style={styles.cadastro}>
        <View>
          <Text style={styles.textoC}>Crie seu cadastro</Text>
          <HelperText type="error">{mostraErro}</HelperText>
        </View>
        <Image
          style={styles.imgE}
          source={image}
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
          placeholder="Nome"
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
        <Button style={styles.btt} mode="contained" onPress={continuarCadastro}>Continuar</Button>
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
