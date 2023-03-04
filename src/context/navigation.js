import { createContext, useEffect, useState } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setcurrentPath] = useState('')

  useEffect(() => {
    const handler = () => {
      setcurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handler)

    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, "", to)
    setcurrentPath(to)
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate}}> 
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
