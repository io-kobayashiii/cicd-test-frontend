import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('Before fetching');
  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        setResult(JSON.stringify(response));
      })
      .catch((error) => {
        setResult(JSON.stringify(error));
      });
  }, []);

  return (
    <>
      <h1>iii-playground</h1>
      <p>Hello World.</p>
      <h2>Fetch Result</h2>
      <p>{result}</p>
    </>
  );
}

export default App;
