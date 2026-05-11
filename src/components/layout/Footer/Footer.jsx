import styles from '@/components/layout/Footer/Footer.module.scss';
import Container from '@/components/ui/Container/Container';
import Instagram from '@/assets/icons/Instagram';
import Bluesky from '@/assets/icons/Bluesky';
import Tiktok from '@/assets/icons/Tiktok';

function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <p>Made with ❤️ and 🥑</p>
                    <ul className={styles.list}>
                        <li>
                            <Instagram />
                        </li>
                        <li>
                            <Bluesky />
                        </li>
                        <li>
                            <Tiktok />
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
