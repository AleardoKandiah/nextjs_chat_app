
// import react modules useEffect is life cycles triggers
// useContext to pull username and pasword 
import React, {useState, useEffect, useContext} from 'react';

import { Context } from '../content';

// Use router wil be used to exit of the chat pageupon log out
import { useRouter } from 'next/router';

// React chat engines components use quill which is mantained by salesforce
// Quill does not natively support NextJS so dynamic importing will be needed to not break the website 
import dynamic from 'next/dynamic';

const ChatEngine = dynamic(() =>
    import('react-chat-engine').then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
    import('react-chat-engine').then((module) => module.MessageFormSocial)
)


// JSX needed to make dynamic import 
export default function Chats() {
    // first pull username and secret from the context defined
    const { username, secret } = useContext(Context)
   
    //state variable needed to determine wehter ready to enter chat page
    const [ showChat, setShowChat ] = useState(false)

    // then pull the router
    const router = useRouter()


    return (
    <div className='background'>chats</div>
    )
}
