import { ImageBackground, Text, View } from "react-native";
import { intro } from "../lib/stylesIntro";
import Icon from 'react-native-vector-icons/AntDesign';

export const TelaIntrodução2 = ({ navigation }) => {
    return (
        <View style={intro.fundo}>

            <ImageBackground source={require('../imagens/salaa.png')} style={intro.backgroundImage}>
                <Text onPress={() => navigation.navigate("Inicio")}>Pular</Text>
                <Icon.Button style={intro.botico2} name="left" size={25} color="#6f7f76" backgroundColor="none" onPress={() => navigation.navigate("Introducao") } >
                </Icon.Button>
                <Icon.Button style={intro.botico} name="right" size={25} color="#6f7f76" backgroundColor="none" onPress={() => navigation.navigate("Introducao3") } >
                </Icon.Button>
            </ImageBackground>

        </View>
    )
}