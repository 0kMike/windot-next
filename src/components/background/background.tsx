import styles from './background.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../../pages/home";

export default function Background() {

    const theme = useContext(ThemeContext)
    const randomIndex = Math.floor(Math.random() * 3);

    console.log(randomIndex)

    return (
        <div className={styles.container}>
            {randomIndex === 0 ?
                <>
                    <div className={styles.slide} style={{backgroundImage: `linear-gradient(-60deg, ${theme.accent} 50%, #09f 50%)`}}/>
                    <div className={`${styles.slide} ${styles.bg2}`} style={{backgroundImage: `linear-gradient(-60deg, ${theme.accent} 50%, #09f 50%)`}}/>
                    <div className={`${styles.slide} ${styles.bg3}`} style={{backgroundImage: `linear-gradient(-60deg, ${theme.accent} 50%, #09f 50%)`}}/>
                </> :
                randomIndex === 1 ?
                <>
                    <div className={styles.gradiant}/>
                </> :
                    <>
                    </>
            }


        </div>
    )
}
