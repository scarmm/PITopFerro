import React from "react";
import { Image, Text, View, } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/styles";

export const telaInicial = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: require("../imagens/gatao.png")}} />
            <Button style={styles.botao} mode="contained" onPress={() => navigation.navigate("Login")}>Clique no miau</Button>
        </View>
    )
}
