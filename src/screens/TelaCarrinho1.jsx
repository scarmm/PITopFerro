import { Image, Pressable, Text, View } from "react-native";
import { Carrinho } from "../lib/Carrinho";
import Icon from "react-native-vector-icons/Entypo";
import { ScrollView } from "react-native-gesture-handler";

export const TelaCarrinho1 = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#F3ECE8" }}>
      <View style={Carrinho.container}>
        <View style={Carrinho.containerbotao}>
          <Icon.Button
            onPress={() => navigation.navigate("Localização")}
            style={Carrinho.botao2}
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
          >
            Comprar
          </Icon.Button>
        </View>

        <Pressable onPress={() => navigation.navigate("PreCompra")}>
          <View style={Carrinho.container1}>
            <View style={Carrinho.imagem}>
              <Image
                style={Carrinho.imagempc}
                source={require("../imagens/prateleira.png")}
              ></Image>
            </View>
            <View style={Carrinho.container2}>
              <View>
                <Text style={Carrinho.texto1}>Prateleira de Exposição</Text>
                <Text style={Carrinho.texto2}>
                  Estante Multiuso Decorativa com 4 prateleiras estilo Artany
                  Star Freijó
                </Text>
                <Text style={Carrinho.texto3}>R$300,00</Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};
