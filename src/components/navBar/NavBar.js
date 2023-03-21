import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <header className={styles.footer}>
        <ul className={styles.links} style={{listStyleType: 'none'}}>
            <li>
                <NavLink to='/'  className={styles.link}>MainPage</NavLink>
            </li>
            <li>
                <NavLink to='/login'  className={styles.link}>LoginPage</NavLink>
            </li>
            <li>
                <NavLink to='/other'  className={styles.link}>OtherPage</NavLink>
            </li>
            <li>
                <NavLink to='/users'  className={styles.link}>UsersPage</NavLink>
            </li>
        </ul>
    </header>
  )
}
