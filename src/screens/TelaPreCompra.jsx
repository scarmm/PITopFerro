import React, { useState, useEffect } from "react";
import { Image, Pressable, View } from "react-native";
import { Text } from "react-native";
import { styles } from "../lib/PreCompra";
import { principas } from "../lib/principas";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native";
import { db } from "../lib/firebase";
import { collection, doc, getDoc, getDocs, ref } from "firebase/firestore";
import Skeleton2 from "../lib/skeleton2";
import Skeleton from "../lib/skeleton";

export const TelaPreCompra = ({ navigation, route }) => {
  const [produtos, setProdutos] = useState([]);
  const [idCompra, setIdCompra] = useState(route.params.idCompra);
  const [Nome, setNome] = useState("");
  const [Preço, setPreço] = useState("");
  const [Imagem, setImagem] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [Altura, setAltura] = useState("");
  const [Largura, setLargura] = useState("");
  const [Profundidade, setProfundidade] = useState("");
  const [Material, setMaterial] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (route.params.idCompra !== idCompra) {
      setIdCompra(route.params.idCompra);
    }
  });

  useEffect(() => {
    let timer = setInterval(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    const fetchPreviousContent = async () => {
      try {
        const docRef = doc(db, "Produtos", route.params.idCompra);

        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNome(docSnap.data().Nome);
          setImagem(docSnap.data().Imagem);
          setPreço(docSnap.data().Preço);
          setDescricao(docSnap.data().Descricao);
          setAltura(docSnap.data().Altura);
          setLargura(docSnap.data().Largura);
          setProfundidade(docSnap.data().Profundidade);
          setMaterial(docSnap.data().Material);
        }
      } catch (error) {
        console.error("Erro ao buscar conteúdo anterior: ", error.message);
      }
    };

    fetchPreviousContent();
  }, [route.params.idCompra]);

  useEffect(() => {
    getDocs(collection(db, "Produtos")).then((querySnapshot) => {
      const produtos = [];
      const { idCompra, setIdCompra } = [""];
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
      <View style={principas.tela}>
        <View style={styles.container}>
          <Skeleton2 visible={loading}>
            <View style={styles.container1}>
              <View style={styles.imagem}>
                <Image style={styles.imagempc} source={{ uri: Imagem }}></Image>
              </View>
              <View style={styles.container2}>
                <View>
                  <Text style={styles.texto1}>{Nome}</Text>
                  <Text style={styles.texto3}>{Descricao}</Text>
                  <Text style={styles.texto2}>
                    Medidas: {Altura} x {Largura} x {Profundidade}, {Material}
                  </Text>
                  <Text style={styles.texto4}>{Preço}</Text>
                </View>
              </View>
            </View>
          </Skeleton2>
        </View>

        <View style={styles.todosbotoes}>
          <Icon.Button
            onPress={() => navigation.navigate("Localização")}
            style={styles.botoes}
            name="shopping-bag"
            size={18}
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
            overflow="hidden"
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

        <Skeleton visible={loading}>
          <View style={principas.containerboxsSkeleton}>
            {produtos.map((produto) => (
              <Pressable
                key={produto.id}
                onPress={() =>
                  navigation.navigate("PreCompra", { idCompra: produto.id })
                }
              >
                <View style={principas.boxs}>
                  <View style={principas.imgbox1}>
                    <Image
                      style={principas.imgbox}
                      source={{ uri: produto.Imagem }}
                    ></Image>
                  </View>

                  <Text style={principas.boxstext}>{produto.Nome}</Text>
                  <Text style={principas.boxstext1}>{produto.Preço}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        </Skeleton>
        <Skeleton visible={loading}></Skeleton>
        <Skeleton visible={loading}></Skeleton>
        <Skeleton visible={loading}></Skeleton>
      </View>
    </ScrollView>
  );
};
