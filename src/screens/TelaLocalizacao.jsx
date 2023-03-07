import { useState } from "react";
import { Text, View } from "react-native";
import Hr from "react-native-hr-component";
import { Button, Checkbox, TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/Entypo';
import { styles } from "../lib/config";

export const TelaLocalizacao = () => {
  const [nome, setNome] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.local}>
          <Icon.Button name="location-pin" size={21}  style={styles.botao2} backgroundColor="none" 
          mode="contained"
          onPress={() => navigation.navigate("AtivaLoca")}>Ativar a Localização
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
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.botao3}
          label="Bairro"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.botao3}
          label="Endereço"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.botao3}
          label="Número"
          value={nome}
          onChangeText={setNome}
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
          onPress={() => navigation.navigate("Salvar")}>Salvar</Button>
      </View>
    </View>
  );
};
