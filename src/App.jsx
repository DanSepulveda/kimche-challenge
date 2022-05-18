import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/Main'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <Main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/not-found' element={<NotFound />} />
                    <Route path='*' element={<Navigate to='/not-found' />} />
                </Routes>
            </BrowserRouter>
        </Main>
    )
}

export default App