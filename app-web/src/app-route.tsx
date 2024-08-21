import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundRoute from './routes/not-found.route';
import MainRoute from './routes/main.route';
import JoseEsqueda from './routes/jesqueda.route';
import JamieNhuLe from './routes/jle.route';
import Example from './routes/example.route';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainRoute />}></Route>
                <Route path="/jesqueda" element={<JoseEsqueda />}></Route>
                <Route path="/jamienhule" element={<JamieNhuLe />}></Route>
                <Route path="/example" element={<Example />}></Route>
                <Route path="*" element={<NotFoundRoute />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
