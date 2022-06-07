// import usecontext to access context state data from index.js
import React, {useContext} from 'react';
import { Context } from '../content';

// this is imported so that upon login we are redirected to chat page
import {useRouter} from 'next/router';

// Downloaded axios client from yarn is then imported
import axios from 'axios';

export default function Auth() {
  // Import Context
  const { username, setUsername, secret, setSecret } = useContext(Context) 

  // Build JSX
  return (
  <div className='background'>
    <div className='auth-container'>
      {/* create a form with function */}
      <form className='auth-form' onSubmit={e => e.preventDefault()}>
        <div className='auth-title'>Sky Chat</div>

        {/* ADD INPUTS */}
        <div className='input-container'> 
          {/* Add props in the input */}
          <input
            placeholder='email' 
            className='text-input'  
            onChange={ e => setUsername(e.target.value)}
            // Onchange will be where the context API will be used by triggering the e event       
          />        </div>
      </form>
    </div>
  </div>
  )
}

