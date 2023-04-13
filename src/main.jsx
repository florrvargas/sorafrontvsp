import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <React.StrictMode>
    <Auth0Provider 
      domain='dev-gycxcebwgjyhaube.us.auth0.com'
      clientId='qBy6h2IoEMMJGBRJSy76IwZLMwh1nwNq'
      authorizationParams={{
        redirect_uri: 'http://localhost:5173/perfil'
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
</BrowserRouter>,
)

