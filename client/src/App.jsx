import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="appContainer">
        <h1 className="text-2xl">Fullstack DnD</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
