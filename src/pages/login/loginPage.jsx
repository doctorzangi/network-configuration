import React from 'react'
import styles from './loginPage.module.css'
import Navbar from '../../Components/navbar/navbar'
import Login from '../../Components/login/login'

const LoginPage = () => {
  return (
    <div className={styles.main} >
        <Login />
    </div>
  )
}

export default LoginPage