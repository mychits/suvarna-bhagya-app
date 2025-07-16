import { useContext } from 'react';

const useCContext = <T>(contextValue:React.Context<T>) => {
  const context = useContext(contextValue);
  if(!context) throw new Error("Context is Missing")
    return context;
}

export default useCContext