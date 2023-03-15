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
      <Text>Selecione seu metodo de pagamento</Text>

      
    </View>
  );
};
