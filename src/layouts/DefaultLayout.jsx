import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function DefaultLayout() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                {/* <Footer /> */}
            </footer>
        </>
    )
}

export default DefaultLayout