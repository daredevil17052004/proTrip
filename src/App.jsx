import { useState } from 'react'
import './App.css'
import {Routes, Route, NavLink} from 'react-router-dom'
import styles from './components/styles.module.css'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Form from './components/Form'

function App() {

  return (
    <>
    <div className={styles.main}>
        <div className={styles.item}>
          <NavLink to='/'>Kavium ❤️</NavLink>
        </div>
        <div className={styles.nav}>
          <div>
            <NavLink to='/contacts' >Contacts</NavLink>
          </div>
          <div>
            <NavLink to='/Form'>Form</NavLink>
          </div>
        </div>
      </div> 


      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/Form' element={<Form/>}></Route>
      </Routes>
    </>
  )
}

export default App
