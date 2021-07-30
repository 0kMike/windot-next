import Header from "../../src/components/header/header";
import React, {useContext, useEffect, useState} from "react";
import {accent, iTheme, primary, secondary, text} from "../../src/providers/themeProvider";
import Background from "../../src/components/background/background";
import {Container} from "postcss";
import Content from "../../src/components/content/content";
import styles from './home.module.css'

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
        console.log(theme);
    })

    return (
        <ThemeContext.Provider value={theme}>
            <MenuContext.Provider value={showMenu}>
                <div className={styles.container}>
                    <Header/>
                    <Content>
                        huhu
                    </Content>
                </div>
            </MenuContext.Provider>
        </ThemeContext.Provider>
    )
}
