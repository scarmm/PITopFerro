import { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text, Picker } from "react-native";
import { styles } from "../lib/cartao";

export const TelaCadastroCartao = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [number, setNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastrar Cartão</Text>
      <View>
    <Text style={styles.linha}></Text>
    </View>
    <Text style={styles.text2}>insira as informações do seu cartão</Text>
    <View>
      <TextInput
      style={styles.botao3}
          label="Nome do Cartão"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
        style={styles.botao3}
          label="Número do Cartão"
          value={number}
          onChangeText={setNumber}
        />
    </View>
    <View>
      <Text style={styles.text3}>
        Data de Expiração
      </Text>
      <View style={styles.select}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="01" />
        <Picker.Item label="02" />
        <Picker.Item label="03" />
      </Picker>
      </View>
    </View>
   </View>

  );
};
