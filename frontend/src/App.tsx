import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'; 
import ListPage from './pages/ListPage'; // 게시글 목록
import CreatePage from './pages/CreatePage'; // 게시글 작성
import DetailPage from './pages/DetailPage'; // 게시글 상세
import EditPage from './pages/EditPage'; // 게시글 수정


function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/post/:id" element={<DetailPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}
   

export default App
