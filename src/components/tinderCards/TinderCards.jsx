import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card'
import styles from './tinderCards.module.css'
import image1 from '../../images/IMG_0133.JPG'
import image2 from '../../images/IMG_0156.JPG'
import { collection, getDocs,serverTimestamp,query,orderBy,  doc, onSnapshot,addDoc  } from "firebase/firestore";
import {db} from "../../firebase";
const TinderCards = () => {
    const [people,setPeople]=useState([])
    useEffect(()=>{
        const q = query(collection(db, "people"));
        const unsub = onSnapshot(q ,(snapshot) => {
            let list=[];
            snapshot.docs.forEach(doc=>{
                list.push({id:doc.id,...doc.data()})
            })
            setPeople(list)
        },(err)=>{
            console.log(err);
        })
        return ()=>{
            unsub()
        }
    },[people])
    return (
        <div className={styles.tinderCardsContainer}>
            {
                people.map((person)=>{
                    return <TinderCard className={styles.swipe}
                    key={person.name}
                    preventSwipe={['up','down']}>
                        <div className={styles.card} style={{backgroundImage:`url(${person.url})`}}>
                            <h3>{person.name}</h3>

                        </div>
                    </TinderCard>
                })
            }
        </div>
    );
};

export default TinderCards;