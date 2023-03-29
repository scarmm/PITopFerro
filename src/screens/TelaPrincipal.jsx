import { useNavigation } from "@react-navigation/native";
import { Image, Text, TextInput, View } from "react-native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import { principas } from "../lib/principas";
import { TelaAjuda } from "./TelaAjuda";
import { TelaConfigura } from "./TelaConfigura";
import { TelaCarrinho } from "./TelaCarrinho";
import Carousel from "react-native-reanimated-carousel";
import {telaLogin, TelaLogin} from "./TelaLogin"

const Tabs = AnimatedTabBarNavigator();
export function TabsNav() {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      appearance={{
        floating: true,
        tabBarBackground: "#34271F",
        dotSize: "small",
        whenActiveShow: "icon-only",
      }}
      tabBarOptions={{
        activeTintColor: "white",
        activeBackgroundColor: "#45352b",
      }}
    >
      <Tabs.Screen
        name="Principal"
        component={TelaPrincipal2}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon3
              name="ios-home"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Carrinho"
        component={TelaCarrinho}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon2
              name="shopping-cart"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="User"
        component={telaLogin}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon2
              name="user"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Configuração"
        component={TelaConfigura}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon2
              name="settings"
              size={size ? size : 24}
              color={focused ? color : "#fff"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
export const TelaPrincipal = ({}) => {
  return <TabsNav />;
};
const images = [
  require("../imagens/gatao.png"),
  require("../imagens/salaa.png"),
  require("../imagens/sala.png"),
];

const TelaPrincipal2 = ({}) => {
  return (
    <View style={principas.tela}>
      <View style={principas.carrosa}>
        <Carousel
          style={principas.carrosa2}
          loop
          width={185 * 2}
          height={350 / 2}
          autoPlay={true}
          data={[images]}
          scrollAnimationDuration={1000}
          renderItem={({ images }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
                borderRadius:"30px",
             
              }}
            >
              <Image style={principas.image} source={{uri: require("../imagens/salaa.png")}}/>
            </View>
          )}
        />
      </View>

      <View style={principas.circulosfora}>
        <View style={[principas.circulos, principas.shadowProp]}>
          <Icon3.Button
            style={principas.iconebotao}
            name="bed-outline"
            backgroundColor="none"
            color={"black"}
            size={30}
            onPress={() => navigation.navigate("TelaDormitorio")}
          />
        </View>
        <View style={[principas.circulos, principas.shadowProp]}>
          <Icon4.Button
            style={principas.iconebotao}
            name="sofa-outline"
            backgroundColor="none"
            color={"black"}
            size={30}
            onPress={() => navigation.navigate("TelaSaladeEstar")}
          />
        </View>
        <View style={[principas.circulos, principas.shadowProp]}>
          <Icon.Button
            style={principas.iconebotao}
            name="kitchen"
            backgroundColor="none"
            color={"black"}
            size={30}
            onPress={() => navigation.navigate("TelaCozinha")}
          ></Icon.Button>
        </View>
        <View style={[principas.circulos, principas.shadowProp]}>
          <Icon4.Button
            style={principas.iconebotao}
            name="image-frame"
            backgroundColor="none"
            color={"black"}
            size={30}
            onPress={() => navigation.navigate("TelaDecoracao")}
          ></Icon4.Button>
        </View>
      </View>
    </View>
  );
};