import { Image, Pressable, View } from "react-native";
import { Text } from "react-native";
import { styles } from "../lib/PreCompra";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native-web";

export const telaPreCompra = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#F3ECE8" }}>
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.imagem}>
            <Image
              style={styles.imagempc}
              source={{ uri: require("../imagens/mesa9.jpg") }}
            ></Image>
          </View>
          <View style={styles.container2}>
            <View>
              <Text style={styles.texto1}>Lorem ipsum dolor sit.</Text>
              <Text style={styles.texto2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio harum ducimus maxime nisi iste minima? Minima quidem
                natus molestiae.
              </Text>
              <Text style={styles.texto3}>R$291,00</Text>
            </View>
          </View>
        </View>

        <View style={styles.todosbotoes}>
          <Icon.Button
            onPress={() => navigation.navigate("Localização")}
            style={styles.botoes}
            name="shopping-bag"
            size={18}
            backgroundColor="none"
          >
            Comprar
          </Icon.Button>

          <Icon.Button
            onPress={() => navigation.navigate("Carrinho1")}
            style={styles.botoes}
            name="cart-plus"
            size={18}
            backgroundColor="none"
          >
            Carrinho
          </Icon.Button>
        </View>

        <View
          style={{ alignItems: "flex-start", width: "100%", paddingLeft: 20 }}
        >
          <Text style={styles.textotitulo}>Produtos Semelhantes</Text>
        </View>

        <View style={styles.containerprodutos}>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={styles.containerboxs}>
              <View style={styles.boxs}>
                <View style={styles.imgbox1}>
                  <Image
                    style={styles.imgbox}
                    source={{ uri: require("../imagens/mesa9.jpg") }}
                  ></Image>
                </View>
                <Text style={styles.boxstext}>Lorem Ipsum Lorem</Text>
                <Text style={styles.boxstext1}>
                  Lorem Ipsum Lorem Ipsum Lorem
                </Text>
                <Text style={styles.boxstext2}>R$234,50</Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={styles.containerboxs}>
              <View style={styles.boxs}>
                <View style={styles.imgbox1}>
                  <Image
                    style={styles.imgbox}
                    source={{ uri: require("../imagens/mesa9.jpg") }}
                  ></Image>
                </View>
                <Text style={styles.boxstext}>Lorem Ipsum Lorem</Text>
                <Text style={styles.boxstext1}>
                  Lorem Ipsum Lorem Ipsum Lorem
                </Text>
                <Text style={styles.boxstext2}>R$234,50</Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={styles.containerboxs}>
              <View style={styles.boxs}>
                <View style={styles.imgbox1}>
                  <Image
                    style={styles.imgbox}
                    source={{ uri: require("../imagens/mesa9.jpg") }}
                  ></Image>
                </View>
                <Text style={styles.boxstext}>Lorem Ipsum Lorem</Text>
                <Text style={styles.boxstext1}>
                  Lorem Ipsum Lorem Ipsum Lorem
                </Text>
                <Text style={styles.boxstext2}>R$234,50</Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={styles.containerboxs}>
              <View style={styles.boxs}>
                <View style={styles.imgbox1}>
                  <Image
                    style={styles.imgbox}
                    source={{ uri: require("../imagens/mesa9.jpg") }}
                  ></Image>
                </View>
                <Text style={styles.boxstext}>Lorem Ipsum Lorem</Text>
                <Text style={styles.boxstext1}>
                  Lorem Ipsum Lorem Ipsum Lorem
                </Text>
                <Text style={styles.boxstext2}>R$234,50</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
