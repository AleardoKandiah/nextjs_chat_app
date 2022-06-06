// import usecontext to access context state data from index.js
import React, {useContext} from 'react';
import { Context } from '../content';

// this is imported so that upon login we are redirected to chat page
import {useRouter} from 'next/router';

// Downloaded axios client from yarn is then imported
import axios from 'axios';

export default function Auth() {
  // Build JSX
  return (
  <div className='background'>
    <div className='auth-container'>
      {/* create a form with function */}
      <form className='auth-form' onSubmit={e => e.preventDefault()}>

      </form>
    </div>
  </div>
  )
}

