import styles from './content.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../../pages/home";

export default function Content(props: any) {

    const theme = useContext(ThemeContext)

    return (
        <div className={styles.container} style={{backgroundColor: theme.primary}}>
            {props.children}
        </div>
    )
}
