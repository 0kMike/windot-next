import styles from './header.module.css'
import MenuButton from "../menuButton/menuButton";
import {useContext} from "react";
import Link from 'next/link'
import {ThemeContext} from "../../providers/themeProvider";

export default function Header() {

    const theme = useContext(ThemeContext)

    return (
        <header className={styles.header}>
            <Link href={"/home"}>
                <div className={styles.title} style={{color: theme.accent}}>
                    windot
                </div>
            </Link>
            <MenuButton/>
        </header>
    )
}
