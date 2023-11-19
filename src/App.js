import React from 'react';
import CvsReader from './components/CvsReader';
import CsvTableViewer from './components/CsvTableViewer';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            Pair of employees who have worked together  
        </h1>
        <div className='container'>
          <div style={{ marginBottom: '20px' }}>
            <CsvTableViewer />
          </div>
          <CvsReader />
        </div>
      </div>
    </div>
  );
}

export default App;