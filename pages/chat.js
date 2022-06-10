
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
    const [ showChat, setShowChat] = useState(false)

    // then pull the router
    const router = useRouter()


    // we also need to see if the document variable is present to enter chat page
    // this is because NextJS runs in the same project both for client and server side
    useEffect(() => {
        if (typeof document !== null) {
            setShowChat(true)
        }
    });

    // else return empty div is showChat is false
    if (!showChat) return <div />;

    // here render the component 
    return (
    <div className='background'>
        <div className='shadow'>
            <ChatEngine
            height= 'calc(100ch- 200pc)'
            projectID=''
            userName = {username}
            userSecret = {secret}
            />
        </div>
    </div>
    )
}
