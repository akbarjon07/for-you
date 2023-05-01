import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { RoutesWrapper } from '../pages/Routes/Routes'
import { StickyFooter } from '../components/StickyFooter/StickyFooter'

const Layout = () => {
  return (
    <>
        <Header/>

        <main>
            <RoutesWrapper/>
        </main>

        <Footer/>

      <StickyFooter/>
    </>
  )
}

export default Layout