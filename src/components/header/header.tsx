import styles from './header.module.css'
import MenuButton from "../menuButton/menuButton";
import {useContext} from "react";
import {ThemeContext} from "../../../pages/home";

export default function Header() {

    const theme = useContext(ThemeContext)

    return (
        <header className={styles.header} style={{backgroundColor: theme.accent}}>
            <div className={styles.title} style={{color: theme.primary}}>
                windot
            </div>
            <MenuButton/>
        </header>
    )
}
