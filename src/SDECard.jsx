import './SDECard.css';

import image1 from './image9.jpeg';
import image2 from './image8.jpeg';
import image3 from './image3.jpeg';
import image4 from './image4.jpeg';
import image5 from './image5.jpeg';
import image6 from './image7.jpeg';
// import ModalValidation from "./ModalValidationn";
import {useRef, useState} from "react";


const sdeElements = [
    {
        name: "frontend",
        title: "Frontend Developer",
        path: image1,
        alt: "This is a photo displaying the keyboard",
        description: "You can become a \"frontend developer\", which is basically developing the front of the application, the part that the users see in their browser or their phone screen or TV screen.",
    }, {
        name: "backend",
        title: "Backend Developer",
        path: image2,
        alt: "This is a photo displaying two screens",
        description: "You can become a \"backend developer\" and develop the backend part of the application, the part that connects to the database, saves and updates user data, processes data and so on.",
    }, {
        name: "full",
        title: "Full-Stack Developer",
        path: image3,
        alt: "This is a photo displaying the keyboard, notebook and a macbook",
        description: "Or you can become a \"full stack developer\". They're basically people, who can develop both frontend and backend parts of the application.",
    }, {
        name: "mobile",
        title: "Mobile Developer",
        path: image4,
        alt: "This is a photo displaying a gorgeous glass ball",
        description: "You have mobile app developers, which are developing applications for Android or iOS.",
    }, {
        name: "iot",
        title: "IoT Developer",
        path: image5,
        alt: "This is a photo displaying a big screen",
        description: "You may be an \"IoT developer\", which is \"Internet of Things\", like software in your car for your TV the smart home, the smart lock systems for hotels etc.",
    }, {
        name: "web",
        title: "Web Developer",
        path: image6,
        alt: "This is a photo displaying messy office supplies",
        description: "Then you also have categorizations like \"web developer\", which is basically developing web applications that you see in a computer or laptop browser.",
    },

];





function SDECard({setPage}) {

    const sdeList = sdeElements.map(item => {
        return (
            <div className="card" key={item.name}>
                <h2 className="card__title">{item.title}</h2>
                <img className="card__pic" src={item.path} alt={item.alt} width="200px"
                     height="200px"></img>
                <p className="card__text">{item.description}</p>


                <li className="sde__links">
                    <p>
                        Click to
                        <a
                            href="/explore.html"
                            className="sde__link"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage('Explore');
                            }}
                        >
                            {` test `}
                        </a>
                        which job suits you!
                    </p>
                </li>
            </div>
        );
    });


    return (
        <div className="cards">
            {sdeList}
        </div>
    );
}

export default SDECard;