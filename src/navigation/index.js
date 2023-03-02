import { createNativeStackNavigator } from "@react-navigation/native-stack";
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



const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator style={styles.tab} screenOptions={{
            headerShown: true,
            headerTransparent: true,
        }}>

            <Stack.Screen name={"Inicio"} component={telaInicial}

                options={{
                    title: ""
                }}
            />
            <Stack.Screen name={"Ajuda"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: {color: "white" } }} component={TelaAjuda} />
            <Stack.Screen name={"Central"} options={{ headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaCentral} />
            <Stack.Screen name={"AjudaConta"} options={{headerTintColor: 'white', headerTransparent: false, headerTitleAlign: 'center', headerStyle: { backgroundColor: "#2C2019" }, headerTitleStyle: { color: "white" } }} component={TelaAjudaConta} />
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

        </Stack.Navigator>
    );
};
