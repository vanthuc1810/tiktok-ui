import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/04da618b05cf089b36850acf84f824e8.jpeg?lk3s=a5d48078&nonce=19287&refresh_token=cede5582add7ff27d5c3e34e37bb1d82&x-expires=1717030800&x-signature=Zh8W6sHLfq8u8d6d5jW3ufkEevs%3D&shp=a5d48078&shcp=b59d6b55"
                alt="username"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    Nguyen Van A
                    <span>
                        <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                    </span>
                </h4>
                <span className={cx('username')}>nguyenvanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
