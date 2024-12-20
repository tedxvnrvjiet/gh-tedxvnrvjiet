import React, { useEffect } from "react";
import "./Nav.css";
// import vnr from "../../Assets/vnr.png";
import logo from "../../assets/logos/logo-white.png";
import { useMediaQuery } from "react-responsive";
import TicketsLogo1 from '../../assets/logos/TicketsLogo1'

function Nav() {
    //usestate hook to know whether the device is mobile or a laptop
    const [isMobile, setIsMobile] = React.useState(false);
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        if (isTabletOrMobile) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [isTabletOrMobile]);

    const handleShow = () => {
        // e.preventDefault();
        setShow(!show);
    }
    const but = `<button onclick="popup('tedxvnrvjiet');" class="tsbutton">Register Now</button><noscript id="tsNoJsMsg">Javascript on your browser is not enabled.</noscript><script src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js" type="text/javascript"></script>`



    return (
        <div className="navbarr">
            <div className="navbarContainer">
                <div className="navLogo">
                    <a href="/">
                        <img className="main_logo" src={logo} alt="logo" />
                        {/* <img src="https://res.cloudinary.com/da1f0jqh8/image/upload/v1674060410/CONV_Logo_2_rbvzbq.png" alt="logo" /> */}
                    </a>
                </div>
                {isMobile ? (
                    <div className="menu-btn">
                        <input className="button" type="checkbox" value="" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="menu">
                            <div className="menu-links">
                                <a href="/" className="linkk">
                                    <div className="menu-link">Home</div>
                                </a>
                                <a href="/about" className="linkk">
                                    <div className="menu-link">About</div>
                                </a>
                                <a href="/past-editions" className="linkk">
                                    <div className="menu-link">Past Editions</div>
                                </a>
                                <a href="/team24" className="linkk">
                                    <div className="menu-link">Team</div>
                                </a>
                                <a href="/sponsors" className="linkk">
                                    <div className="menu-link">Sponsors</div>
                                </a>
                                <a href="/faculty" className="linkk">
                                    <div className="menu-link">Faculty</div>
                                </a>
                                <a href="/contact-us" className="linkk">
                                    <div className="menu-link">Contact Us</div>
                                </a>
                                <a href="/register" className="linkk">
                                    <div className="menu-link">Tickets <TicketsLogo1 className='-ml-0.5' /></div>
                                </a>
                                <a href='/feedback' className="linkk">
                                    <div className="menu-link">Feedback</div>
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="navLinks">
                        <a href="/" className="link">Home</a>
                            <a href="/about" className="link">
                                About
                            </a>
                            <a href="/past-editions" className="link">
                                Past Editions
                                </a>
                            <a href="/team24" className="link">
                                Team
                            </a>
                            <a href="/sponsors" className="link">
                                Sponsors
                            </a>
                            <a href="/faculty" className="link">
                                Faculty
                            </a>
                            <a href="/contact-us" className="link">
                                Contact Us
                            </a>
                            <a href="/register" className="link">
                                Tickets 
                                <TicketsLogo1 />
                            </a>
                            <a href="/feedback" className="link">
                                Feedback
                            </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Nav;
