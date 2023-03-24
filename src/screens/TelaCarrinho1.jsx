import { Button, Text, View } from "react-native";
import { Carrinho } from "../lib/Carrinho";

export const TelaCarrinho1 = () => {
  return (
    <View style={Carrinho.container}>
        <View style={Carrinho.botao1}>
            <Button>Comprar</Button>
        </View>
    </View>
  )}