import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../lib/styles";
import { TelaCadastro } from "../screens/TelaCadastro";
import { TelaCadastro2 } from "../screens/TelaCadastro2";
import { TelaEnvioSms } from "../screens/TelaEnvioSms";
import { TelaEsqueceuaSenha } from "../screens/TelaEsqueceuaSenha";
import { TelaInicial } from "../screens/TelaInicial";
import { TelaLogin } from "../screens/TelaLogin";
import { TelaAjuda } from "../screens/TelaAjuda";
import { TelaCentral } from "../screens/TelaCentral";
import { TelaAjudaConta } from "../screens/TelaAjudaConta";
import { TelaSugestoes } from "../screens/TelaSugestoes";
import { TelaEnvioEmail } from "../screens/TelaEnvioEmail";
import { TelaMudarSenha } from "../screens/TelaMudarSenha";
import { TelaSenhaAlterada } from "../screens/TelaSenhaAlterada";
import { TelaConfigura } from "../screens/TelaConfigura";
import { TelaEndereco } from "../screens/TelaEndereco";
import { TelaCartao } from "../screens/TelaCartao";
import { TelaExcluir } from "../screens/TelaExcluir";
import { TelaPrincipal } from "../screens/TelaPrincipal";
import { Image, Pressable } from "react-native";
import { Searchbar } from "react-native-paper";
import { principas } from "../lib/principas";
import { TelaLocalizacao } from "../screens/TelaLocalizacao";
import { TelaCadastroCartao } from "../screens/TelaCadastroCartao";
import { TelaIntrodução } from "../screens/TelaIntro";
import { TelaIntrodução2 } from "../screens/TelaIntro2";
import { TelaIntrodução3 } from "../screens/TelaIntro3";
import { TelaPagamento } from "../screens/TelaPagamento";
import { TelaObrigado } from "../screens/TelaObrigado";
import { TelaDormitorio } from "../screens/TelaDormitorio";
import { TelaSaladeEstar } from "../screens/TelaSaladeEstar";
import { TelaCozinha } from "../screens/TelaCozinha";
import { TelaDecoracao } from "../screens/TelaDecoracao";
import { TelaPreCompra } from "../screens/TelaPreCompra";
import { TelaResultado } from "../screens/TelaResultado";
import { TelaCarrinho1 } from "../screens/TelaCarrinho1";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { TelaLocalizacaoMimic } from "../screens/TelaLocalizacaoMimic";
import { TelaCadastroCartaoMimic } from "../screens/TelaCadastroCartaoMimic";
import { TelaPedido } from "../screens/TelaPedido";

