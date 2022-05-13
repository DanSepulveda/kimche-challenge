import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/country' element={<Country />} />
                <Route path='/not-found' element={<NotFound />} />
                <Route path='*' element={<Navigate to='/not-found' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App