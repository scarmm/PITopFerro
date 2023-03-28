import { Image, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { ScrollView } from "react-native-web";
import { styles } from "../lib/styles";

export const TelaEnvioEmail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgS}
        source={{ uri: require("../imagens/correio.png") }}
      />
      <Text
        style={styles.textoemail}
        onPress={() => navigation.navigate("Login")}
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
          onPress={() => navigation.navigate("Login")}
        >
          Reenviar Email
        </Text>
      </View>
    </View>
  );
};
