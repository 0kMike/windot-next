import {IconButton} from "@fluentui/react";
import styles from './menuButton.module.css'
import { DefaultEffects } from '@fluentui/react';

export default function MenuButton() {
    return (
        <IconButton
            className={styles.button}
            style={{ boxShadow: DefaultEffects.elevation8 }}
            iconProps={{iconName: 'CollapseMenu'}}
            title="Emoji"
            ariaLabel="Emoji"
        />
    )
}
