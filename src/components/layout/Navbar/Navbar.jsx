import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from '@/components/layout/Navbar/Navbar.module.scss';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import logo from '@/assets/icons/logo.svg';
import menu from '@/assets/icons/icon-hamburger-menu.svg';

const navLinks = [
    {
        title: 'Home',
        path: '/',
        id: 1,
    },
    {
        title: 'About',
        path: '/about',
        id: 2,
    },
    {
        title: 'Recipes',
        path: '/recipes',
        id: 3,
    },
];

function Navbar() {
    return (
        <Container>
            <nav>
                <div className={styles.nav}>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt='Healthy recipe finder logo' />
                        </Link>
                    </div>
                    <ul className={styles.list}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `${styles.link} ${isActive ? styles.active : ''}`
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Button
                        to='recipes'
                        paddingY='150'
                        paddingX='200'
                        radius='lg'
                        className={styles.browse}
                    >
                        Browse recipes
                    </Button>
                    <button className={styles.btn}>
                        <img src={menu} alt='' />
                    </button>
                </div>
            </nav>
        </Container>
    );
}

export default Navbar;
