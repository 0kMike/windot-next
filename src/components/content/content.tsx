import styles from './content.module.css'
import {useContext} from "react";
import {ThemeContext} from "../../providers/themeProvider";

export default function Content(props: any) {

    const theme = useContext(ThemeContext)

    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}
