import { View, Text, TextInput, Image } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "../lib/styles"

export const telaLogin = ({ navigation }) => {
    return (
        <View style={styles.container}>
             <Image style={styles.imgicon1} source={{ uri: require("../imagens/voltar.png") }} />

            <Image style={styles.img1} source={{ uri: require("../imagens/icon-login.png") }} />
            <View>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Senha" />
            </View>

            <View style={styles.texto} >
                <Text style={styles.texto1} onPress={() => navigation.navigate("EsqueceuaSenha")}>Esqueci minha senha</Text>
            </View>

            <View style={styles.botao1}>
                <Button style={styles.btt} mode="contained" onPress={() => navigation.navigate("Inicio")}>Entrar</Button>
            </View>

            <View style={styles.texto2} >
                <Text style={styles.texto3} onPress={() => navigation.navigate("Cadastro")}>Não tem conta? Cadastre-se</Text>
            </View>

        </View>
    )
}

