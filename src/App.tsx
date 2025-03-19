import { Provider } from "react-redux"
import Produtos from "./components/Produtos"
import {EstiloGlobal} from "./styles/styles"
import store from "./store"
import Title from "./components/Title"

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal/>
      <Title/>
      <Produtos/>
    </Provider>
  )
}

export default App
