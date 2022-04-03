import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Home } from '~/pages/Home'
import { NotFound } from '~/pages/NotFound'

const AppRoutes = () => (
  <AnimatePresence exitBeforeEnter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </AnimatePresence>
)

export default AppRoutes
