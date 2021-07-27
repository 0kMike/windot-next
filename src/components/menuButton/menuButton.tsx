import {IconButton, IContextualMenuProps} from "@fluentui/react";
import styles from './menuButton.module.css'
import { DefaultEffects } from '@fluentui/react';
import {CollapseMenuIcon} from '@fluentui/react-icons-mdl2'
import {useContext} from "react";
import {ThemeContext} from "../../../pages/home";
import {useConst} from "@fluentui/react-hooks";

export default function MenuButton() {

    const theme = useContext(ThemeContext)

    const menuProps = useConst<IContextualMenuProps>({
        shouldFocusOnMount: true,
        items: [
            {key: 'projects', text: 'Projects', href: '/projects'},
            {key: 'skills', text: 'Skills', href: '/skills'},
            {key: 'cv', text: 'CV', href: '/cv'},
            {key: 'about', text: 'Settings', href: '/about'},
            {key: 'legal', text: 'Legal', href: '/legal'},
        ],});

    return (
            <IconButton
                menuProps={menuProps}
                className={styles.button}
                style={{boxShadow: DefaultEffects.elevation8, backgroundColor: theme.primary}}>
                <CollapseMenuIcon style={{fontSize: '30px', color: theme.text}}/>
            </IconButton>
    )
}
