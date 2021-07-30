import React, {useEffect, useState} from "react";
import {accent, iTheme, primary, secondary, text} from "../../src/providers/themeProvider";
import Page from "../../src/components/page/page";
import styles from './home.module.css';

export const ThemeContext = React.createContext<iTheme>({
    primary: primary.light,
    secondary: secondary.light,
    accent: accent.blue,
    text: text.dark
});
export const MenuContext = React.createContext<boolean>(false);

export default function Home() {

    const [showMenu, setMenu] = useState<boolean>(false);
    const [theme, setTheme] = useState<iTheme>({
        primary: primary.light,
        secondary: secondary.light,
        accent: accent.blue,
        text: text.dark
    })

    useEffect(() => {
    })

    return (
        <ThemeContext.Provider value={theme}>
            <MenuContext.Provider value={showMenu}>
                <Page>
                    <section className={styles.container}>
                        <h1>Hello There!</h1>
                    </section>
                </Page>
            </MenuContext.Provider>
        </ThemeContext.Provider>
    )
}
