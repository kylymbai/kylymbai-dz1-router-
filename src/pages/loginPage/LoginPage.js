import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.css'

export default function LoginPage() {
    const navigate = useNavigate()

    const goToUsersPage = () => {
        navigate('/users')
    }
  return (
    <form className={styles.login} onSubmit={goToUsersPage}>
        <input 
            className={styles.input}
            type='text' 
            placeholder='username'/>
        <input 
            className={styles.input}
            type='email' 
            placeholder='email'/>
        <button className={styles.btn} type='submit'>submit</button>
    </form>
  )
}
