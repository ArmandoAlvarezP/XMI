import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './layout/Layout';
import { Inicio } from './pages/Inicio';
import { Servicios } from './pages/Servicios';
import { Tecnologia } from './pages/Tecnologia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route  path='/' element={<Layout />} >
            <Route index  element={<Inicio />}/> 
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/tecnologia' element={<Tecnologia />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
