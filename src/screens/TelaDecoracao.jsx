import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { principas } from "../lib/principas";
import { db } from "../lib/firebase";
import { collection, getDocs, ref } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import Skeleton from "../lib/skeleton";

export const TelaDecoracao = ({ navigation }) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setInterval(() => {
      setLoading(false);
    }, 2500);
  }, []);

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
    <ScrollView>
      <View style={principas.container}>
        <View style={principas.titulotext1}>
          <Text style={principas.titulotext1}>DECORAÇÃO</Text>
        </View>

        <Skeleton visible={loading}>
          <View style={principas.containerboxs}>
            {produtos.map((produto) => (
              <Pressable
                key={produto.id}
                onPress={() => navigation.navigate("PreCompra")}
              >
                <View style={principas.boxs}>
                  <View style={principas.imgbox1}>
                    <Image
                      style={principas.imgbox}
                      source={{ uri: produto.Imagem }}
                    ></Image>
                  </View>

                  <Text style={principas.boxstext}>{produto.Nome}</Text>
                  <Text style={principas.boxstext2}>{produto.Preço}</Text>
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
