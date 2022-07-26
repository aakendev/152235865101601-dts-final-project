import React, { useState, useEffect } from 'react';
import './App.css';
import kranjanku from './assets/images/kranjanku.png';
import Button from './components/Button';
import JumboTitle from './components/JumboTitle';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.onreadystatechange = () => {
      if (document.readyState !== "complete") {
        setTimeout(() => {
          setIsLoading(true);
        }, 3000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    }
  }, []);
  
  return isLoading ?
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <p className="text-xs font-black animate-bounce">KranjanKu on Loading...</p>
      <img className="w-3/4 animate-pulse" src={kranjanku} alt="Logo KranjanKu" />
    </div> :
    <div>
      <JumboTitle title="Jumbo Title" txt="text-fire-600" m="m-2" />
      <JumboTitle title="Jumbo Title" txt="text-water-100" m="m-2" />
      <Button title="Button Fire" bg="bg-fire-50 hover:bg-fire-50" txt="text-white" href="#" m="m-2" />
    </div>
}

export default App;