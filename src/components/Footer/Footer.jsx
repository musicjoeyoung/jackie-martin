import "./Footer.scss"
import linkedin from "../../assets/images/linkedin.png"
import twitter from "../../assets/images/twitter.png"

const Footer = () => {
    return (
        <footer className="footer">

            <a href="https://www.linkedin.com/in/jacklyn-martin-86748773/" target="_blank"><img className="footer__icon" src={linkedin} alt="linkedin" /></a>
            <a href="https://twitter.com/jacklynpinera" target="_blank"><img className="footer__icon" src={twitter} alt="twitter" /></a>
            <p className="footer__copyright">©Jackie Martin. All rights reserved.</p>
            <a className="footer__webmaster" href='mailto:joseph.m.young2@gmail.com'>Contact the Webmaster</a>

        </footer>
    )
}

export default Footer