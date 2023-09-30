import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [error,setError]=useState(null)
  useEffect(()=>{
    fetchDataWithCallback();
  },[]);
  function fetchDataWithCallback(){
    const apiURL=`https://pokeapi.co/api/v2/pokemon/8/`;
    fetch(apiURL)
    .then((response)=>{
      if(!response.ok){
        throw new Error ('network response was not ok');
      }
      return response.json();
    })
    .then((data)=>{
      setData(data);
    })
    .catch((error)=>{
      setError('error in fetching data ')
    });
  }

  return (
    <div>
      <h1>Pokeapi</h1>
      {error?(
        <p>Error:{error}</p>
      ):data?(
        <p>name:{data.name}</p>
      ):(
        <p>laoding data..</p>
      )}
    </div>
  );
}

export default App
