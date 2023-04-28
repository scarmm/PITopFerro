import { View, Text, Pressable } from "react-native";
import { styles } from "../lib/config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native";

export const TelaCartao = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#F3ECE8" }}>
      <View style={styles.container}>
        <View style={styles.endereco}>
          <Text style={styles.text}>Cartão Crédito</Text>
          <Text>Cartão de crédito mastercard ******</Text>
          <Text>Samuel Souza</Text>
          <Text>Expira em 12/2030</Text>
        </View>

        <View style={styles.text1}>
          <Icon.Button
            style={styles.imgicon}
            name="credit-card-plus-outline"
            size={20}
            color="#34271F"
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
            onPress={() => {
              navigation.navigate("CadastroCartãoMimic");
            }}
          >
            Adicione um novo cartão
          </Icon.Button>
        </View>
      </View>
    </ScrollView>
  );
};
