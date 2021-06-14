import React from 'react';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutTitle}>
                <h1>About Countries App</h1>
                <hr className={styles.separator} />
            </div>
            <div className={styles.textBox}>
                <p>This application was developed in order to improve my skills during Henry's bootcamp and applying most of technologies learned at it.</p>
                <p>Main technologies used in this App were:</p>
                <ul className={styles.techList}>
                    <li><strong>Javascript</strong> as main language</li>
                    <li><strong>PostgreSQL</strong> and <strong>Sequelize</strong> for database modelling</li>
                    <li><strong>ExpressJS</strong> for server building</li>
                    <li><strong>ReactJS</strong> for front-end development</li>
                    <li><strong>CSS</strong> for styles definition</li>
                </ul>
                <p>
                    If you surf through the App you will be able to look for any country by name or just filtering by continent and activities or sorting by population.
                    You can see more details about all the countries if you click at "see more" link within each card.
                    You can also add as many activities as you want and they will be displayed at each country details sheet.
                </p>
                <p>Don't forget to check out the mobile desing!</p>
                <p>Feel free to contact me through the linked below social networks and visit Henry's web site!</p>
            </div>
        </div>
    )
}
