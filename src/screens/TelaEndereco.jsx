import { Text, View } from "react-native";
import { styles } from "../lib/config";

export const TelaEndereco = ({ navigation }) => {
    return (
        <View>
            <View style={styles.endereco}>
                <Text style={styles.text}>Josevaldo Silva | 047-99214324</Text>
                <Text>R. Louis W R Schooene, 307, Jaravituba</Text>
                <Text>Joinville, Santa Catarina, 87423742</Text>
            </View>
            <View style={styles.endereco}>
                <Text style={styles.text}>Cristiano Ronaldo | 047-9287364</Text>
                <Text>R. João Klein, 297, Crisciúma</Text>
                <Text>Crisciúma, Santa Catarina, 87234234</Text>
            </View>
            <View style={styles.endereco}>
                <Text style={styles.text}>Sandro Rivaldo | 047-954534554</Text>
                <Text>R. 20 de março, 900, São Paulo</Text>
                <Text>São Bernardo do Campo, São Paulo, 89423423</Text>
            </View>
            <View style={styles.text1}>
                <Text onPress={() => {navigation.navigate("Adicionar")}}>Adicione um novo endereço</Text>
            </View>
        </View>
    )
}