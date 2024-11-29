
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Mainlayout;