import {useState} from "react";

import './AccordionSection.css';

function AccordionSection({title, children}) {
    const [isOpen, setIsOpen] = useState(false);

    const openClass = isOpen ? "accordion__button--open" : "";

    return (
        <>
            <button
                className={`accordion__button ${openClass}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={ isOpen ? "true" : "false" }
            >
                <span>{title}</span>
            </button>
            {isOpen && (
                <div className="accordion__text">
                    {children}
                </div>
            )}
        </>
    );
}

export default AccordionSection;
