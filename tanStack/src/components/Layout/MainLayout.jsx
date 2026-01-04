import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';



export const MainLayout = () => {
  return (
    <>
        <Header />
        <Outlet />                                      {/* placeholder for child routes */}
        <Footer />
    </>
  )
}

//layout component which includes header , footer and outlet for child routes

