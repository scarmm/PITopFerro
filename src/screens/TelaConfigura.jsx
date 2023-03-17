import { Text, View } from "react-native";
import { styles } from "../lib/config";

export const TelaConfigura = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => {navigation.navigate("Endereços")}}>Endereços</Text>
            <Text style={styles.text} onPress={() => {navigation.navigate("Cartões")}}>Cartões</Text>
            <Text style={styles.text} onPress={() => {navigation.navigate("Excluir")}}>Solicitar a exclusão da conta</Text>
        </View>
    )
}


