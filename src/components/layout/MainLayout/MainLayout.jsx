import { Outlet } from 'react-router-dom';

import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '../Footer/Footer';

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;
