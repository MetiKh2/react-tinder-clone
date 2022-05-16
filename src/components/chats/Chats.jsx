import React from 'react';
import styles from './chats.module.css'
import Chat from "./Chat";
const Chats = () => {
    return (
        <div className={styles.chats}>
            <Chat
            name={'Meti'}
            message={'Hey babay'}
            timeStamp={'40'}
            profilePic={''}
            />
        </div>
    );
};

export default Chats;