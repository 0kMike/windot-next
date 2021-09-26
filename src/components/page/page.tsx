import styles from './page.module.css'
import Header from "../header/header";
import Content from "../content/content";
import {useContext} from "react";
import {ThemeContext} from "../../providers/themeProvider";

export default function Page(props: any) {

    const theme = useContext(ThemeContext)

    return (
        <main className={styles.container} style={{backgroundColor: theme.primary}}>
            <Header/>
            <Content>
                {props.children}
            </Content>
        </main>
    )

}
