import React, {useState, createContext} from 'react';

export const SearchBarContext = createContext();

export const SearchBarProvider = (props) => {
    /*
    This piece of state is bound to the value prop in the `input` statement.
    The value is initially set to an empty string.
    `setValue` is used in the following `handleInputChange` function to update the state.
    */
   const [searchTerm, setSearchTerm] = useState('');

   /*This function is used in the `onChange` event listener.
   Because the function runs on every keystroke,
       the React state (and displayed value) gets updated as the user types.
   */
   const handleInputChange = (e) => setSearchTerm(e.currentTarget.value);

   return (
       <SearchBarContext.Provider value={{
           searchTerm,
           handleInputChange
       }}>
           {props.children}
       </SearchBarContext.Provider>
   )
};