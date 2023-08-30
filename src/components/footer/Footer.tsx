import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Hassan. All rights reserved.</div>
            <div>
                <Image src="/1.png" width={15} height={15} alt='facebook icon' />
            </div>
        </div>
    );
};

export default Footer;
