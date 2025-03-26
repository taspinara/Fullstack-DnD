import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CreatePost from './pages/CreatePost';
import PostDetails from './pages/PostDetails';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='create' element={<CreatePost />} />
            <Route path='post/:id' element={<PostDetails />} />
          </Route>
        </Routes>
    </Router>
  )
}

export default App
