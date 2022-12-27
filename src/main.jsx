import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.scss"
import {Home} from './pages/Home'
import { ChampionInfo } from './pages/Champion-info'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FilterProvider from './contexts/FilterContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/champion/:id',
    element: <ChampionInfo />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterProvider>
      <RouterProvider router={router}/>
    </FilterProvider>
  </React.StrictMode>,
)
