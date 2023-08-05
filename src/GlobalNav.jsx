import menu from './menu';
import {useState} from 'react';

import './GlobalNav.css';
// <link rel="stylesheet" href="https://unpkg.com/css.gg@2.0.0/icons/css/menu.css" />


function GlobalNav({className, setPage}) {

    const [showMenu, setShowMenu] = useState(false);

    const list = menu.map(item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a
                    className="global-nav__link"
                    href="" role="button"
                    aria-label={`click to go to ${item.name}page`}
                    onClick={(e) => {
                        e.preventDefault();
                        setPage(item.name);
                    }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    const menuClass = showMenu ? 'global-nav__list--open' : '';
    return (
        <nav className={`global-nav ${className}`}>
            <button
                className="global-nav__toggle"
                aria-label={showMenu ? "Close Menu" : "Open Menu"}
                onClick={() => {
                    console.log('Welcome!');
                    setShowMenu(!showMenu);
                }}
            >
                { showMenu ?

                    <button type="button" className="button__icon" aria-label="tap to close the menu">
                        <i className="gg-menu" aria-label="tap to close the menu"></i>
                    </button>

                    :

                    <button type="button" className="button__icon" aria-label="tap to close the menu">
                        <i className="gg-menu" aria-label="tap to open the menu"></i>
                    </button>
                }
            </button>

            <ul className={`global-nav__list ${menuClass}`}>
                {list}
            </ul>

        </nav>
    );
}



export default GlobalNav;