import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './css/index.css'
import Bar from './components/layout/Bar'
import Header from './components/layout/Header'
import Home from './components/pages/Home'

export default function App() {
  return (
    <Router>
      <div className="fixed inset-0 bg-gray-200">
        <div
          className="mx-auto px-6 pt-20 w-full bg-white overflow-y-auto"
          style={{
            height: '100vh',
            maxWidth: 640,
          }}
        >
          <Header />
          <Home />
          <Bar />
        </div>
      </div>
    </Router>
  )
}
