import { useState } from "react";
import { Text, View } from "react-native";
import Hr from "react-native-hr-component";
import { Button, Checkbox, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import { ScrollView } from "react-native";
import { styles } from "../lib/config";

export const TelaLocalizacaoMimic = ({navigation}) => {
  const [nome, setNome] = useState("");
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [nome3, setNome3] = useState("");
  const [nome4, setNome4] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={{backgroundColor:"#F3ECE8"}}>
      <View style={styles.container}>
        <View style={styles.local}>
          <Icon.Button
            name="location-pin"
            size={21}
            style={styles.botao2}
            backgroundColor="none"
            mode="contained"
            onPress={() => navigation.navigate("AtivaLoca")}
          >
            Ativar a Localização
          </Icon.Button>
        </View>
        <Hr lineColor="#d3d3d3" width={50} text="OU" />
        <View>
          <TextInput
            style={styles.botao3}
            label="CEP"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.botao3}
            label="Cidade"
            value={nome1}
            onChangeText={setNome1}
          />
          <TextInput
            style={styles.botao3}
            label="Bairro"
            value={nome2}
            onChangeText={setNome2}
          />
          <TextInput
            style={styles.botao3}
            label="Endereço"
            value={nome3}
            onChangeText={setNome3}
          />
          <TextInput
            style={styles.botao3}
            label="Número"
            value={nome4}
            onChangeText={setNome4}
          />
          <View style={styles.check}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.textOpa}>Tornar esse endereço padrão</Text>
          </View>
        </View>
        <View style={styles.local}>
          <Button
            style={styles.botao2}
            mode="contained"
            onPress={() => navigation.navigate("Endereços")}
          >
            Salvar
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
