import React, {useEffect, useState} from "react";
import {accent, iTheme, primary, secondary, text} from "../../src/providers/themeProvider";
import Page from "../../src/components/page/page";
import styles from './home.module.css';
import {setLanguage} from "../../src/providers/languageProvider";

export const ThemeContext = React.createContext<iTheme>({
    primary: primary.light,
    secondary: secondary.light,
    accent: accent.blue,
    text: text.dark
});
export const MenuContext = React.createContext<boolean>(false);

export default function Home() {

    const [showMenu, setMenu] = useState<boolean>(false);
    const [usedLanguage, setUsedLanguage] = useState<string>('EN')
    const [theme, setTheme] = useState<iTheme>({
        primary: primary.light,
        secondary: secondary.light,
        accent: accent.blue,
        text: text.dark
    });

    useEffect(() => {
        setLanguage(usedLanguage);
    });

    return (
        <ThemeContext.Provider value={theme}>
            <MenuContext.Provider value={showMenu}>
                <Page>
                    <section className={styles.container} style={{backgroundColor: theme.secondary}}>
                        <h1>Hello There!</h1>
                        <p>Welcome to this website.</p>
                    </section>
                </Page>
            </MenuContext.Provider>
        </ThemeContext.Provider>
    )
}
