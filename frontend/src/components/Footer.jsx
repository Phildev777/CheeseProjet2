import React from 'react';
import "./style/footer.css";
import facebookIcon from "../assets/facebookIcon.png";
import InstagramIcon from "../assets/Instagram.png";
import TwitterIcon from "../assets/Twitter.png";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerIcons">
                <img src={facebookIcon} alt="Facebook icon" className="footerIcon" width="15px"></img>
                <img src={InstagramIcon} alt="Instagram icon" className="footerIcon" width="15px"></img>
                <img src={TwitterIcon} alt="Twitter icon" className="footerIcon" width="15px"></img>
            </div>
            <p> Baptiste Audouard / Philippe Berra / Amélie Guilloux / Lorian Tarente </p>
            <p>© 2022</p>
        </footer>
    );
};

export default Footer;