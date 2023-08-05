import {useState} from 'react';

import './App.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
    const [page, setPage] = useState('Home');
    return (
        <div className="app">
            <Header page={page} setPage={setPage}/>
            <Main page={page} setPage={setPage}/>
            <Footer/>
        </div>
    );
}

export default App;
