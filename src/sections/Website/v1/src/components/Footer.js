import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = (props) => {
    return(
        <div>
            <footer style={{textAlign: "center"}}>
                <p>Made with <FavoriteIcon></FavoriteIcon> by teamtrees</p>
            </footer>
        </div>
    );
};

export default Footer;