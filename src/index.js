import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'

const node = document.querySelector('#app')
const root = createRoot(node)

root.render(<App />)
