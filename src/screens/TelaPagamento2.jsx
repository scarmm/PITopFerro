import React, { useState } from "react";
import { Text, View } from "react-native";
import Hr from "react-native-hr-component";
import { Button, RadioButton } from "react-native-paper";
import { styles } from "../lib/pagamento";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const TelaPagamento2 = ({ navigation }) => {
  const [checked, setChecked] = React.useState("first");

  return (
    <View style={styles.container}>
      <View style={styles.textopague1}>
        <Text style={styles.textopague}>Selecione seu metodo de pagamento</Text>
      </View>

      <View style={styles.pagamento}>
        <View style={styles.section}>
          <RadioButton
            style={styles.checkbox}
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />

          <Text style={styles.paragraph}>
            PIX
            <Icon.Button
              name="qrcode-scan"
              size={18}
              color="#34271F"
              backgroundColor={"rgba(0, 0, 0, 0.0)"}
            ></Icon.Button>
          </Text>
        </View>

        <Hr text="" lineColor="#d3d3d3" width={50} />

        <View style={styles.section1}>
          <RadioButton
            style={styles.checkbox}
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text style={styles.paragraph}>
            Cartão de credito ou debito
            <Icon.Button
              name="credit-card-plus-outline"
              size={18}
              color="#34271F"
              backgroundColor={"rgba(0, 0, 0, 0.0)"}
            ></Icon.Button>
          </Text>
        </View>

        <View style={styles.local}>
          <Text style={styles.textoCartao}>Cartão de Crédito mastercard,
            Samuel de Souza,
            Expira em 12/2030
          </Text>
          <Button
            style={styles.botao1}
            mode="contained"
            onPress={() => navigation.navigate("CadastroCartão")}
          >
            Adicionar Cartão
          </Button>
        </View>

        <Hr text="" lineColor="#d3d3d3" width={50} />
      </View>

      <View style={styles.local1}>
        <Button
          style={styles.botao2}
          mode="contained"
          onPress={() => navigation.navigate("Pedido")}
        >
          Continuar
        </Button>
      </View>
    </View>
  );
};
