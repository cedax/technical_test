import { Catalogo } from "./Components/Catálogo/Catalogo";
import { BarrraBusqueda } from "./Components/SearchBar/SearchBar";

import { ContextProvider } from './Context/busquedaContext';

function App() {
  return (
    <ContextProvider>
      <BarrraBusqueda />
      <Catalogo />
    </ContextProvider>
  );
}

export default App;
