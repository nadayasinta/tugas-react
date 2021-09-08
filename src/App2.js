import React, { useState, useEffect } from 'react';

function App2() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('nada')
  const [test, setTest] = useState('')

  useEffect(() => {
    console.log('useEffect terpanggil count')
    document.title = `You clicked ${count} times`;
    // return function cleanUp(){
    //   console.log('componentWillUnmount')
    //   setTest('a')
    //   document.title = `Goodbye`;
    // }
  },[count]);

   useEffect(() => {
    return ()=>{
      console.log('componentWillUnmount')
      setTest('a')
      document.title = `Goodbye`;
    }
  });

  useEffect(() => {
    console.log('useEffect terpanggil name')
    document.title = `You  change name to${name}`;
  },[name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>
      {name}
      <button onClick={() => setName('NADA')}>
      Change Name
      </button>
      {test}
    </div>
  );
}

export default App2;
