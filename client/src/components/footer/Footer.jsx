import React from 'react';
import styles from './Footer.module.css';
import Linkedin from '../../assets/linkedin.png';
import Git from '../../assets/github.png';
import Henry from '../../assets/henry.png';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
                <p>AGUSTIN GALLEGO</p>
                <div className={styles.iconsContainer}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/agustin-gallego/"><img className={styles.footerIcon} src={Linkedin} alt="linkedin"/></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/gallegoagustin"><img className={styles.footerIcon} src={Git} alt="git"/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.soyhenry.com/"><img id={styles.henry} src={Henry} alt="henry"/></a>
                </div>
        </div>
    )
}
