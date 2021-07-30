import styles from './menuButton.module.css'
import {useContext, useState} from "react";
import {ThemeContext} from "../../../pages/home";
import menuIconBlack from '../../assets/img/menu_black_48dp.svg'
import menuIconWhite from '../../assets/img/menu_white_48dp.svg'
import Image from 'next/image'
import {primary} from "../../providers/themeProvider";

export default function MenuButton() {

    const theme = useContext(ThemeContext)
    const [svgColor, setSvgColor] = useState<string>(theme.primary)

    return (
        <button
            className={styles.button}
            onMouseEnter={() => setSvgColor(theme.secondary)}
            onMouseLeave={() => setSvgColor(theme.primary)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill={svgColor}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </button>
    )
}
