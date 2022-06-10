// import usecontext to access context state data from index.js
import React, {useContext} from 'react';
import { Context } from '../content';

// this is imported so that upon login we are redirected to chat page
import router, {useRouter} from 'next/router';

// Downloaded axios HTTP client from yarn is then imported
import axios from 'axios';

export default function Auth() {
  // Import Context so that when signing up, these values are imported to username and secret
  const { username, secret, setUsername, setSecret } = useContext(Context); 
      
  // define router
    const router = useRouter();

  // API and chat route

      // create an onsubmit function that takes submission event 
  function onSubmit(e) {
    e.preventDefault();

    // Validation of username and secret value
    if (username.lenght === 0 || secret.lenght === 0) return;

    // if validation success create API
    axios.put(
      // route
      'https://api.chatengine.io/users/',
      // store data and API key
      {username, secret},
      // set headers for authentithication
      {headers: {'Private-key':   'c5b8d64e-887f-431d-bd78-d52832617483'}} 
    )

    // Once API has been made and response is successful, push to chat page

    .then((r) => router.push('/chats'));
  }

  // Build JSX
  return (
  <div className='background'>
    <div className='auth-container'>
      {/* create a form with function */}
      <form className='auth-form' onSubmit={(e) => onSubmit(e)}>
        <div className='auth-title'>Sky Chat</div>

        {/* ADD INPUTS: Email */}
        <div className='input-container'> 
          {/* Add props in the input (username)*/}
          <input
            placeholder='Email' 
            className='text-input'  
            onChange={ e => setUsername(e.target.value)}
            // Onchange will be where the context API will be used by triggering the e event       
          /> 
        </div>
       
        {/* ADD INPUTS: Password */}
        <div className='input-container'> 
          {/* Add props in the input (password) */}
          <input
            // type = password to hide input and change function called to setSecret
            type ='password'
            placeholder='Password' 
            className='text-input'  
            onChange={ e => setSecret(e.target.value)}
            // Onchange will be where the context API will be used by triggering the e event       
          /> 
        </div>

        {/* import login button and signup*/}
        <button type='submit' className='submit-button'>
        Login / Sign Up
        </button>        
      </form>
    </div>
  </div>
  )
}

