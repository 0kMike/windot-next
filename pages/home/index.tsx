import Header from "../../src/components/header/header";
import React, {useContext, useEffect, useState} from "react";
import {accent, iTheme, primary, secondary, text} from "../../src/providers/themeProvider";

export const ThemeContext = React.createContext<iTheme>({
    primary: primary.light,
    secondary: secondary.light,
    accent: accent.blue,
    text: text.dark
});

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
            <Header/>
        </ThemeContext.Provider>
    )
}
