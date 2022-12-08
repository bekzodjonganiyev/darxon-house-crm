import { Route, Routes } from "react-router-dom";

import "./App.css";

import Layout from "./components/layout/Layout";
import Contract from "./pages/contract/Contract";
import Object from "./pages/object/Object";
import Type from "./pages/type/Type";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Object />} />
        <Route path="/type" element={<Type />} />
        <Route path="/contract" element={<Contract />} />
      </Route>
    </Routes>
  );
}

export default App;
