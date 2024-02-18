import "./Navbar.scss"
import { Link } from "react-router-dom"
import resume from "../../assets/documents/Jackie-Martin-Resume.pdf"

const Navbar = ({ setDarkMode, darkMode }) => {
    const toggleLm = 'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1704223838/toggle-lm_agastf.svg'
    const toggleDm = 'https://res.cloudinary.com/dfbuwtl5q/image/upload/v1704223837/toggle-dm_ekdax7.svg'
    const toggleSvg = darkMode ? toggleDm : toggleLm;

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <>
            <nav className={`navbar ${darkMode ? 'dark dark--darkNavbar' : ''}`}>
                <Link className="navbar__link" to="/">Home</Link>
                <Link className="dropdown" to="/services">Services <span className="dropdown__triangle">▼</span>

                    <div className="dropdown-content">
                        <Link className="navbar__link" to="/services" onClick={() => scrollToSection('audio')} >Audio Production</Link>
                        <Link className="navbar__link" to="/services" onClick={() => scrollToSection('video')} >Video Production</Link>
                        <Link className="navbar__link" to="/services" onClick={() => scrollToSection('script')}>Script Writing</Link>
                    </div>
                </Link>
                <Link className="navbar__link" to="/about">About</Link>
                <Link className="navbar__link--resume" to={resume} target="_blank" download>Resume</Link>
                <Link className="navbar__link" to="/contact">Contact</Link>
                {/*     <a className="navbar__toggle-a" onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}>
                    <img className="navbar__toggle-img" src={toggleSvg} alt="light/dark toggle" />
                </a> */}
                {/* <img className="navbar__toggle-mobile" src={`/src/assets/images/icons/${toggleSvg}`} onClick={() => setDarkMode(!darkMode)} /> */}
            </nav>

            {/* mobile hamburger menu */}
            <nav className={`mobile-navbar ${darkMode ? 'dark--darkMobileNavbar' : ''}`} >
                <div className="menuToggle">
                    <input type="checkbox" />
                    <span className="menuToggle__hamburger"></span>
                    <span className="menuToggle__hamburger"></span>
                    <span className="menuToggle__hamburger"></span>


                    <ul className={`mobile-ul ${darkMode ? 'dark--darkMobileUl' : ''}`}>
                        <li className="mobile-ul__li">
                            <Link className="mobile-ul__a" to="/">Home</Link>
                        </li>
                        <li className="dropdown dropdown--mobile">
                            <Link className="mobile-ul__a dropbtn" to="/services">Services <span className="dropdown__triangle">▼</span></Link>
                            <div className="dropdown-content">
                                <Link className="mobile-ul__a" to="/services" onClick={() => scrollToSection('audio')} >Audio Production</Link>
                                <Link className="mobile-ul__a" to="/services" onClick={() => scrollToSection('video')} >Video Production</Link>
                                <Link className="mobile-ul__a" to="/services" onClick={() => scrollToSection('script')}>Script Writing</Link>
                            </div>
                        </li>
                        <li className="mobile-ul__li">
                            <Link className="mobile-ul__a" to="/about">About</Link>
                        </li>
                        <li className="mobile-ul__li">
                            <Link className="mobile-ul__a" to={resume} target="_blank">Resume</Link>
                        </li>
                        <li className="mobile-ul__li">
                            <Link className="mobile-ul__a" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar