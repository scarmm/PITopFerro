import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/obrigado";

export const TelaObrigado = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text}>Obrigado pela</Text>
          <Text style={styles.text2}>Compra!!!</Text>
        </View>
        <Image
          style={styles.image}
          source={require("../imagens/teladefundo.png")}
        />
        <Button
          style={styles.botaoObrigado}
          mode="contained"
          onPress={() => navigation.navigate("Principal")}
        >
          Voltar para a Tela Incial
        </Button>
      </View>
  );
};
