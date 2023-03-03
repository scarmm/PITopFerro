import {  Image, Text } from "react-native"
import { Button } from "react-native-paper"
import { View } from "react-native-web"
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
    <Text style={styles.textoN}>Não deu certo? Tente outro metódo</Text>
</View>

<Button style={styles.btt} mode="contained" onPress={() => navigation.navigate("Inicio")}>Enviar</Button>
</View>
    )}