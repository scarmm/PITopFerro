import { Image, View } from "react-native"
import {  Button, Text } from "react-native-paper"
import { styles } from "../lib/styles"

export const TelaEsqueceuaSenha = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.imgS} source={{ uri: require("../imagens/esqueceuaSenha.png") }} />
            </View>

            <View style={styles.textos}>
                <Text style={styles.textoR}>Recupere sua senha:</Text>
                <Text style={styles.textoS}>Será enviado um código sms
                    ao número cadastrado.</Text>
            </View>

            <Button style={styles.btt} mode="contained" onPress={() => navigation.navigate("TelaEnvioSms")}>Enviar</Button>
        </View>
    )
}