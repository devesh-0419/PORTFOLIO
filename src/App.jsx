import React from 'react'
import {Home, NavBar, AboutMe, Projects, Contact,Footer} from './Components'
const App = () => {
  return (
    <>

    <NavBar/>
    <main>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}

export default App