import { useState, useEffect } from 'react';
import './App.css';
import kranjanku from './assets/images/kranjanku.png';
import ListboxSelect from './components/ListboxSelect';

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
  
  const listBox = [
    {name: "Artropos Hufflepuff",},
    {name: "Medusa Slytherin",},
    {name: "Mirynda Griffindor",},
    {name: "Alloyner Ravenclaw",},
  ];
  
  return isLoading ?
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <p className="text-xs font-black animate-bounce">KranjanKu on Loading...</p>
      <img className="w-3/4 animate-pulse" src={kranjanku} alt="Logo KranjanKu" />
    </div> :
    <div>
      <ListboxSelect bgBtn="bg-fire-500" txtBtn="text-white sm:text-md" bgList="bg-white" bgTxtItem="bg-fire-500 text-white" txtItem="text-gray-900" listBox={listBox} />
    </div>
}

export default App;