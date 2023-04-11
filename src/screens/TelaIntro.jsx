import { ImageBackground, Text, View, } from "react-native";
import { intro } from "../lib/stylesIntro";
import Icon from 'react-native-vector-icons/AntDesign';

export const TelaIntrodução = ({ navigation }) => {
    return (
        <View style={intro.fundo}>

            <ImageBackground source={require('../imagens/banheirocerto.png')} style={intro.backgroundImage}>
                <Text style={intro.pular} onPress={() => navigation.navigate("Login")}>Pular</Text>
                <Icon.Button style={intro.botico} name="right" size={25} color="#6f7f76" backgroundColor="none" onPress={() => navigation.navigate("Introducao2")} >
                </Icon.Button>
                <Text style={intro.TextIntro}>Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Fringilla phasellus faucibus scelerisque eleifend donec.</Text>
            </ImageBackground>
        </View>
    )
}