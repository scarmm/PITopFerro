import React, { useState, useEffect } from "react";
import { Image, Pressable, View } from "react-native";
import { Text } from "react-native";
import { styles } from "../lib/PreCompra";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native";
import { db } from "../lib/firebase";
import { collection, getDocs, ref } from "firebase/firestore";

export const TelaPreCompra = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "Produtos")).then((querySnapshot) => {
      const produtos = [];
      querySnapshot.forEach((doc) => {
        const {
          Nome: Nome,
          Descricao: Descricao,
          Altura: Altura,
          Imagem: Imagem,
          Largura: Largura,
          Material: Material,
          Preço: Preço,
          Profundidade: Profundidade,
        } = doc.data();
        produtos.push({
          id: doc.id,
          Nome,
          Descricao,
          Altura,
          Imagem,
          Largura,
          Material,
          Preço,
          Profundidade,
        });
      });
      setProdutos(produtos);
      console.log(produtos);
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#F3ECE8" }}>
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.imagem}>
            <Image
              style={styles.imagempc}
              source={require("../imagens/prateleira.png")}
            ></Image>
          </View>
          <View style={styles.container2}>
            <View>
              <Text style={styles.texto1}>Prateleira de Exposição</Text>
              <Text style={styles.texto2}>
                Estante Multiuso Decorativa com 4 prateleiras estilo Artany Star
                Freijó
              </Text>
              <Text style={styles.texto3}>R$300,00</Text>
            </View>
          </View>
        </View>

        <View style={styles.todosbotoes}>
          <Icon.Button
            onPress={() => navigation.navigate("Localização")}
            style={styles.botoes}
            name="shopping-bag"
            size={18}
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
          >
            Comprar
          </Icon.Button>

          <Icon.Button
            onPress={() => navigation.navigate("Carrinho1")}
            style={styles.botoes}
            name="cart-plus"
            size={18}
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
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
          {produtos.map((produto) => (
            <Pressable
              key={produto.id}
              onPress={() => navigation.navigate("PreCompra")}
            >
              <View style={styles.containerboxs}>
                <View style={styles.boxs}>
                  <View style={styles.imgbox1}>
                    <Image
                      style={styles.imgbox}
                      source={{ uri: produto.Imagem }}
                    ></Image>
                  </View>
                  <Text style={styles.boxstext}>{produto.Nome}</Text>

                  <Text style={styles.boxstext2}>{produto.Preço}</Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
