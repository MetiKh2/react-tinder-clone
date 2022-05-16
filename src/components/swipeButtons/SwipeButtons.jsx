import React from 'react';
import styles from './swipeButtons.module.css'
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {IconButton} from "@mui/material";
const SwipeButtons = () => {
    return (
        <div className={styles.swipeButtons}>
           <IconButton style={{color:'#f5b748'}} className={styles.swipeIconButton}> <ReplyIcon fontSize={'large'}/> </IconButton>
            <IconButton style={{color:'#ec5e6f'}} className={styles.swipeIconButton}>  <StarRateIcon fontSize={'large'}/></IconButton>
             <IconButton style={{color:'#62b4f9'}} className={styles.swipeIconButton}> <CloseIcon fontSize={'large'}/></IconButton>
            <IconButton style={{color:'#80ce92'}} className={styles.swipeIconButton}>  <FavoriteIcon fontSize={'large'}/></IconButton>
            <IconButton style={{color:'#d984be'}} className={styles.swipeIconButton}>  <FlashOnIcon fontSize={'large'}/></IconButton>
        </div>
    );
};

export default SwipeButtons;