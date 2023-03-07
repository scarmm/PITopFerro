import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native"
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { Icon } from "react-native-vector-icons/AntDesign";
import { principas } from "../lib/principas"
import { TelaAjuda } from "./TelaAjuda";
import { TelaConfigura } from "./TelaConfigura";


const Tabs = AnimatedTabBarNavigator();
export function TabsNav() {

    const navigation = useNavigation();
    return (
        <Tabs.Navigator
            appearance={{ floating: true, tabBarBackground: "#34271F",dotSize:"small"  }}
            tabBarOptions={{ activeTintColor:"white", }}
            
            >
        
            <Tabs.Screen name="Ajuda" component={TelaAjuda} /> 
                           
            <Tabs.Screen name="config" component={TelaConfigura} />
        </Tabs.Navigator>
    )

}
export const TelaPrincipal = ({ }) => {
    return (
        <TabsNav />
    )
}
const TelaPrincipal2 = ({ }) => {
    return (
        <View style={principas.tela}>
            <Text>texto daora principais</Text>
        </View>
    )
}