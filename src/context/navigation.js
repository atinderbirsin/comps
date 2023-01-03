import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePathChange = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', handlePathChange);

        return () => {
            window.removeEventListener('popstate', handlePathChange);
        }
    }, []);

    const navigate = (value) => {
        window.history.pushState({}, "", value);
        setCurrentPath(value);
    }

    const value ={
        currentPath,
        navigate,
    }

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
