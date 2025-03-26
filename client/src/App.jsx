import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/more-about/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
