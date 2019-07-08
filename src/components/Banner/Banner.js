import React from 'react';
import bannerImg from '../../assets/banner2.jpg';
import './Banner.css';
const banner = (props) => {
    return (
        <div>
            <img src={bannerImg} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt ="banner img" height="600px" width="100%"></img>
        </div>
    );

}

export default banner;