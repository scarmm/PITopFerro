import { View, Text } from "react-native";
import { styles } from "../lib/config";

export const TelaCartao = () => {
  return (
    <View>
      <View style={styles.endereco}>
        <Text style={styles.text}>Cartão Crédito</Text>
        <Text>Cartão de crédito mastercard *********</Text>
        <Text>Samuel do Berimbal</Text>
        <Text>Expira em 05/2023</Text>
      </View>
      <View style={styles.text1}>
        <Text>Adicionar um novo cartão</Text>
      </View>
    </View>
  );
};
