import { StrictMode, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import pb from '@/api/pb';
import InputWithDelete from '@/components/InputWithDelete';
import router from '@/routes/router';

function App() {
  const record = pb.collection('test');

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
  };

  console.log(record);

  return (
    <StrictMode>
      <RouterProvider router={router} />
      <div style={{ width: '300px' }}>
        <InputWithDelete
          value={inputValue}
          onChange={handleChange}
          onClear={handleClear}
          placeholder="Enter text"
          showClearButton={true}
        />
      </div>
    </StrictMode>
  );
}

export default App;
