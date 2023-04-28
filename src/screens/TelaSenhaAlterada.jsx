import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../lib/styles";
import Icon from "react-native-vector-icons/AntDesign";


export const TelaSenhaAlterada = ({ navigation }) => {
const image = require ("../imagens/senha-relogio.png")
  return (
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Image
            style={styles.img2}
            source={image}
          />
          <Text style={styles.textosenha}>Senha alterada</Text>
        </View>

        <View style={styles.containerIcones}>
          <Icon.Button
            style={styles.imgicon}
            name="login"
            size={25}
            color="#34271F"
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
            onPress={() => navigation.navigate("Login")}
          ></Icon.Button>
        </View>
      </View>
  );
};
