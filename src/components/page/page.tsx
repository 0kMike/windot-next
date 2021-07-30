import styles from './page.module.css'
import Header from "../header/header";
import Content from "../content/content";

export default function Page(props: any) {

    return (
        <div className={styles.container}>
            <Header/>
            <Content>
                {props.children}
            </Content>
        </div>
    )

}
