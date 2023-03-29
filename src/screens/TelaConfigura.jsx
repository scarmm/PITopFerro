import { Text, View } from "react-native";
import { ScrollView } from "react-native-web";
import { styles } from "../lib/config";

export const TelaConfigura = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Endereços");
          }}
        >
          Endereços
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Cartões");
          }}
        >
          Cartões
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Excluir");
          }}
        >
          Solicitar a exclusão da conta
        </Text>
        <Text
          style={styles.text}
          onPress={() => {
            navigation.navigate("Ajuda");
          }}
        >
          Ajuda com a Conta
        </Text>
      </View>
  );
};
