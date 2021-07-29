import styles from './menuButton.module.css'
import {useContext, useState} from "react";
import {ThemeContext} from "../../../pages/home";
import menuIconBlack from '../../assets/img/menu_black_48dp.svg'
import menuIconWhite from '../../assets/img/menu_white_48dp.svg'
import Image from 'next/image'
import {primary} from "../../providers/themeProvider";

export default function MenuButton() {

    const theme = useContext(ThemeContext)
    const [bgColor, setBgColor] = useState<string>(theme.primary)

    return (
        <button
            className={styles.button}
            style={{backgroundColor: bgColor}}
            onMouseEnter={() => setBgColor(theme.secondary)}
            onMouseLeave={() => setBgColor(theme.primary)}>
            {theme.primary === primary.light ?
                <Image src={menuIconBlack} alt={'menu button'}/> :
                <Image src={menuIconWhite} alt={'menu button'}/>}
        </button>
    )
}
