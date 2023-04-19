import { useState } from "react";
import { Image, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { ScrollView } from "react-native-web";
import { styles } from "../lib/styles";

export const TelaEnvioSms = ({ navigation }) => {
  const [valor, setValor] = useState("890125");
  const images = require("../imagens/correio.png");

  return (
    <View style={styles.container}>
      <Image style={styles.imgS} source={images} />
      
      <Text style={styles.textosms}>
        Código foi enviado por SMS
      </Text>

      <Text style={styles.textoN} onPress={() => navigation.navigate("TelaEnvioEmail")}>
        Não deu certo? Tente outro metódo
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Código"
        value={valor}
        onChangeText={setValor}
      />

      <Button style={styles.btt} mode="contained" onPress={() => navigation.navigate("TelaMudarSenha")}>
        Verificar
      </Button>

      <View>
        <Text
          style={styles.textosms1}
          onPress={() => navigation.navigate("TelaEnvioSms")}
        >
          Reenviar SMS
        </Text>
      </View>
    </View>
  );
};
