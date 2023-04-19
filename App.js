import { Provider } from "react-native-paper";
import { RootNavigation } from "./src/navigation";

export default function App() {
  return (
    <Provider>
      <RootNavigation />
    </Provider>
  );
}
