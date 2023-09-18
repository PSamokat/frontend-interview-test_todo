/* VENDOR */
import { Route, Routes } from "react-router-dom";

/* APPLICATION */
import "./App.css";
import { Header } from "./Header/Header";
import { Tasks } from "./Lists/Tasks";
import { Categories } from "./Lists/Categories";

// TODO: Перенести файл в папку app
function App() {
  return (
      // TODO: пути объявить через enum и вынести их в отдельный файл напр. route-to-component-relation.ts который экспортирует компоненты по ключам enum, хардкодить не надо
    <div className="App">
      <Header />
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/categories" element={<Categories />} />
        <Route index element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;
