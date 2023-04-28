import { useState } from "react";
import { View, Text, Alert } from "react-native";
import {
  Button,
  Dialog,
  Paragraph,
  Portal,
  Provider,
} from "react-native-paper";
import { styles } from "../lib/config";

export const TelaExcluir = () => {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const hideDialogExclude = () => {
    console.log("exclui esse demonio!");
    setVisible(false);
  };

  return (
      <Provider>
        <View style={styles.container}>
          <View>
            <Button style={styles.botao} onPress={showDialog}>
              <Text style={styles.botaoE}>Excluir usuário?</Text>
            </Button>
            <Portal>
              <Dialog
                style={styles.alert}
                visible={visible}
                onDismiss={hideDialog}
              >
                <Dialog.Title>Deseja excluir este usuário?</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>Confirme se você quer excluir o usuário ou não</Paragraph>
                </Dialog.Content>
                <Dialog.Actions style={styles.CO}>
                  <Button onPress={hideDialogExclude}>Excluir</Button>
                  <Button onPress={hideDialog}>Cancelar</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </View>
      </Provider>
  );
};
