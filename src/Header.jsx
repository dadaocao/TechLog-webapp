import GlobalNav from './GlobalNav';

import './Header.css';

import image1 from './image1.jpeg';

function Header({setPage}) {

    function handleSkipToContent() {
        const main = document.getElementById('main');
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            handleSkipToContent();
        }
    }

    return (
        <header className="header">
            <a href="" role="button" aria-label="click to the homepage" onClick={(e) => {
                e.preventDefault();
                setPage('Home');
            }}>
                <img
                    src={image1}
                    width="100px"
                    height="100px"
                    className="header__logo"
                    alt="website logo, a open computer"
                />
            </a>
            <h1 className="header__title">
                <a href="#main" className="skip" onClick={handleSkipToContent} onKeyDown={handleKeyDown}
                   aria-label="tap to skip to main content">
                    Skip to Content
                </a>
                Welcome to the World of Tech
            </h1>
            <GlobalNav className="header__nav" setPage={setPage}/>
        </header>
    );
}

export default Header;