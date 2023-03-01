import { Image, Text, TextInput } from "react-native"
import { Button } from "react-native-paper"
import { View } from "react-native-web"
import { styles } from "../lib/styles"

export const TelaEnvioSms = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imgS} source={{ uri: require("../imagens/correio.png") }} />
            <Text style={styles.textosms} onPress={() => navigation.navigate("Login")}>Código foi enviado por SMS
            </Text>
            <Text style={styles.textoN} onPress={() => navigation.navigate("TelaEnvioEmail")}>Não deu certo? Tente outro metódo</Text>
            <TextInput style={styles.input} placeholder="Código" />
            <Button style={styles.btt} mode="contained" onPress={() => navigation.navigate("TelaMudarSenha")}>Verificar</Button>
            <View>
                <Text style={styles.textosms1} onPress={() => navigation.navigate("TelaEnvioSms")}>Reenviar SMS</Text>
            </View>
        </View>
    )
}