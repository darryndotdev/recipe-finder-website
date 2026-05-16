import { Link } from 'react-router-dom';
import styles from '@/components/ui/Button/Button.module.scss';

const radiusMap = {
    xs: styles.radiusXs,
    sm: styles.radiusSm,
    md: styles.radiusMd,
    lg: styles.radiusLg,
    xl: styles.radiusXl,
    xxl: styles.radiusXxl,
    xxxl: styles.radiusXxxl,
    huge: styles.radiusHuge,
    full: styles.radiusFull,
};

const paddingYMap = {
    100: styles.paddingY100,
    150: styles.paddingY150,
    200: styles.paddingY200,
};

const paddingXMap = {
    200: styles.paddingX200,
    300: styles.paddingX300,
    400: styles.paddingX400,
};

const marginTMap = {
    200: styles.marginT200,
    300: styles.marginT300,
    400: styles.marginT400,
};

function Button({
    to,
    children,
    paddingY = '200',
    paddingX = '400',
    marginT,
    radius = 'lg',
    className,
}) {
    return (
        <Link
            to={to}
            className={[
                styles.button,
                radiusMap[radius],
                paddingYMap[paddingY],
                paddingXMap[paddingX],
                marginTMap[marginT],
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {children}
        </Link>
    );
}

export default Button;
