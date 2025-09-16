import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import Calculator from "./src/components/Calculator.tsx";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "./src/styles/theme.tsx";
function App() {

  return (
    <PaperProvider theme={theme}
                   settings={{
                     icon: (props) => <MaterialCommunityIcons {...props} />,
                   }}>
      <SafeAreaProvider>
        <Calculator />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
