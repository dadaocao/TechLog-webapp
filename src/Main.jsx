import Home from "./Home";
import About from "./About";
import SDE from './SDE';
import Explore from "./Explore";

import './Main.css';

function Main({page, setPage}) {

    return (
        <main className="main" id="main">
            {(page === 'Home') && <Home setPage={setPage}/>}
            {(page === 'About') && <About setPage={setPage}/>}
            {(page === 'SDE') && <SDE setPage={setPage} className="sde"/>}
            {(page === 'Explore') && <Explore setPage={setPage}/>}
        </main>
    );
}

export default Main;