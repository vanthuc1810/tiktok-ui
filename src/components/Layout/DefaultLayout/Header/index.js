import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
console.log(cx);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>helo</div>
        </header>
    );
}

export default Header;
