import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from '@/routes/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <StrictMode>
      <Toaster />
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
