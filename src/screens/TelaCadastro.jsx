import { Image, Text, TextInput, View } from "react-native"
import { Button } from "react-native-paper"
import { styles } from "../lib/styles"

export const telaCadastro = ({ navigation }) => {
    return (

        <View style={styles.container}>

            <View style={styles.cadastro}>
                <View>
                    <Text style={styles.textoC}>Crie seu cadastro</Text>
                </View>
                <Image style={styles.imgE} source={{ uri: require("../imagens/bolinhasE.png") }} />
            </View>
            <View style={styles.input1}>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Nome" />
                <TextInput style={styles.input} placeholder="Sobrenome" />
            </View>

            <View style={styles.bot}>
                <Button style={styles.btt} mode="contained" onPress={() => navigation.navigate("Cadastro2")}>Continuar</Button>
            </View>

            <View style={styles.texto2} >
                <Text style={styles.texto3} onPress={() => navigation.navigate("Login")}>Já tem conta? Faça login</Text>
            </View>

        </View>
    )
}