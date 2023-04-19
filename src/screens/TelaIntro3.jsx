import { ImageBackground, Text, View } from "react-native";
import { intro } from "../lib/stylesIntro";
import Icon from 'react-native-vector-icons/AntDesign';

export const TelaIntrodução3 = ({ navigation }) => {
    return (
        <View style={intro.fundo}>

            <ImageBackground source={require('../imagens/quarto.png')} style={intro.backgroundImage}>
                <Text style={intro.pular} onPress={() => navigation.navigate("Login")}>Pular</Text>
                <View style={intro.setas}>
                <Icon.Button style={intro.botico2} name="left" size={25} color="#6f7f76" backgroundColor="none" onPress={() => navigation.navigate("Introducao2") } >
                </Icon.Button>
                <Icon.Button style={intro.botico} name="right" size={25} color="#6f7f76" backgroundColor="none" onPress={() => navigation.navigate("Login") } >
                </Icon.Button>
                </View>
                <Text style={intro.TextIntro}>Se você está procurando por móveis que são confortáveis, estilosos e duráveis, você veio ao lugar certo! </Text>
            </ImageBackground>

        </View>
    )
}