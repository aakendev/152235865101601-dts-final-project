import React, { useState, useEffect } from 'react';
import './App.css';
import kranjanku from './assets/images/kranjanku.png';
import DropdownMenu from './components/DropdownMenu';

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
  
  const menuItem = [
    {
      title: "Delete",
      iconActive: "heroicons-solid:trash",
      iconInactive: "heroicons-outline:trash",
    },
    {
      title: "Edit",
      iconActive: "heroicons-solid:pencil",
      iconInactive: "heroicons-outline:pencil",
    },
  ];
  
  return isLoading ?
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <p className="text-xs font-black animate-bounce">KranjanKu on Loading...</p>
      <img className="w-3/4 animate-pulse" src={kranjanku} alt="Logo KranjanKu" />
    </div> :
    <div>
      <DropdownMenu title="Menu Dropdown" btnBg="bg-fire-400 hover:bg-fire-500" menuBg="bg-white" menuBgTxt="bg-fire-500 text-white font-medium" menuTxtInactive="text-fire-900" btnTxt="text-md font-medium text-white" padding="px-3 py-3" iconMargin="mr-2" menuItem={menuItem} />
    </div>
}

export default App;