import { Image, Text, View } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-web";
import { ajudas } from "../lib/ajudas";
import { styles } from "../lib/styles";
export const TelaCentral = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor:"#F3ECE8"}}>
    <View style={ajudas.containerCentral}>
      <Image
        style={ajudas.img}
        source={{ uri: require("../imagens/celula-interrogation.png") }}
      />
      <Text style={ajudas.textoCentral}>Nos Diga o Que Aconteceu:</Text>
      <TextInput style={styles.input} placeholder="Escreva Aqui" />
      <Button style={styles.btt} mode="contained">
        Enviar
      </Button>
      <Text style={ajudas.textoCentral2}>
        Nós iremos lhe contactar pelo seu email cadastrado brevemente
      </Text>
    </View>
    </ScrollView>
  );
};
