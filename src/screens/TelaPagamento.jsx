import { useState } from "react";
import { View, Text } from "react-native";
import Hr from "react-native-hr-component";
import { Button, RadioButton } from "react-native-paper";
import { styles } from "../lib/pagamento";

export const TelaPagamento = () => {
  const [selectedValue, setSelectedValue] = useState("first");

  const handleValueChange = (newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Selecione o método de pagamento</Text>
      </View>

      <Hr lineColor="#d3d3d3" width={50} />

      <View style={styles.pagamentoL}>
        <RadioButton.Group
          onValueChange={handleValueChange}
          value={selectedValue}
        >
          <Hr lineColor="#d3d3d3" width={50} />
          <RadioButton.Item label="PIX" value="first" />
          <Hr lineColor="#d3d3d3" width={50} />
          <RadioButton.Item label="Cartão (Crédito)" value="second" />
          <Button
            style={styles.pagamento}
            mode="contained"
            onPress={() => navigation.navigate("adicionarCartão")}
          >
            Adicionar Cartão
          </Button>
          <Hr lineColor="#d3d3d3" width={50} />
        </RadioButton.Group>
      </View>
      <View>
        <Button
          style={styles.pagamento}
          mode="contained"
          onPress={() => navigation.navigate("continuar")}
        >
          Continuar
        </Button>
      </View>
    </View>
  );
};
