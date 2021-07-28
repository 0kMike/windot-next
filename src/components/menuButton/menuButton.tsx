import styles from './menuButton.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../../pages/home";

export default function MenuButton() {

    const theme = useContext(ThemeContext)

    return (
            <button
                className={styles.button}
                style={{backgroundColor: theme.primary}}>
            </button>
    )
}
