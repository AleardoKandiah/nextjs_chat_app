import React from 'react';
import React, { useState, createContext} from 'react';

// First component Initialises instance of context API 
export const Context = createContext();

// Second component is a provider to hold other components for context access
export const ContextProvider = () => {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');

  // Shared const are username and secret to recognise user presence
  // This will be used to understand which page to render
  const value = {
  username,
  setUsername,
  secret,
  setSecret,
  };

  // These must be passed into a value prop in the provider
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
export default function Auth() {
  return <div className='background'>auth</div>;
}

