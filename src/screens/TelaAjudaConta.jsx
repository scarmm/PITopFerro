import { Image, ScrollView, Text, View } from "react-native";
import { ajudas } from "../lib/ajudas";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
export const TelaAjudaConta = ({ navigation }) => {
  return (
    <ScrollView style={{backgroundColor:"#F3ECE8"}}>
      <View style={ajudas.containerAjudaConta}>
        <Image
          style={ajudas.imgajudaconta}
          source={{ uri: require("../imagens/Escudo-i.png") }}
        />
        <Text style={ajudas.textoajudaconta}>O que Aconteceu?</Text>
        <Collapse>
          <CollapseHeader>
            <View>
              <Text style={ajudas.textoajudaconta2}>
                Entraram em minha conta.
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>-Mude sua senha imediatamente.</Text>
            <Text>-Averigue seu email para alertas de login.</Text>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader>
            <View>
              <Text style={ajudas.textoajudaconta2}>
                Tentaram Roubar minha conta.
              </Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>-Mude sua senha imediatamente.</Text>
            <Text>-Averigue seu email para alertas de login.</Text>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader>
            <View>
              <Text style={ajudas.textoajudaconta2}>Esqueci minha senha.</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>-Mude sua senha imediatamente.</Text>
            <Text>-Averigue seu email para alertas de login.</Text>
          </CollapseBody>
        </Collapse>
      </View>
    </ScrollView>
  );
};
{
  /* <Text style={ajudas.textoajudaconta}>O que Aconteceu?</Text>
<Text style={ajudas.textoajudaconta2}>Entraram em minha conta.</Text>
<Text style={ajudas.textoajudaconta2}>Tentaram roubar minha conta.</Text>
<Text style={ajudas.textoajudaconta2}>Esqueci minha senha.</Text> */
}
