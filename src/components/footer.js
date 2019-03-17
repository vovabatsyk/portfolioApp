import React from 'react';
import facebook from '../img/social/facebook.png';
import linkedin from '../img/social/linkedin.png';
import instagram from '../img/social/instagram.png';
import google from '../img/social/google.png';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar fixed-bottom">
                    <a class="navbar-brand">Get connected with me on social networks!</a>
                    <ul className="linkWrapper">
                        <li>
                            <a href=""><img className="link-img" src={facebook} alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img className="link-img" src={linkedin} alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img className="link-img" src={instagram} alt="" /></a>
                        </li>
                        <li>
                            <a href=""><img className="link-img" src={google} alt="" /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Footer;