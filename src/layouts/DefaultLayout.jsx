import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function DefaultLayout() {
    return (
        <>
            <header className='sticky-top'>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer className='bg-dark text-light py-3'>
                <Footer />
            </footer>
        </>
    )
}

export default DefaultLayout