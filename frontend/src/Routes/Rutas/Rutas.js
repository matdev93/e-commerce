import { Routes, Route } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
import Home from '../../Pages/Home/Home';
import Reservas from '../../Pages/Reservas/Reservas';
import Nosotros from '../../Pages/Nosotros/Nosotros';
import Catalogo from '../../Pages/Catalogo/Catalogo';
import Locales from '../../Pages/Locales/Locales';

const Rutas = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/nosotros' element={<Nosotros />}/>
                    <Route path='/locales' element={<Locales />}/>
                    <Route path='/reservas' element={<Reservas />}/>
                    {/* <Route path='/contacto' element={<Contacto />}/> */}
                    <Route path='/catalogo' element={<Catalogo />}/>
                    {/* <Route path='/admin/users' element={<Users />}/> */}
                </Route>
            </Routes>
        </>
    )
}

export default Rutas