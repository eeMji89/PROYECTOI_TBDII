import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import {Create, CrearE, Read, ReadE, Update, UpdateE, CreateP} from "./Pages";

function App() {
  return (
  <div className="App">
    <Navbar />
      <Routes>
        <Route path="/Create" element={<Create />} />
        <Route path="/Read" element={<Read/>}/>
        <Route path="/Update" element={<Update/>}/>
        <Route path="/CrearE" element={<CrearE />} />
        <Route path="/ReadE" element={<ReadE />} />
        <Route path="/UpdateE" element={<UpdateE />} />
        <Route path="/CreateP" element={<CreateP />} />
      </Routes>
  </div>
  );
}

export default App;
