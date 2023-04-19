
import React from "react";
import { Image, ScrollView, Text, View, } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";

export const TelaInicial = ({ navigation }) => {
    const images = require("../imagens/gatao.png")
    return (
        <ScrollView>

        <View style={styles.container}>
            <Image style={styles.img} source={images} />
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Login")}>LoGin</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Ajuda")}>AJUda</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Configurações")}>Configuração</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Localização")}>Localização</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("CadastroCartão")}>Cadastro Cartâo</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Pagamento")}>Tela de Pagamentos</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Obrigado")}>Tela de Obrigado pela Compra</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Dormitorio")}>Tela dormitório</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Sala")}>Tela sala</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Cozinha")}>Tela cozinha</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Decoração")}>Tela decoração</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Principal")}>Tela principas</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("PreCompra")}>Tela pre compra</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Resultados")}>resultadopesquisa</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Carrinho1")}>carrinho cheio</Button>
        </View>
        </ScrollView>
    )
}
