import React, { useContext, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//external
import { Helmet, HelmetProvider } from 'react-helmet-async';

//components
import Main from './components/layout/Main';
import { HelmetContext } from './context/helmet-context';
//pages
import Inicio from './pages/Inicio';

//styles
import './App.css';

//pages
const Rep = React.lazy(() => import('./pages/Rep'));
const Analisis = React.lazy(() => import('./pages/Analisis'));
const Radar = React.lazy(() => import('./pages/Radar'));

function App() {
	const { headerTitle } = useContext(HelmetContext);

	return (
		<Suspense>
			<Router>
				<HelmetProvider>
					<Helmet>
						<title>LoopTest · {headerTitle}</title>
					</Helmet>
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
							<Route
								path='/analisis'
								element={<Analisis />}
							/>
							<Route
								path='/radar'
								element={<Radar />}
							/>
						</Routes>
					</Main>
				</HelmetProvider>
			</Router>
		</Suspense>
	);
}

export default App;
