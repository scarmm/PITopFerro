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
      <View>
        <Text>Excluir a conta</Text>
        <View>
          <Button style={styles.botao} onPress={showDialog}>Excluir usuário?</Button>    
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Deseja excluir este usuário?</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Confirme se você ama o usuário ou não</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialogExclude}>Ok</Button>
                <Button onPress={hideDialog}>Cancelar</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </View>
    </Provider>
  );
};
