import styles from './menuButton.module.css'
import {useContext, useEffect, useState} from "react";
import {MenuContext} from "../../../pages/home";
import {iTheme, ThemeContext} from "../../providers/themeProvider";

export default function MenuButton() {

    const theme: iTheme = useContext(ThemeContext);
    const menu = useContext(MenuContext);
    const [svgColor, setSvgColor] = useState<string>('');

    const menuButtonClickHandler = () => {
        menu ? console.log('true') : console.log('false');
    }

    useEffect(() => {
        setSvgColor(theme.accent);
    });

    return (
        <button
            className={styles.button}
            onMouseEnter={() => setSvgColor(theme.text)}
            onMouseLeave={() => setSvgColor(theme.accent)}
            onClick={menuButtonClickHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill={svgColor}>
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
        </button>
    )
}
