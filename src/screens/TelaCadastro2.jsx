import { View, Image } from "react-native";
import { Button, TextInput, Text, HelperText } from "react-native-paper";
import { styles } from "../lib/styles";
import { useState } from "react";

export const telaCadastro2 = ({ navigation }) => {
  const [mostraErro, setMostraErro] = useState("");
  const [cpf, setCpf] = useState({
    value: "",
    error: "",
  });
  const [telefone, setTelefone] = useState({
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
    if (cpf.value === "") {
      setCpf({ ...cpf, error: "Entre com o seu cpf maravilhoso" });
      erro = true;
    }
    if (telefone.value === "") {
      setTelefone({ ...telefone, error: "Entre com um Telefone válido" });
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
      createUserWithtelefoneAndPassword(auth, telefone.value, password.value)
        .then((value) => {
          console.log("Cadastrado com sucesso! " + value.user.uid);
          navigation.navigate("Principal", {
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
    if (erro == "auth/invalid-telefone") {
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
        </View>
        <Image
          style={styles.imgE}
          source={{ uri: require("../imagens/bolinhasD.png") }}
        />
      </View>
      <View style={styles.input1}>
        <TextInput style={styles.input} placeholder="CPF" />
        <TextInput style={styles.input} placeholder="Telefone" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme Senha"
          returnKeyType="done"
          value={confirmaPassword.value}
          onChangeText={(text) =>
            setConfirmaPassword({ value: text, error: "" })
          }
          error={!!confirmaPassword.error}
          errorText={confirmaPassword.error}
          secureTextEntry
        />
        <HelperText type="error" visible={!!confirmaPassword.error}>
          {confirmaPassword.error}
        </HelperText>
      </View>

      <View style={styles.bot}>
        <Button
          style={styles.btt}
          mode="contained"
          onPress={(onRegisterPressed)}
        >
          Entrar
        </Button>
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
