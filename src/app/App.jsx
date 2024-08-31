import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

import pb from '@/api/pb';
import router from '@/routes/router';

function App() {
  const record = pb.collection('test');

  console.log(record);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
