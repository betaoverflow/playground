import React from 'react'
import styles from '../styles/Header.module.css'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useTheme } from './themeProvider'

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    const handleChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <nav className={styles.nav}>
            <a>
                <p id="logo">Playground</p>
            </a>
            <ul className="fr">
                <li className="ml1 hide-small-devices">
                    <a href="#">snapper</a>
                </li>
                <li className="ml1 hide-small-devices">
                    <a href="#">coditor</a>
                </li>
                <li className="ml1 hide-small-devices">
                    <a href="#">get involved</a>
                </li>
                <li style={{ width: '50px' }} className="ml1"></li>
                <li className={`ml1 ${styles.toggler} show-small-devices`}>
                    <DarkModeSwitch checked={theme == 'dark'} onChange={handleChange} size={28} />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
