import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

import pb from '@/api/pb';
import InputWithDelete from '@/components/Input/InputWithDelete';
import router from '@/routes/router';
import { useNavList } from '@/stores/route';

function App() {
  const record = pb.collection('test');

  const { inputValue, setInputValue, clearInputValue } = useNavList(); // zustand 상태 가져오기

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    clearInputValue();
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
          placeholder="text"
          showClearButton={true}
        />
      </div>
    </StrictMode>
  );
}

export default App;
