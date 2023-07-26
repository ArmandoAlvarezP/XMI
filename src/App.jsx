import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './layout/Layout';
import { Inicio } from './pages/Inicio';
import { Servicios } from './pages/Servicios';
import { Tecnologia } from './pages/Tecnologia';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route  path='/' element={<Layout />} >
            <Route index  element={<Inicio />}/> 
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/tecnologia' element={<Tecnologia />} />
          </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
