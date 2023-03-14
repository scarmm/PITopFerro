import { View, Text, Picker } from "react-native-web";
import { styles } from "../lib/cartao";
import Hr from "react-native-hr-component";
import { TextInput } from "react-native-paper";
import { useState } from "react";

export const TelaCadastroCartao = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastrar Cartão</Text>
      <Hr lineColor="#d3d3d3" width={50} />
    <Text style={styles.text2}>Insira as informações de cartão de crédito</Text>
    <View style={styles.botao3}>
    <TextInput
          label="Nome do Cartão"
          value={nome}
          onChangeText={setNome}
        />
       <TextInput
          label="Número do Cartão"
          value={numero}
          onChangeText={setNumero}
        />
</View>
<View style={styles.lateral}>
  <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 145}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 145}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
     
    </View>
  </View>
</View>
  
  );
};
