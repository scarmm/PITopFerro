import { Image, Text, View } from "react-native";
import { Carrinho } from "../lib/Carrinho";
import Icon from 'react-native-vector-icons/Entypo';
import { ScrollView } from "react-native-gesture-handler";

export const TelaCarrinho1 = () => {
  return (
    <ScrollView style={{backgroundColor:"#F3ECE8"}}>
    <View style={Carrinho.container}>
      <View style={Carrinho.containerbotao}>
      <Icon.Button style={Carrinho.botao2} backgroundColor="none">Comprar</Icon.Button>
      </View>

      <View style={Carrinho.container1}>
          <View style={Carrinho.imagem}>
            <Image
              style={Carrinho.imagempc}
              source={{ uri: require("../imagens/mesa9.jpg") }}
            ></Image>
          </View>
          <View style={Carrinho.container2}>
            <View>
              <Text style={Carrinho.texto1}>Lorem ipsum dolor sit.</Text>
              <Text style={Carrinho.texto2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio harum ducimus maxime nisi iste minima? Minima quidem
                natus molestiae.
              </Text>
              <Text style={Carrinho.texto3}>R$291,00</Text>
            </View>
          </View>
        </View>

        <View style={Carrinho.container1}>
          <View style={Carrinho.imagem}>
            <Image
              style={Carrinho.imagempc}
              source={{ uri: require("../imagens/mesa9.jpg") }}
            ></Image>
          </View>
          <View style={Carrinho.container2}>
            <View>
              <Text style={Carrinho.texto1}>Lorem ipsum dolor sit.</Text>
              <Text style={Carrinho.texto2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio harum ducimus maxime nisi iste minima? Minima quidem
                natus molestiae.
              </Text>
              <Text style={Carrinho.texto3}>R$291,00</Text>
            </View>
          </View>
        </View>

        <View style={Carrinho.container1}>
          <View style={Carrinho.imagem}>
            <Image
              style={Carrinho.imagempc}
              source={{ uri: require("../imagens/mesa9.jpg") }}
            ></Image>
          </View>
          <View style={Carrinho.container2}>
            <View>
              <Text style={Carrinho.texto1}>Lorem ipsum dolor sit.</Text>
              <Text style={Carrinho.texto2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio harum ducimus maxime nisi iste minima? Minima quidem
                natus molestiae.
              </Text>
              <Text style={Carrinho.texto3}>R$291,00</Text>
            </View>
          </View>
        </View>

        <View style={Carrinho.container1}>
          <View style={Carrinho.imagem}>
            <Image
              style={Carrinho.imagempc}
              source={{ uri: require("../imagens/mesa9.jpg") }}
            ></Image>
          </View>
          <View style={Carrinho.container2}>
            <View>
              <Text style={Carrinho.texto1}>Lorem ipsum dolor sit.</Text>
              <Text style={Carrinho.texto2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio harum ducimus maxime nisi iste minima? Minima quidem
                natus molestiae.
              </Text>
              <Text style={Carrinho.texto3}>R$291,00</Text>
            </View>
          </View>
        </View>
    </View>
    </ScrollView>
  );
};
