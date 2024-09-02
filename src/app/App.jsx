import { useState } from 'react';
import reactLogo from '/react.svg';
import pb from '@/api/pb';
import InputWithDelete from '@/components/InputWithDelete';

function App() {
  const [count, setCount] = useState(0);

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
    <>
      <div>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <hr />

      <div style={{ width: '300px' }}>
        <InputWithDelete
          value={inputValue}
          onChange={handleChange}
          onClear={handleClear}
          placeholder="Enter text"
          showClearButton={true}
        />
      </div>
    </>
  );
}

export default App;