const Stack = createNativeStackNavigator();
export const RootNavigation = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <NavigationContainer>
      <Stack.Navigator
        style={styles.tab}
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
        }}
        initialRouteName="Pricipal"
      >
        <Stack.Screen
          name={"Introducao"}
          component={TelaIntrodução}
          options={{
            title: "",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Introducao2"}
          component={TelaIntrodução2}
          options={{
            title: "",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Introducao3"}
          component={TelaIntrodução3}
          options={{
            title: "",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Principal"}
          component={TelaPrincipal}
          options={{
            headerStyle: { backgroundColor: "#2C2019" },
            headerTransparent: false,
            headerLeft: () => null,
            title: (
              <Pressable onPress={() => navigation.navigate("Principal")}>
                <Image
                  source={require("../imagens/TF.png")}
                  style={{ width: 40, height: 40, alignItems: "center" }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Searchbar
                placeholder="Busque na TopFerro..."
                placeholderTextColor={"#888888"}
                style={principas.barrapesquisa}
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name={"Dormitorio"}
          component={TelaDormitorio}
          options={{
            headerStyle: { backgroundColor: "#2C2019" },
            headerTransparent: false,
            headerLeft: () => null,
            title: (
              <Pressable onPress={() => navigation.navigate("Principal")}>
                <Image
                  source={require("../imagens/TF.png")}
                  style={{ width: 40, height: 40, alignItems: "center" }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Searchbar
                placeholder="Busque na TopFerro..."
                placeholderTextColor={"gray"}
                style={principas.barrapesquisa}
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name={"Sala"}
          component={TelaSaladeEstar}
          options={{
            headerStyle: { backgroundColor: "#2C2019" },
            headerTransparent: false,
            headerLeft: () => null,
            title: (
              <Pressable onPress={() => navigation.navigate("Principal")}>
                <Image
                  source={require("../imagens/TF.png")}
                  style={{ width: 40, height: 40, alignItems: "center" }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Searchbar
                placeholder="Busque na TopFerro..."
                placeholderTextColor={"gray"}
                style={principas.barrapesquisa}
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name={"Cozinha"}
          component={TelaCozinha}
          options={{
            headerStyle: { backgroundColor: "#2C2019" },
            headerTransparent: false,
            headerLeft: () => null,
            title: (
              <Pressable onPress={() => navigation.navigate("Principal")}>
                <Image
                  source={require("../imagens/TF.png")}
                  style={{ width: 40, height: 40, alignItems: "center" }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Searchbar
                placeholder="Busque na TopFerro..."
                placeholderTextColor={"gray"}
                style={principas.barrapesquisa}
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name={"Decoração"}
          component={TelaDecoracao}
          options={{
            headerStyle: { backgroundColor: "#2C2019" },
            headerTransparent: false,
            headerLeft: () => null,
            title: (
              <Pressable onPress={() => navigation.navigate("Principal")}>
                <Image
                  source={require("../imagens/TF.png")}
                  style={{ width: 40, height: 40, alignItems: "center" }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Searchbar
                placeholder="Busque na TopFerro..."
                placeholderTextColor={"gray"}
                style={principas.barrapesquisa}
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name={"Resultados"}
          component={TelaResultado}
          options={{
            headerStyle: { backgroundColor: "#2C2019" },
            headerTransparent: false,
            headerLeft: () => null,
            title: (
              <Pressable onPress={() => navigation.navigate("Principal")}>
                <Image
                  source={require("../imagens/TF.png")}
                  style={{ width: 40, height: 40, alignItems: "center" }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Searchbar
                placeholder="Busque na TopFerro..."
                placeholderTextColor={"gray"}
                style={principas.barrapesquisa}
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name={"PreCompra"}
          component={TelaPreCompra}
          options={{
            headerStyle: { backgroundColor: "#2C2019" },
            headerTransparent: false,
            headerLeft: () => null,
            title: (
              <Pressable onPress={() => navigation.navigate("Principal")}>
                <Image
                  source={require("../imagens/TF.png")}
                  style={{ width: 40, height: 40, alignItems: "center" }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Searchbar
                placeholder="Busque na TopFerro..."
                placeholderTextColor={"gray"}
                style={principas.barrapesquisa}
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name={"Carrinho1"}
          component={TelaCarrinho1}
          options={{
            headerStyle: { backgroundColor: "#2C2019" },
            headerTransparent: false,
            headerLeft: () => null,
            title: (
              <Pressable onPress={() => navigation.navigate("Principal")}>
                <Image
                  source={require("../imagens/TF.png")}
                  style={{ width: 40, height: 40, alignItems: "center" }}
                />
              </Pressable>
            ),
            headerRight: () => (
              <Searchbar
                placeholder="Busque na TopFerro..."
                placeholderTextColor={"gray"}
                style={principas.barrapesquisa}
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen
          name={"Pagamento"}
          component={TelaPagamento}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"Pedido"}
          component={TelaPedido}
          options={{
            title: "",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"Ajuda"}
          options={{
            headerTintColor: "white",
            headerTransparent: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#2C2019" },
            headerTitleStyle: { color: "white" },
          }}
          component={TelaAjuda}
        />

        <Stack.Screen
          name={"Central"}
          options={{
            headerTintColor: "white",
            headerTransparent: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#2C2019" },
            headerTitleStyle: { color: "white" },
          }}
          component={TelaCentral}
        />

        <Stack.Screen
          name={"AjudaConta"}
          options={{
            headerTintColor: "white",
            headerTransparent: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#2C2019" },
            headerTitleStyle: { color: "white" },
          }}
          component={TelaAjudaConta}
        />

        <Stack.Screen
          name={"Sugestões"}
          options={{
            headerTintColor: "white",
            headerTransparent: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#2C2019" },
            headerTitleStyle: { color: "white" },
          }}
          component={TelaSugestoes}
        />

        <Stack.Screen
          name={"Login"}
          component={TelaLogin}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"Cadastro"}
          component={TelaCadastro}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"Cadastro2"}
          component={TelaCadastro2}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"EsqueceuaSenha"}
          component={TelaEsqueceuaSenha}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"TelaEnvioSms"}
          component={TelaEnvioSms}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"TelaEnvioEmail"}
          component={TelaEnvioEmail}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"TelaMudarSenha"}
          component={TelaMudarSenha}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"TelaSenhaAlterada"}
          component={TelaSenhaAlterada}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"Localização"}
          component={TelaLocalizacao}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"LocalizaçãoMimic"}
          component={TelaLocalizacaoMimic}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"CadastroCartão"}
          component={TelaCadastroCartao}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"CadastroCartãoMimic"}
          component={TelaCadastroCartaoMimic}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"Obrigado"}
          component={TelaObrigado}
          options={{
            title: "",
          }}
        />

        <Stack.Screen
          name={"Configurações"}
          options={{
            headerTintColor: "white",
            headerTransparent: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#2C2019" },
            headerTitleStyle: { color: "white" },
          }}
          component={TelaConfigura}
        />

        <Stack.Screen
          name={"Endereços"}
          options={{
            headerTintColor: "white",
            headerTransparent: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#2C2019" },
            headerTitleStyle: { color: "white" },
          }}
          component={TelaEndereco}
        />

        <Stack.Screen
          name={"Cartões"}
          options={{
            headerTintColor: "white",
            headerTransparent: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#2C2019" },
            headerTitleStyle: { color: "white" },
          }}
          component={TelaCartao}
        />

        <Stack.Screen
          name={"Excluir"}
          options={{
            headerTintColor: "white",
            headerTransparent: false,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#2C2019" },
            headerTitleStyle: { color: "white" },
          }}
          component={TelaExcluir}
        />

        <Stack.Screen
          name={"Inicio"}
          component={TelaInicial}
          options={{
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
