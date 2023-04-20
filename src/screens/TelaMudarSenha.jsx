import { Image, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { ScrollView } from "react-native";
import { styles } from "../lib/styles";

export const TelaMudarSenha = ({ navigation }) => {
  const images = require("../imagens/senha-relogio.png")
  return (
      <View style={styles.container}>
        <Image
          style={styles.img2}
          source={images}
        />
        <Text style={styles.textosenha}>Mude sua senha</Text>
        <View>
          <TextInput style={styles.input} placeholder="Nova senha" />
          <TextInput style={styles.input} placeholder="Repita a nova senha" />
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
