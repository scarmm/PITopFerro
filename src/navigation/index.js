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
import { TelaEnvioEmail,} from "../screens/TelaEnvioEmail";
import { telaMudarSenha } from "../screens/TelaMudarSenha";
import { TelaSenhaAlterada } from "../screens/TelaSenhaAlterada";


const Stack= createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator style={styles.tab} screenOptions={{ headerShown: false }}>

        
            <Stack.Screen  name={"Ajuda"} options={{ headerShown: true }} component={TelaAjuda} />
            <Stack.Screen  name={"Inicio"} component={telaInicial} />
            <Stack.Screen  name={"Sugestões"} component={TelaSugestoes} />
            <Stack.Screen  name={"AjudaConta"} component={TelaAjudaConta} />
            <Stack.Screen  name={"Central"} component={TelaCentral} />
            <Stack.Screen  name={"Login"} component={telaLogin} />
            <Stack.Screen  name={"Cadastro"} component={telaCadastro} />
            <Stack.Screen  name={"Cadastro2"} component={telaCadastro2} />
            <Stack.Screen  name={"EsqueceuaSenha"} component={TelaEsqueceuaSenha} />
            <Stack.Screen  name={"TelaEnvioSms"} component={TelaEnvioSms} />
            <Stack.Screen  name={"TelaEnvioEmail"} component={TelaEnvioEmail} />
            <Stack.Screen  name={"TelaMudarSenha"} component={telaMudarSenha} />
            <Stack.Screen  name={"TelaSenhaAlterada"} component={TelaSenhaAlterada} />

        </Stack.Navigator>
    );
};
