import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div  >
                <ul className="nav justify-content-end nav-tabs nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Disabled</a>
                    </li>
                </ul>            
                </div>
        );
    }
}

export default Nav;