import {useRef, useState} from "react";

import "./ModalValidation.css";

function ModalValidation() {
    const dialogRef = useRef();
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        // Perform validation
        let isValid = true;

        if (!email) {
            setEmailError("This field is required");
            isValid = false;
        } else if (!email.includes("@")) {
            setEmailError("Please enter a valid email address");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (email !== confirmEmail) {
            setConfirmError("Email addresses doesn't not match");
            isValid = false;
        } else {
            setConfirmError("");
        }

        // Submit the form if valid
        if (isValid) {
            // Reset the form
            setEmail(`Welcome ${email} to the world of tech!`);
            setConfirmEmail("");
        }
    };

    return (
        <div>
            <p className="subscribe">
                Click to
                <button aria-label="click to register" onClick={() => dialogRef.current.showModal()}>register</button>
                for our free courses.
            </p>

            <dialog ref={dialogRef} className="modal">
                <h2 className="dialog__title">Subscribe for our free courses!</h2>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-item register__email register-email">
                        <label className="label-email" htmlFor="email"> Email: * required:</label>
                        <input
                            className="input-email"
                            name="email"
                            id="email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="register-email__error">{emailError}</span>
                    </div>

                    <div className="form-item register__confirm register-confirm">
                        <label className="label-confirm" htmlFor="confirm">Confirm Email: * required:</label>
                        <input
                            className="input-confirm"
                            name="confirm"
                            id="confirm"
                            type="text"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                        />
                        <span className="register-confirm__error">{confirmError}</span>
                    </div>
                    <span className="button__container">
            <button className="submit-button" type="submit" aria-label="click to submit">
              Subscribe
            </button>
                        <button className="cancel-button"
                                type="button"
                                aria-label="click to cancel"
                                onClick={() => dialogRef.current.close()}>
                            cancel！
                        </button>
          </span>
                </form>
            </dialog>
        </div>
    );
}


export default ModalValidation;