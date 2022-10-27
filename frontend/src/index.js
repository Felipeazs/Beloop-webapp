import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import HelmetProvider from './context/helmet-context';
import { AuthProvider } from './context/user-context'
import App from './App';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>,
);
