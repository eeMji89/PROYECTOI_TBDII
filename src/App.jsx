import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import {Create, CrearE, Read, ReadE, Remove, RemoveE, Update, UpdateE} from "./Pages";

function App() {
  return (
  <div className="App">
    <Navbar />
      <Routes>
        <Route path="/Create" element={<Create />} />
        <Route path="/Read" element={<Read/>}/>
        <Route path="/Remove" element={<Remove/>}/>
        <Route path="/Update" element={<Update />} />
        <Route path="/CrearE" element={<CrearE />} />
        <Route path="/ReadE" element={<ReadE />} />
        <Route path="/RemoverE" element={<RemoveE />} />
        <Route path="/UpdateE" element={<UpdateE />} />
      </Routes>
  </div>
  );
}

export default App;
