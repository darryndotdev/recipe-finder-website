import styles from '@/components/layout/CallToAction/CallToAction.module.scss';
import Button from '@/components/ui/Button/Button';

function CallToAction() {
    return (
        <section>
            <div className={styles.section}>
                <h2>Ready to cook smarter?</h2>
                <p>
                    Hit the button, pick a recipe, and get dinner on the
                    table—fast.
                </p>
                <Button
                    to='recipes'
                    paddingY='200'
                    paddingX='300'
                    marginT='400'
                    radius='lg'
                >
                    Start exploring
                </Button>
            </div>
        </section>
    );
}

export default CallToAction;
