
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { styles } from "../lib/styles";
import { telaCadastro } from "../screens/TelaCadastro";
import { telaCadastro2 } from "../screens/TelaCadastro2";
import { TelaEnvioSms } from "../screens/TelaEnvioSms";
import { TelaEsqueceuaSenha } from "../screens/TelaEsqueceuaSenha";
import { telaInicial } from "../screens/TelaInicial";
import { telaLogin } from "../screens/TelaLogin";
import { TelaAjuda } from "../screens/TelaAjuda";
import { TelaCentral } from "../screens/TelaCentral";
import { TelaAjudaConta } from "../screens/TelaAjudaConta";
import { TelaSugestoes } from "../screens/TelaSugestoes";
import { TelaEnvioEmail, } from "../screens/TelaEnvioEmail";
import { telaMudarSenha } from "../screens/TelaMudarSenha";
import { TelaSenhaAlterada } from "../screens/TelaSenhaAlterada";
import { TelaConfigura } from "../screens/TelaConfigura";
import { TelaEndereco } from "../screens/TelaEndereco";
import { TelaCartao } from "../screens/TelaCartao";
import { TelaExcluir } from "../screens/TelaExcluir";
import { TelaPrincipal } from "../screens/TelaPrincipal";
import { Image } from "react-native";
import { Searchbar } from "react-native-paper";
import { principas } from "../lib/principas";
import { TelaLocalizacao } from "../screens/TelaLocalizacao";
import { TelaCadastroCartao } from "../screens/TelaCadastroCartao";
import { useNavigation } from "@react-navigation/native";
import { TelaIntrodução } from "../screens/TelaIntro"
import { TelaIntrodução2 } from "../screens/TelaIntro2"
import { TelaIntrodução3 } from "../screens/TelaIntro3"
import { TelaPagamento } from "../screens/TelaPagamento";


import { TelaIntrodução} from "../screens/TelaIntro";
import { TelaIntrodução2} from "../screens/TelaIntro2";
import { TelaIntrodução3} from "../screens/TelaIntro3";


const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator style={styles.tab} screenOptions={{
            headerShown: true,
            headerTransparent: true,
        }}>



        <Stack.Screen name={"Principal"} component={TelaPrincipal}
            options={{
                headerStyle: { backgroundColor: "#2C2019" },
                headerTransparent: false,
                title: <Image source={require("../imagens/TF.png")} style={{ width: 50, height: 50 }} />,
                headerRight: () => (<Searchbar placeholder="Busque na TopFerro..." placeholderTextColor={"gray"} style={principas.barrapesquisa} color="#fff" />),
            }} />
  
            <Stack.Screen name={"Introducao"} component={TelaIntrodução}
                options={{
                    title: "",
                    headerShown: false,
                }}
            />
            <Stack.Screen name={"Introducao2"} component={TelaIntrodução2}
                options={{
                    title: "",
                    headerShown: false,
                }}
            />
            <Stack.Screen name={"Introducao3"} component={TelaIntrodução3}
                options={{
                    title: "",
                    headerShown: false,
                }}
            />





            <Stack.Screen name={"Inicio"} component={telaInicial}

                options={{
                    title: ""
                }}

            />

        



            <Stack.Screen name={"Ajuda"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaAjuda} />
            <Stack.Screen name={"Central"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaCentral} />
            <Stack.Screen name={"AjudaConta"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaAjudaConta} />
            <Stack.Screen name={"Sugestões"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaSugestoes} />

            <Stack.Screen name={"Login"} component={telaLogin}
                options={{
                    title: ""
                }}
            />
            <Stack.Screen name={"Cadastro"} component={telaCadastro}
                options={{
                    title: ""
                }}
            />
            <Stack.Screen name={"Cadastro2"} component={telaCadastro2}
                options={{
                    title: ""
                }}
            />
            <Stack.Screen name={"EsqueceuaSenha"} component={TelaEsqueceuaSenha}
                options={{
                    title: ""
                }}
            />
            <Stack.Screen name={"TelaEnvioSms"} component={TelaEnvioSms}
                options={{
                    title: ""
                }}
            />
            <Stack.Screen name={"TelaEnvioEmail"} component={TelaEnvioEmail}
                options={{
                    title: ""
                }}
            />
            <Stack.Screen name={"TelaMudarSenha"} component={telaMudarSenha}
                options={{
                    title: ""
                }}
            />
            <Stack.Screen name={"TelaSenhaAlterada"} component={TelaSenhaAlterada}
                options={{
                    title: ""

                }}
            />
            <Stack.Screen name={"Localização"} component={TelaLocalizacao}
                options={{
                    title: ""
                }}
            />

            <Stack.Screen name={"CadastroCartão"} component={TelaCadastroCartao}
                options={{
                    title: ""
                }}
            />


            <Stack.Screen name={"Pagamento"} component={TelaPagamento}
                options={{
                    title: ""
                }}
            />
        

            <Stack.Screen name={"Configurações"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaConfigura} />
            <Stack.Screen name={"Endereços"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaEndereco} />
            <Stack.Screen name={"Cartões"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaCartao} />
            <Stack.Screen name={"Excluir"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaExcluir} />


        </Stack.Navigator>
    );
};

