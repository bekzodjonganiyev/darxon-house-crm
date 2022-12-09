import {Route, Routes} from "react-router-dom"

import "./App.css"

import Layout from "./components/layout/Layout";
import Contract from "./pages/contract/Contract";
import Object from "./pages/object/Object";
import Type from "./pages/type/Type";
import ShartnomaView from "./pages/shartnoma/ShartnomaView";
import CreateObject from "./pages/object/CreateObject";
import TypeObekt from './pages/type/TypeObekt';
import DomObject from "./pages/dom/DomObject";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Object />} />

          <Route path="/type" element={<Type />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/shartnoma-view" element={<ShartnomaView />} />
          <Route path="/create-object" element={<CreateObject />} />
          <Route path="/type-object" element={<TypeObekt />} />
          <Route path="/object-dom" element={<DomObject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
