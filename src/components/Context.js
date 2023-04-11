import { createContext,useState } from "react";
export const contextData = createContext();


export const Context = ({ children }) => {
    const [name,setName] = useState("Ali");
  return (
    <div>
      <contextData.Provider value={{name,setName}}>
      {children}
      </contextData.Provider>
    </div>
  )
}


