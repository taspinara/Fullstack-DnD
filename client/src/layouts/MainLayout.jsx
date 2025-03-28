import { Outlet } from "react-router-dom";
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  console.log('first')

  return (
    <div className="flex flex-col min-h-screen bg-[#B793C7]">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout