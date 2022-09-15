import React from 'react';
import ReactDOM from 'react-dom/client';

import HelmetProvider from './context/helmet-context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>,
);
