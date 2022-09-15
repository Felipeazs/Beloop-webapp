import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Main from './components/layout/Main';
//pages
import Inicio from './pages/Inicio';
import Rep from './pages/Rep';
import Analisis from './pages/Analisis';
import Radar from './pages/Radar';

//styles
import './App.css';

function App() {
	return (
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
		</Router>
	);
}

export default App;
