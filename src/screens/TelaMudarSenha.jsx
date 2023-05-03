import { Image, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { styles } from "../lib/styles";
import { useState } from "react";

export const TelaMudarSenha = ({ navigation }) => {
  const [Senha, setSenha] = useState({
    value: "",
    error: "",
  });
  const [Senha2, setSenha2] = useState({
    value: "",
    error: "",
  });
  const images = require("../imagens/senha-relogio.png");
  return (
    <View style={styles.container}>
      <Image style={styles.img2} source={images} />
      <Text style={styles.textosenha}>Mude sua senha</Text>
      <View>
      <TextInput
          style={styles.input}
          placeholder="Nova Senha"
          testID="senha"
          returnKeyType="done"
          value={Senha.value}
          onChangeText={(text) => setSenha({ value: text, error: "" })}
          error={!!Senha.error}
          errorText={Senha.error}
          secureTextEntry
        />
         <TextInput
          style={styles.input}
          placeholder="Repita a nova senha"
          testID="senha"
          returnKeyType="done"
          value={Senha2.value}
          onChangeText={(text) => setSenha2({ value: text, error: "" })}
          error={!!Senha2.error}
          errorText={Senha2.error}
          secureTextEntry
        />
      </View>

      <View style={styles.botao1}>
        <Button
          style={styles.btt}
          mode="contained"
          onPress={() => navigation.navigate("TelaSenhaAlterada")}
        >
          Confirmar
        </Button>
      </View>
    </View>
  );
};
