import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { principas } from "../lib/principas";

export const TelaDecoracao = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={principas.container}>
        <View style={principas.titulotext1}>
          <Text style={principas.titulotext1}>DECORAÇÃO</Text>
        </View>
        <View style={principas.containerboxs}>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={principas.boxs}>
              <View style={principas.imgbox1}>
                <Image
                  style={principas.imgbox}
                  source={require("../imagens/mesa9.jpg")}
                ></Image>
              </View>
              <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
              <Text style={principas.boxstext1}>
                Lorem Ipsum Lorem Ipsum Lorem
              </Text>
              <Text style={principas.boxstext2}>R$234,50</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={principas.boxs}>
              <View style={principas.imgbox1}>
                <Image
                  style={principas.imgbox}
                  source={require("../imagens/mesa9.jpg")}
                ></Image>
              </View>
              <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
              <Text style={principas.boxstext1}>
                Lorem Ipsum Lorem Ipsum Lorem
              </Text>
              <Text style={principas.boxstext2}>R$234,50</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={principas.boxs}>
              <View style={principas.imgbox1}>
                <Image
                  style={principas.imgbox}
                  source={require("../imagens/mesa9.jpg")}
                ></Image>
              </View>
              <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
              <Text style={principas.boxstext1}>
                Lorem Ipsum Lorem Ipsum Lorem
              </Text>
              <Text style={principas.boxstext2}>R$234,50</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={principas.boxs}>
              <View style={principas.imgbox1}>
                <Image
                  style={principas.imgbox}
                  source={require("../imagens/mesa9.jpg")}
                ></Image>
              </View>
              <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
              <Text style={principas.boxstext1}>
                Lorem Ipsum Lorem Ipsum Lorem
              </Text>
              <Text style={principas.boxstext2}>R$234,50</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={principas.boxs}>
              <View style={principas.imgbox1}>
                <Image
                  style={principas.imgbox}
                  source={require("../imagens/mesa9.jpg")}
                ></Image>
              </View>
              <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
              <Text style={principas.boxstext1}>
                Lorem Ipsum Lorem Ipsum Lorem
              </Text>
              <Text style={principas.boxstext2}>R$234,50</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={principas.boxs}>
              <View style={principas.imgbox1}>
                <Image
                  style={principas.imgbox}
                  source={require("../imagens/mesa9.jpg")}
                ></Image>
              </View>
              <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
              <Text style={principas.boxstext1}>
                Lorem Ipsum Lorem Ipsum Lorem
              </Text>
              <Text style={principas.boxstext2}>R$234,50</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={principas.boxs}>
              <View style={principas.imgbox1}>
                <Image
                  style={principas.imgbox}
                  source={require("../imagens/mesa9.jpg")}
                ></Image>
              </View>
              <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
              <Text style={principas.boxstext1}>
                Lorem Ipsum Lorem Ipsum Lorem
              </Text>
              <Text style={principas.boxstext2}>R$234,50</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("PreCompra")}>
            <View style={principas.boxs}>
              <View style={principas.imgbox1}>
                <Image
                  style={principas.imgbox}
                  source={require("../imagens/mesa9.jpg")}
                ></Image>
              </View>
              <Text style={principas.boxstext}>Lorem Ipsum Lorem</Text>
              <Text style={principas.boxstext1}>
                Lorem Ipsum Lorem Ipsum Lorem
              </Text>
              <Text style={principas.boxstext2}>R$234,50</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
