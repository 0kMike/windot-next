import React, {useContext, useEffect, useState} from "react";
import ThemeProvider, {ThemeContext} from "../../src/providers/themeProvider";
import Page from "../../src/components/page/page";
import styles from './home.module.css';
import {setLanguage} from "../../src/providers/languageProvider";

export const MenuContext = React.createContext<boolean>(false);
export const SetMenuContext = React.createContext(false);

export default function Home() {

    const [showMenu, setMenu] = useState<boolean>(false);
    const [usedLanguage, setUsedLanguage] = useState<string>('EN')

    useEffect(() => {
        setLanguage(usedLanguage);
    });

    const theme = useContext(ThemeContext);

    return (
        <ThemeProvider>
            <MenuContext.Provider value={showMenu}>
                <Page>
                    <section className={styles.container} style={{backgroundColor: theme.secondary}}>
                        <h1>Hello There!</h1>
                        <p>Welcome to this website.</p>
                    </section>
                </Page>
            </MenuContext.Provider>
        </ThemeProvider>
    )
}
