import { Text, View } from "react-native";
import { Carrinho } from "../lib/Carrinho";

export const TelaCarrinho = () => {
  return (
    <View style={Carrinho.container}>
      <Text style={Carrinho.texto}>Seu Carrinho está vazio</Text>
      <Text style={Carrinho.texto2}>Adcione itens</Text>
    </View>
  );
};
