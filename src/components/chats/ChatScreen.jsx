import React, {useState} from 'react';
import styles from './chats.module.css'
import {Avatar} from "@mui/material";
const ChatScreen = () => {
    const [messages,setMessages]=useState([
        {
            name:'Meti',
            image:'',
            message:'hey youuuu'
        },
        {
            name:'Meti',
            image:'',
            message:'Meti iiiiii'
        },{
            message:'Where are you'
        }

    ])
    return (
        <div className={styles.chatScreen}>
            {
                messages.map((message)=>{
                   return  message.name? <div className={styles.chatScreenMessage}>
                       <Avatar className={styles.chatScreenAvatar}
                               src={message.image}/>
                       <p className={styles.chatScreenText}>{message.message}</p>
                   </div>:<div className={styles.chatScreenMessage}>
                       <p className={styles.chatScreenTextUser}>{message.message}</p>
                   </div>
                })
            }
        </div>
    );
};

export default ChatScreen;