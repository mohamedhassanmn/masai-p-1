import React from 'react'
import ReactDom from 'react-dom'
import Admin from './components/Admin.js'
import {BrowserRouter} from 'react-router-dom'
ReactDom.render(
  <BrowserRouter>
    <Admin/>
  </BrowserRouter>
    ,document.getElementById('root'))
