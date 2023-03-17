import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native"
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import  Icon  from "react-native-vector-icons/MaterialIcons";
import  Icon2  from "react-native-vector-icons/Feather";
import  Icon3  from "react-native-vector-icons/Ionicons";
import { principas } from "../lib/principas"
import { TelaAjuda } from "./TelaAjuda";
import { TelaConfigura } from "./TelaConfigura";
import { TelaCarrinho } from "./TelaCarrinho";


const Tabs = AnimatedTabBarNavigator();
export function TabsNav() {

    const navigation = useNavigation();
    return (
        <Tabs.Navigator
            appearance={{ floating: true, tabBarBackground: "#34271F",dotSize:"small", whenActiveShow:"icon-only"  }}
            tabBarOptions={{ activeTintColor:"white",activeBackgroundColor:"#45352b" }}            
            >

         <Tabs.Screen name="Principal" component={TelaPrincipal2}   options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon3
                name="ios-home"
                size={size ? size : 24}
                color={focused ? color : "#fff"}
                focused={focused}
            />
        )
      }}/> 

            <Tabs.Screen name="Carrinho" component={TelaCarrinho}   options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon2
                name="shopping-cart"
                size={size ? size : 24}
                color={focused ? color : "#fff"}
                focused={focused}
            />
        )
      }}/> 
            <Tabs.Screen name="Ajuda_Conta" component={TelaAjuda}   options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="help"
                size={size ? size : 24}
                color={focused ? color : "#fff"}
                focused={focused}
            />
        )
      }}/> 
            <Tabs.Screen name="Configuração" component={TelaConfigura}   options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon2
                name="settings"
                size={size ? size : 24}
                color={focused ? color : "#fff"}
                focused={focused}
            />
        )
      }}/> 
                           
    
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