import SDECard from "./SDECard";
import ModalValidation from "./ModalValidation";
import GoogleLogIn from "./GoogleLogIn";

function SDE({setPage}) {
    return (
        <>
            <ModalValidation/>
            <SDECard setPage={setPage}/>
            <GoogleLogIn/>
        </>
    );
}

export default SDE;