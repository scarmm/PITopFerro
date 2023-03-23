
import React from "react";
import { Image, ScrollView, Text, View, } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";

export const telaInicial = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: require("../imagens/gatao.png")}} />
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Login")}>LoGin</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Ajuda")}>AJUda</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Configurações")}>Configuração</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Localização")}>Localização</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("CadastroCartão")}>Cadastro Cartâo</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Pagamento")}>Tela de Pagamentos</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Obrigado")}>Tela de Obrigado pela Compra</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Dormitorio")}>Tela dormitório</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Dormitorio")}>Tela sala</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Dormitorio")}>Tela cozinha</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Dormitorio")}>Tela decoração</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Principal")}>Tela principas</Button>
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("PreCompra")}>Tela pre compra</Button>
        </View>
        </ScrollView>
    )
}
