import React from 'react';
import styles from './chats.module.css'
import {Avatar} from "@mui/material";
import {Link} from "react-router-dom";
const Chat = ({name,message,profilePic,timeStamp}) => {
    return (
       <Link to={'/chat/'+name}>
           <div className={styles.chat}>
               <Avatar className={styles.chatImage} alt={name} src={profilePic}/>
               <div className={styles.chatDetails}>
                   <h2>{name}</h2>
                   <p>{message}</p>
               </div>
               <p className={styles.chatTimeStamp}>{timeStamp}</p>
           </div>
       </Link>
    );
};

export default Chat;