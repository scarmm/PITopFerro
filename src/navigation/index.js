import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../lib/styles";
import { telaInicial } from "../screens/TelaInicial";
import { telaLogin } from "../screens/TelaLogin";
import { TelaAjuda } from "../screens/TelaAjuda";
import { TelaCentral } from "../screens/TelaCentral";
import { TelaAjudaConta } from "../screens/TelaAjudaConta";
import { TelaSugestoes } from "../screens/TelaSugestoes";


const Stack= createNativeStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator style={styles.tab} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"Inicio"} component={telaInicial} />
            <Stack.Screen name={"Login"} component={telaLogin} />
            <Stack.Screen name={"Ajuda"} component={TelaAjuda} />
            <Stack.Screen name={"Central"} component={TelaCentral} />
            <Stack.Screen name={"AjudaConta"} component={TelaAjudaConta} />
            <Stack.Screen name={"Sugestões"} component={TelaSugestoes} />
        </Stack.Navigator>
    );
};
