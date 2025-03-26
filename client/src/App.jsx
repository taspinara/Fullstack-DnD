import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="appContainer w-full min-h-[100vh] flex flex-col">
      <Routes>
        <Route path="/more-about/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
