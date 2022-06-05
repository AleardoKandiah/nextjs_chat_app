import '../styles/auth.css';
import '../styles/index.css';
import '../styles/chats.css';

import { ContextProvider } from '../content';

// Allow access to user details regardless of page by wrapping the entire application in the context provider
export default function App({ Component, pageProps }) {
    return (
      <ContextProvider>
        <Component {...pageProps}/>
      </ContextProvider>
      
    );
}
