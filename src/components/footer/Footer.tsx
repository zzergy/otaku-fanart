import React from "react";
import "./Footer.scss"
import copyrightIcon from "./img/copyright-icon.png";
import githubIcon from  "./img/github-icon.svg";

function Footer() {
    return(
        <footer>
                <img src={copyrightIcon} alt="copyright"/>
                <span>Bogdana Yaneva</span>
                <img src={githubIcon} alt="github icon"/>
                <a href="https://github.com/zzergy">Zergy</a>
        </footer>
    );
}

export default Footer;