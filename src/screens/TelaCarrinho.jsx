import { Text, View } from "react-native";
import { Carrinho } from "../lib/Carrinho";

export const TelaCarrinho = () => {
  return (
    <ScrollView style={{backgroundColor:"#F3ECE8"}}>
    <View style={Carrinho.container}>
      <Text style={Carrinho.texto}>Seu Carrinho está vazio</Text>
      <Text style={Carrinho.texto2}>Adicione itens</Text>
    </View>
    </ScrollView>
  );
};
