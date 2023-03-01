import { Image, Text } from "react-native"
import { View } from "react-native"
import { styles } from "../lib/styles"

export const TelaSenhaAlterada = ({ navigation }) => {
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
            <Image style={styles.img2} source={{ uri: require("../imagens/senha-relogio.png") }} />
            <Text style={styles.textosenha}>Senha alterada</Text>
            </View>

            <View style={styles.containerIcones}>
            <Image style={styles.imgicon} source={{ uri: require("../imagens/seta-voltar.png") }} />
            </View>
        </View>

    )
}