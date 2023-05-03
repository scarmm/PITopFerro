import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Hr from "react-native-hr-component";
import { Button, Checkbox, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Entypo";
import { ScrollView } from "react-native";
import { styles } from "../lib/config";




export const TelaLocalizacao = ({navigation}) => {


  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          setCidade(data.localidade);
          setBairro(data.bairro);
          setEndereco(data.logradouro);
        })
        .catch(error => console.error(error));
    }
  }, [cep]);

  const handleSave = () => {
    // Lógica para salvar o endereço
  };

  return (
    <ScrollView style={{backgroundColor:"#F3ECE8"}}>
      <View style={styles.container}>
        <View style={styles.local}>
          <Icon.Button
            name="location-pin"
            size={21}
            style={styles.botao2}
            backgroundColor={"rgba(0, 0, 0, 0.0)"}
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
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric"
            maxLength={8}
         
          />
          <TextInput
            style={styles.botao3}
            label="Cidade"
            value={cidade}
            onChangeText={setCidade}
            editable={false}
          />
          <TextInput
            style={styles.botao3}
            label="Bairro"
            value={bairro}
            onChangeText={setBairro}
            editable={false}
          />
          <TextInput
            style={styles.botao3}
            label="Endereço"
            value={endereco}
            onChangeText={setEndereco}
            editable={false}
          />
          <TextInput
            style={styles.botao3}
            label="Número"
            value={numero}
            onChangeText={setNumero}
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
            onPress={() => navigation.navigate("Pagamento")}
          >
            Salvar
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};
