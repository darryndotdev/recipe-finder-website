import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from '@/components/layout/Navbar/Navbar.module.scss';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import Menu from '@/assets/icons/Menu';
import Cross from '@/assets/icons/Cross';
import logo from '@/assets/icons/logo.svg';

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
    const [isOpen, setIsOpen] = useState(false);

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
                    <button
                        className={styles.btn}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? <Cross /> : <Menu />}
                    </button>
                </div>
                {isOpen && (
                    <div className={styles.mobileNav}>
                        <ul>
                            {navLinks.map((link) => (
                                <li key={link.id} className={styles.item}>
                                    <Link
                                        to={link.path}
                                        className={styles.link}
                                    >
                                        {link.title}
                                    </Link>
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
                    </div>
                )}
            </nav>
        </Container>
    );
}

export default Navbar;
