import { Image, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { ScrollView } from "react-native-web";
import { styles } from "../lib/styles";

export const TelaEnvioEmail = ({ navigation }) => {
  const images = require ("../imagens/correio.png")
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgS}
        source={images}
      />
      <Text
        style={styles.textoemail}
      >
        Código foi enviado por Email
      </Text>
      <TextInput style={styles.input} placeholder="Código" />
      <Button
        style={styles.btt}
        mode="contained"
        onPress={() => navigation.navigate("TelaMudarSenha")}
      >
        Verificar
      </Button>
      <View>
        <Text
          style={styles.textosms1}
          onPress={() => navigation.navigate("TelaEnvioEmail")}
        >
          Reenviar Email
        </Text>
      </View>
    </View>
  );
};
