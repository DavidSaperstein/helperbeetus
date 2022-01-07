import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserProvider from './context/UserProvider.jsx'

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
