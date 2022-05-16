import React from 'react';
import styles from './header.module.css'
import logo from '../../images/OIP.jpg'
import {IconButton} from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Header = ({backButton}) => {
    return (
        <div className={styles.header}>
            <IconButton className={styles.headerIcon}>
                {
                    backButton?<Link to={backButton}>
                        <IconButton><ArrowBackIosIcon fontSize={"large"}/></IconButton>
                    </Link>:  <PersonIcon  fontSize={"large"}/>
                }
            </IconButton>
           <Link to={'/'}>
               <img className={styles.headerLogoTinder} src={logo}/>
           </Link>
          <Link to={'/chat'}>
              <IconButton className={styles.headerIcon}>
                  <MessageIcon fontSize={'large'}/>
              </IconButton>
          </Link>
</div>
    );
};

export default Header;