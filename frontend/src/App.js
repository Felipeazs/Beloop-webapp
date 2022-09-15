import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//external
import { Helmet, HelmetProvider } from 'react-helmet-async';

//components
import Main from './components/layout/Main';
import { HelmetContext } from './context/helmet-context';
//pages
import Inicio from './pages/Inicio';
import Rep from './pages/Rep';
import Analisis from './pages/Analisis';
import Radar from './pages/Radar';

//styles
import './App.css';

function App() {
	const { headerTitle } = useContext(HelmetContext);

	return (
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
	);
}

export default App;
