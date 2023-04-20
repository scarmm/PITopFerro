import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import { styles } from "../lib/config";

export const TelaConfigura = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Endereços");
        }}
      >
        <Text style={styles.text}>Endereços</Text>
      </TouchableOpacity>
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
