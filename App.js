import { StatusBar } from "expo-status-bar";
import { Mint } from "./assets/style/Colors";
import Main from "./router/Main";

const App = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor={Mint} />
      <Main />
    </>
  );
};

export default App;
