import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client' 

import { BrowserRouter } from 'react-router-dom' // 리액트에서 라우팅 적용

import './index.css' 
import App from './App.tsx'


// HTML에서 <div id="root"></div> 요소를 가져와 여기에 리액트를 붙임
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />    
    </BrowserRouter>
  </StrictMode>,
)
