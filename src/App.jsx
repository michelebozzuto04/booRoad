import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import TripsPage from './pages/TripsPage'
import SingleTripPage from './pages/SingleTripPage'
import CompanionsPage from './pages/CompanionsPage'
import SingleCompanionPage from './pages/SingleCompanionPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/trips' element={<TripsPage />} />
          <Route path='/trips/:id' element={<SingleTripPage />} />
          <Route path='/companions' element={<CompanionsPage />} />
          <Route path='/companions/:id' element={<SingleCompanionPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
