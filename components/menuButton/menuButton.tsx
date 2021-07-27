import {IconButton} from "@fluentui/react";
import styles from './menuButton.module.css'
import { DefaultEffects } from '@fluentui/react';
import {CollapseMenuIcon} from '@fluentui/react-icons-mdl2'

export default function MenuButton() {
    return (
        <IconButton
            className={styles.button}
            style={{boxShadow: DefaultEffects.elevation8}}>
            <CollapseMenuIcon className={styles.icon}/>
        </IconButton>
    )
}
