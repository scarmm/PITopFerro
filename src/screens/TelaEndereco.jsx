import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-web";
import { styles } from "../lib/config";

export const TelaEndereco = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor:"#F3ECE8"}}>
      <View style={styles.container}>
        <View style={styles.endereco}>
          <Text style={styles.text}>Josevaldo Silva | 047-99214324</Text>
          <Text>R. Louis W R Schooene, 307, Jaravituba</Text>
          <Text>Joinville, Santa Catarina, 87423742</Text>
        </View>
        <View style={styles.endereco}>
          <Text style={styles.text}>Cristiano Ronaldo | 047-28746</Text>
          <Text>R. João Klein, 297, Crisciúma</Text>
          <Text>Crisciúma, Santa Catarina, 87234234</Text>
        </View>
        <View style={styles.endereco}>
          <Text style={styles.text}>Sandro Rivaldo | 047-9545345</Text>
          <Text>R.20 de março, 900, São Paulo </Text>
          <Text>SãoBernardodo Campo, São Paulo,84423</Text>
        </View>
        <View style={styles.text1}>
          <Icon.Button
            style={styles.imgicon}
            name="add-circle-outline"
            size={18}
            color="#34271F"
            backgroundColor="none"
            onPress={() => {
              navigation.navigate("LocalizaçãoMimic");
            }}
          >
            Adicione um novo endereço
          </Icon.Button>
        </View>
      </View>
    </ScrollView>
  );
};
