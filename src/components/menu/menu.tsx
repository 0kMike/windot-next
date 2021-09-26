import styles from './menu.module.css';
import {useContext} from "react";
import {ThemeContext} from "../../providers/themeProvider";

export default function Menu() {

    const theme = useContext(ThemeContext)

    return (
        <nav className={styles.container} style={{backgroundColor: theme.secondary}}>
            Menu here
        </nav>
    )
}
