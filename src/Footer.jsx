import './Footer.css';

const socialMenu = [
    {
        name: "Contact me on LinkedIn",
        path: "https://www.linkedin.com/in/xinyi-wei-/",
    }, {
        name: "WIT forum: Gotara",
        path: "https://www.gotara.com/",
    },
];
function Footer() {
    const socialList = socialMenu.map( item => {
        return (
            <li className="footer__social-item" key={item.name}>
                <a className="footer__social-link" href={item.path}>
                    {item.name}
                </a>
            </li>
        )
    });

    return (
        <footer className="footer">
            <h1 className="footer__title"> Code doesn't have gender, but people who code do.</h1>
            <ul className="footer__social-list">
                {socialList}
            </ul>

        </footer>
    );
}

export default Footer;