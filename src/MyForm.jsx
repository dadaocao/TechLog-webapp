import {useState} from 'react';

import './MyForm.css';

function MyForm() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedSubOption, setSelectedSubOption] = useState('');

    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
        setSelectedSubOption('');
    }

    function handleSubOptionChange(event) {
        setSelectedSubOption(event.target.value);
    }

    function getCongratulatoryMessage() {
        if (selectedOption === 'Design') {
            return selectedSubOption === 'Art' ? 'Congratulate! You are suitable for UI designer' :
                selectedSubOption === 'Psychology' ? 'Congratulate! You are suitable for UX Engineer' :
                    '';
        } else if (selectedOption === 'Logic') {
            return selectedSubOption === 'Practice' ? 'Congratulate! You are suitable for IoT Developer' :
                selectedSubOption === 'Abstraction' ? 'Congratulate! You are suitable for Backend Developer / Full-Stack Developer' :
                    '';
        } else if (selectedOption === 'Data') {
            return selectedSubOption === 'Implementation' ? 'Congratulate! You are suitable for Data Analyst' :
                selectedSubOption === 'Theory' ? 'Congratulate! You are suitable for ML/AI Scientist' :
                    '';
        } else {
            return '';
        }
    }

    return (
        <form className="form">
            <label>
                Interested in IT? Let me recommend a role for you! Which do you prefer?
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="">--Which do you prefer?--</option>
                    <option value="Design">Design</option>
                    <option value="Logic">Logic</option>
                    <option value="Data">Data</option>
                </select>
            </label>
            {selectedOption && (
                <label>
                    Great!
                    {selectedOption === 'Design' && (
                        <select value={selectedSubOption} onChange={handleSubOptionChange}>
                            <option value="">--Do you prefer Art or Psychology?--</option>
                            <option value="Art">Art</option>
                            <option value="Psychology">Psychology</option>
                        </select>
                    )}
                    {selectedOption === 'Logic' && (
                        <select value={selectedSubOption} onChange={handleSubOptionChange}>
                            <option value="">--Do you prefer Practice or Abstraction?--</option>
                            <option value="Practice">Practice</option>
                            <option value="Abstraction">Abstraction</option>
                        </select>
                    )}
                    {selectedOption === 'Data' && (
                        <select value={selectedSubOption} onChange={handleSubOptionChange}>
                            <option value="">--Do you prefer Implementation or Theory?--</option>
                            <option value="Implementation">Implementation</option>
                            <option value="Theory">Theory</option>
                        </select>
                    )}
                </label>
            )}
            {getCongratulatoryMessage() && (
                <span>{getCongratulatoryMessage()}</span>
            )}
        </form>
    );
}

export default MyForm;
