import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './UserPage.module.css'

const url = 'https://jsonplaceholder.typicode.com/users'

export default function UsersPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then(respornse => {
                setUsers(respornse.data)
            })
    }, [])
  return (
    <div className={styles.users}>
        {users.map(user => {
            return (
                <div className={styles.user} key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )
        })}
    </div>
  )
}

