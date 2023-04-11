import { View } from "react-native";
import Hr from "react-native-hr-component";
import { Button, Text } from "react-native-paper";
import { styles } from "../lib/pedido";

export const TelaPedido = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text>Enviando para: Rua inexistente, 2891.</Text>
                <Hr text="" lineColor="#d3d3d3" width={50} />

                <View style={styles.text}>
                    <Text>Itens:</Text>
                    <View style={styles.item}>
                        <Text>R$ 34,90</Text>
                        <Text>R$ 50,99</Text>
                    </View>
                </View>


                <Hr text="" lineColor="#d3d3d3" width={50} />

                <View style={styles.text2}>
                    <Text style={{ fontWeight: 600 }} >Total:</Text>
                    <View style={styles.item2}>
                        <Text style={{ fontWeight: 600 }}>R$ 85,89</Text>
                    </View>
                </View>

                <View style={styles.text}>
                    <Text>Em 1x sem juros</Text>
                </View>
            </View>

            <View style={styles.container2}>
                <Text>Informações de Pagamento</Text>
                <Hr text="" lineColor="#d3d3d3" width={50} />

                <View style={styles.text}>
                    <Text>Método:</Text>
                    <Text>Mastercard (Crédito)</Text>
                </View>

            </View>
            <Button
                style={styles.bott}
                mode="contained"
                onPress={() => navigation.navigate("Obrigado")}
            >
                Confirmar Pedido
            </Button>
        </View>
    );
}