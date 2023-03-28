import { View, Text } from "react-native";
import { styles } from "../lib/config";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from "react-native-web";

export const TelaCartao = () => {
  return (
    <ScrollView style={{backgroundColor:"#F3ECE8"}}>
    <View style={styles.container}>
      <View style={styles.endereco}>
        <Text style={styles.text}>Cartão Crédito</Text>
        <Text>Cartão de crédito mastercard *********</Text>
        <Text>Samuel do Berimbal</Text>
        <Text>Expira em 05/2023</Text>
      </View>
      <View style={styles.text1}>
      <Icon.Button style={styles.imgicon} name="credit-card-plus-outline" size={20} color="#34271F" backgroundColor="none" onPress={() => {navigation.navigate("Adicionar")}}>Adicione um novo cartão
            </Icon.Button>
      </View>
    </View>
    </ScrollView>
  );
};
