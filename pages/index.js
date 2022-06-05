import React from 'react';
import React, { useState, createContext} from 'react';

// Initialises instance of context API 
export const Context = createContext();

export const ContextProvider = () = {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
}
export default function Auth() {
  return <div className='background'>auth</div>;
}

