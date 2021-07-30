import styles from './background.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../../pages/home";

export default function Background() {

    const theme = useContext(ThemeContext)


    return (
        <div className={styles.container}>
                <>
                    <div className={styles.slide} style={{backgroundImage: `linear-gradient(-60deg, ${theme.accent} 50%, ${theme.primary} 50%)`}}/>
                </> :
        </div>
    )
}
