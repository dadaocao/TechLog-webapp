import AccordionSection from "./AccordionSection";
import MyForm from "./MyForm";

import './Explore.css';

function Explore({setPage}) {
    return (
        <div className="explore">
            <MyForm></MyForm>
            <AccordionSection className="accordion__open__list" title="Top UX Concentration Courses ">
                CSYE 7280	User Experience Design and Testing
                <p></p>
                INFO 6150	Web Design and User Experience Engineering
                <p></p>
                INFO 6245	Planning and Managing Information Systems Development
                <p></p>
                INFO 6350	Smartphones-Based Web Development
            </AccordionSection>
            <AccordionSection className="accordion__open" title="Top Smart Contracts Concentration Courses">
                INFO 7500	Cryptocurrency and Smart Contract Engineering
                <p></p>
                INFO 7510	Smart Contract Application Engineering and Development
                <p></p>
                INFO 7520	Engineering of Advanced Cryptocurrency Systems
                <p></p>
                INFO 7525	Regulatory Aspects of Smart Contract Automation
                <p></p>
                INFO 7535	Digital Smart Contracts Product Innovations
            </AccordionSection>
        </div>
    );
}

export default Explore;