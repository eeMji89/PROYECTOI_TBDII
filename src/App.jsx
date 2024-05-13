import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import {Create, CrearE, Read, ReadE, CreateP} from "./Pages";

function App() {
  return (
  <div className="App">
    <Navbar />
      <Routes>
        <Route path="/Create" element={<Create />} />
        <Route path="/Read" element={<Read/>}/>
        <Route path="/CrearE" element={<CrearE />} />
        <Route path="/ReadE" element={<ReadE />} />
        <Route path="/CreateP" element={<CreateP />} />
      </Routes>
  </div>
  );
}

export default App;
