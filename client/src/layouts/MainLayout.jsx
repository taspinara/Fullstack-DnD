import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
  console.log('first')

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout