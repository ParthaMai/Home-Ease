import React,{ createContext} from 'react'
import { service_list, technicians_list } from '../assets/assets'
import { cleaning_list, cooking_list, beauty_list } from '../assets/assets'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const contextValue = {
            service_list,
            cleaning_list,
            cooking_list,
            beauty_list,
            technicians_list
        }

  return (
    <div>
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    </div>
  )
}

export default StoreContextProvider;
