import { View, Text, Picker } from "react-native-web";
import { styles } from "../lib/cartao";
import Hr from "react-native-hr-component";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

export const TelaCadastroCartao = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastrar Cartão</Text>
      <Hr lineColor="#d3d3d3" width={50} />
    <Text style={styles.text2}>Insira as informações de cartão de crédito</Text>
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
          value={numero}
          onChangeText={setNumero}
        />
</View>
<View style={styles.lateral}>
  <View>
      <Picker
        selectedValue={selectedValue2}
        style={styles.caixas}
        onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
      >
        <Picker.Item label="01" />
        <Picker.Item label="02" />
        <Picker.Item label="03" />
        <Picker.Item label="04" />
        <Picker.Item label="05" />
        <Picker.Item label="06" />
        <Picker.Item label="07" />
        <Picker.Item label="08" />
        <Picker.Item label="09" />
        <Picker.Item label="10" />
        <Picker.Item label="11" />
        <Picker.Item label="12" />
      </Picker>
    </View>
    <View>
      <Picker
        selectedValue={selectedValue}
        style={styles.caixas}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>

          <Picker.Item label="2020" />
          <Picker.Item label="2021" />
          <Picker.Item label="2023"/>
          <Picker.Item label="2024" />
          <Picker.Item label="2025" />
          <Picker.Item label="2026" />
          <Picker.Item label="2027" />
          <Picker.Item label="2028" />
          <Picker.Item label="2029" />
          <Picker.Item label="2030" />
      </Picker>

     </View>
    </View>

    <View style={styles.botao}>
    <Button style={styles.btt} mode="contained" onPress={() => navigation.navigate("TelaSenhaAlterada")}>Confirmar</Button>

      </View>

   </View>

  );
};
