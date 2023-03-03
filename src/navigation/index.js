import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../lib/styles";
import { telaCadastro } from "../screens/TelaCadastro";
import { telaCadastro2 } from "../screens/TelaCadastro2";
import { TelaEsqueceuaSenha } from "../screens/TelaEsqueceuaSenha";
import { telaInicial } from "../screens/TelaInicial";
import { telaLogin } from "../screens/TelaLogin";
import { TelaIntrodução } from "../screens/TelaIntro";
import { TelaIntrodução2 } from "../screens/TelaIntro2";
import { TelaIntrodução3 } from "../screens/TelaIntro3";

const Stack= createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator style={styles.tab} screenOptions={{ headerShown: false }}>
            <Stack.Screen  name={"Introducao"} component={TelaIntrodução} />
            <Stack.Screen  name={"Introducao2"} component={TelaIntrodução2} />
            <Stack.Screen  name={"Introducao3"} component={TelaIntrodução3} />
            <Stack.Screen  name={"Inicio"} component={telaInicial} />
            <Stack.Screen  name={"Login"} component={telaLogin} />
            <Stack.Screen  name={"Cadastro"} component={telaCadastro} />
            <Stack.Screen  name={"Cadastro2"} component={telaCadastro2} />
            <Stack.Screen  name={"EsqueceuaSenha"} component={TelaEsqueceuaSenha} />
        </Stack.Navigator>
    );
};
