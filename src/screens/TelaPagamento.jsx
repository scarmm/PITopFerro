import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Hr from 'react-native-hr-component';
import { Button } from 'react-native-paper';
import { styles } from '../lib/pagamento';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export const TelaPagamento = ({ navigation }) => {
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  return (
    <View style={styles.container}>


      <View style={styles.textopague1}>
        <Text style={styles.textopague}>Selecione seu metodo de pagamento</Text>
      </View>

      <View style={styles.pagamento}>
        <View style={styles.section}>
          <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} color={isChecked2 ? '#4630EB' : undefined} />


          <Text style={styles.paragraph}>PIX
          <Icon.Button name="qrcode-scan" size={18} color="#34271F" backgroundColor="none"></Icon.Button >
          </Text>
        </View>

        <Hr lineColor="#d3d3d3" width={50} />

        <View style={styles.section1}>
          <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
          <Text style={styles.paragraph}>Cartão de credito ou debito
          <Icon.Button name="credit-card-plus-outline" size={18} color="#34271F" backgroundColor="none"></Icon.Button >
          </Text>
        </View>

        <View style={styles.local}>
          <Button
            style={styles.botao1}
            mode="contained"
            onPress={() => navigation.navigate("Salvar")}>Adicionar Cartão</Button>
        </View>

        <Hr lineColor="#d3d3d3" width={50} />

      </View>

      <Hr lineColor="#d3d3d3" width={50} />

      <View style={styles.local1}>
        <Button
          style={styles.botao2}
          mode="contained"
          onPress={() => navigation.navigate("Salvar")}>Continuar</Button>
      </View>

    </View>
  );
}
