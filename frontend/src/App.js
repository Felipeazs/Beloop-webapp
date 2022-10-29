import React, { useContext, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Main from './components/layout/Main';
import AuthContext from './context/user-context'
//pages
import Inicio from './pages/Inicio';

//styles
import './App.css';

//pages
const Rep = React.lazy(() => import('./pages/Rep'));
const Analisis = React.lazy(() => import('./pages/Analisis'));
const Chart = React.lazy(() => import('./pages/Chart'));
const Sesion = React.lazy(() => import('./pages/Sesion'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Cuenta = React.lazy(() => import('./pages/Cuenta'))
const FaseDescripcion = React.lazy(() => import('./pages/FaseDescripcion'))
const FaseAutodiagnostico = React.lazy(() => import('./pages/FaseAutodiagnostico'))

function App() {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <Suspense>
            <Router>
                <Main className='App'>
                    <Routes>
                        <Route
                            path='/'
                            element={<Inicio />}
                        />
                        <Route
                            path='/inicio'
                            element={<Inicio />}
                        />
                        <Route
                            path='/ley-rep'
                            element={<Rep />}
                        />
                        {isLoggedIn && (
                            <>
                                <Route
                                    path='/analisis/user/:userId'
                                    element={<Analisis />}
                                />
                                <Route
                                    path='/analisis/user/:userId/results/:resultId'
                                    element={<Chart />}
                                />
                                <Route
                                    path='/cuenta/:userId'
                                    element={<Cuenta />}
                                />
                                <Route
                                    path='/cuenta/:userId/fase0'
                                    element={<FaseDescripcion />}
                                />
                                <Route
                                    path='/cuenta/:userId/fase1'
                                    element={<FaseAutodiagnostico />}
                                />
                            </>
                        )}
                        <Route
                            path='/sesion'
                            element={<Sesion />}
                        />
                        <Route path='*'
                            element={<NotFound />}
                        />
                    </Routes>
                </Main>
            </Router>
        </Suspense>
    );
}

export default App;
