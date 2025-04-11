import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; 
import { enrutador } from './routes/Enrutador.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={enrutador} />
  </StrictMode>
);


