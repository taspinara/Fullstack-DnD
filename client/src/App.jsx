import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="appContainer">
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<HomePage />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
