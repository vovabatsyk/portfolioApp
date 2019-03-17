import React from 'react';
import logo from '../img/myphoto.png';
import logoubm from '../img/logo.png';


class LeftSide extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="card">
                    <img src={logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">The reward comes to those who wait. To reward need courage. You waited for the opportunity and were so brave that you received an award.</p>
                    </div>
                </div>
                <div className="logoubmWrapper">
                    <img className="logoubm" src={logoubm} alt="logoubm" />
                </div>
            </div>

        );
    }
}
export default LeftSide;