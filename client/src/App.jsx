import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NewPost from "./pages/NewPost";


function App() {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/more-about/:id" element={<Details />} />
          <Route path="/create" element={<NewPost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
