import { View } from "react-native"
import { Text } from "react-native-paper"
import { ajudas } from "../lib/ajudas"

export const TelaAjuda = ({ navigation }) => {
    return (
        <View style={ajudas.container}>
            <View>
                <Text style={ajudas.textoajuda1} onPress={() => navigation.navigate("Central")}>Central de Ajuda.</Text>
                <Text style={ajudas.textoajuda1} onPress={() => navigation.navigate("AjudaConta")}>Ajuda Com a Conta.</Text>
                <Text style={ajudas.textoajuda1} onPress={() => navigation.navigate("Sugestões")}>Sugestões.</Text>
            </View>
        </View>
    )
}