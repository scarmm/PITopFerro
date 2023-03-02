
import { Image, Text, View } from "react-native"
import { ajudas } from "../lib/ajudas"

export const TelaAjudaConta = ({ navigation }) => {
    return(
        <View style={ajudas.containerAjudaConta}>
              <Image style={ajudas.imgajudaconta} source={{ uri: require("../imagens/Escudo-i.png") }} />
            <Text style={ajudas.textoajudaconta}>O que Aconteceu?</Text>
            <Text style={ajudas.textoajudaconta2}>Entraram em minha conta.</Text>
            <Text style={ajudas.textoajudaconta2}>Tentaram roubar minha conta.</Text>
            <Text style={ajudas.textoajudaconta2}>Esqueci minha senha.</Text>
        </View>
    )
}