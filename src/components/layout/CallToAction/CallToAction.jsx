import styles from '@/components/layout/CallToAction/CallToAction.module.scss';

function CallToAction() {
    return (
        <section>
            <div className={styles.section}>
                <h2>Ready to cook smarter?</h2>
                <p>
                    Hit the button, pick a recipe, and get dinner on the
                    table—fast.
                </p>
            </div>
        </section>
    );
}

export default CallToAction;
