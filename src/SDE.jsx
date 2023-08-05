import SDECard from "./SDECard";
import ModalValidation from "./ModalValidation";

function SDE({setPage}) {
    return (
        <>
            <ModalValidation/>
            <SDECard setPage={setPage}/>
        </>
    );
}

export default SDE;