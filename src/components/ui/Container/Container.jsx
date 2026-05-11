import styles from '@/components/ui/Container/Container.module.scss';

function Container({ children }) {
    return <div className={styles.container}>{children}</div>;
}

export default Container;
