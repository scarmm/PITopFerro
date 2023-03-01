import { Text, View } from "react-native"
import { ajudas } from "../lib/ajudas"

export const TelaAjudaConta = ({ navigation }) => {
    return(
        <View style={ajudas.containerAjudaConta}>
            <Text>O que Aconteceu:</Text>
            <Text>Entraram em minha conta.</Text>
            <Text>Tentaram roubar minha conta.</Text>
            <Text>Esqueci minha senha.</Text>
        </View>
    )
}