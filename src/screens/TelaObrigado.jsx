import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../lib/obrigado";

export const TelaObrigado = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.text}>Obrigado pela Compra!!!</Text>
            </View>
            <Image
                style={styles.image}
                source={{
                    uri: 'image.png',
                }}
            />
            <Button style={styles.botaoObrigado} mode="contained" onPress={() => navigation.navigate("TelaInicial")}>Voltar para a Tela Incial</Button>
        </View>
    )
}