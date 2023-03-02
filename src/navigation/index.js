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
import { TelaConfigura } from "../screens/TelaConfigura";
import { TelaEndereco } from "../screens/TelaEndereco";
import { TelaCartao } from "../screens/TelaCartao";
import { TelaExcluir } from "../screens/TelaExcluir";


const Stack= createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator style={styles.tab} screenOptions={{ headerShown: false }}>

        
            <Stack.Screen  name={"Inicio"} component={telaInicial} />
            <Stack.Screen name={"Central"} component={TelaCentral} />
            <Stack.Screen name={"Ajuda"} component={TelaAjuda} />
            <Stack.Screen name={"AjudaConta"} component={TelaAjudaConta} />
            <Stack.Screen name={"Sugestões"} component={TelaSugestoes} />

            <Stack.Screen  name={"Login"} component={telaLogin} />
            <Stack.Screen  name={"Cadastro"} component={telaCadastro} />
            <Stack.Screen  name={"Cadastro2"} component={telaCadastro2} />
            <Stack.Screen  name={"EsqueceuaSenha"} component={TelaEsqueceuaSenha} />
            <Stack.Screen  name={"TelaEnvioSms"} component={TelaEnvioSms} />
            <Stack.Screen  name={"TelaEnvioEmail"} component={TelaEnvioEmail} />
            <Stack.Screen  name={"TelaMudarSenha"} component={telaMudarSenha} />
            <Stack.Screen  name={"TelaSenhaAlterada"} component={TelaSenhaAlterada} />
            <Stack.Screen options={{ headerShown: true }} name={"Configurações"} component={TelaConfigura} />
            <Stack.Screen options={{ headerShown: true }} name={"Endereços"} component={TelaEndereco} />
            <Stack.Screen options={{ headerShown: true }} name={"Cartões"} component={TelaCartao} />
            <Stack.Screen options={{ headerShown: true }} name={"Excluir"} component={TelaExcluir} />
        </Stack.Navigator>
    );
};
