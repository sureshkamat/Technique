import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Edit } from './Edit'
import { Main } from './Main'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/edit/:id' element={<Edit />} />
    </Routes>
  )
}
