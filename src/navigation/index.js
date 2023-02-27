import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../lib/styles";
import { telaCadastro } from "../screens/TelaCadastro";
import { telaCadastro2 } from "../screens/TelaCadastro2";
import { TelaEsqueceuaSenha } from "../screens/TelaEsqueceuaSenha";
import { telaInicial } from "../screens/TelaInicial";
import { telaLogin } from "../screens/TelaLogin";

const Stack= createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator style={styles.tab} screenOptions={{ headerShown: false }}>
            <Stack.Screen  name={"Inicio"} component={telaInicial} />
            <Stack.Screen  name={"Login"} component={telaLogin} />
            <Stack.Screen  name={"Cadastro"} component={telaCadastro} />
            <Stack.Screen  name={"Cadastro2"} component={telaCadastro2} />
            <Stack.Screen  name={"EsqueceuaSenha"} component={TelaEsqueceuaSenha} />
        </Stack.Navigator>
    );
};
