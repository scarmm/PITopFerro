import { View, Image, ScrollView } from "react-native";
import { Button, TextInput, Text, HelperText } from "react-native-paper";
import { styles } from "../lib/styles";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { log } from "react-native-reanimated";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TextInputMask } from "react-native-masked-text";

export const TelaCadastro2 = ({ route, navigation }) => {
  const { nome, sobrenome, email } = route.params;

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

  function onRegisterPressed() {
    console.log("RegistroIniciado");
    let erro = false;

    console.log("Nome: " + nome);
    console.log("Sobrenome: " + sobrenome);
    console.log("Email: " + email);
    console.log("CPF: " + cpf);
    console.log("Telefone: " + telefone);

    createUserWithEmailAndPassword(auth, email, password.value)
      .then((value) => {
        console.log("Cadastrado com sucesso! " + value.user.uid);

        createUserInCollection(value.user.uid);
      })
      .catch((error) => console.log(error.code));
    // .catch((error) => lidarComErro(error.code));
    // }
  }

  async function createUserInCollection(uid) {
    //use addDoc to add a new document to a collection
    const docRef = addDoc(collection(db, "usuarios"), {
      email: email,
      nome: nome,
      sobrenome: sobrenome,
      uid: uid,
    })
      .then((docRef) => {
        console.log("Id do usuário: ", docRef.id);
        navigation.navigate("Login", {
          mensagem: "Você se registrou com muito sucesso!💖",
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
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

  const images = require("../imagens/bolinhasD.png");

  return (
    <View style={styles.container}>
      <View style={styles.cadastro}>
        <View>
          <Text style={styles.textoC}>Crie seu cadastro</Text>
        </View>
        <Image style={styles.imgE} source={images} />
      </View>
      <View style={styles.input1}>
        <TextInputMask
          type={"cpf"}
          style={{ ...styles.input, color: "black", paddingLeft:30,  }}
          placeholder="CPF"
          returnKeyType="done"
          value={cpf.value}
          onChangeText={(text) => {
            setCpf({
              value: text,
            });
          }}
          error={!!cpf.error}
          errorText={cpf.error}
        />

        <TextInputMask
          style={{ ...styles.input, color: "black", paddingLeft:30 }}
          type={"cel-phone"}
          options={{
            maskType: "BRL",
          }}
          placeholder="Telefone"
          returnKeyType="done"
          value={telefone.value}
          onChangeText={(text) => {
            setTelefone({
              // só uma correção
              ...telefone,
              value: text,
            });
          }}
          error={!!telefone.error}
          errorText={telefone.error}
        />

        <TextInput
          style={{ ...styles.input, color: "black" }}
          placeholder="Senha"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </View>

      <View style={styles.bot}>
        <Button style={styles.btt} mode="contained" onPress={onRegisterPressed}>
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
