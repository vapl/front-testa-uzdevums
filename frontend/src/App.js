import React from 'react';
import Heroe from './components/Heroe';
import Faq from './components/Faq';
import Properties from './components/Properties';
import Apply from './components/Apply';
import NavBarTop from './components/NavBarTop';

const App = () => {
    return (
        <> 
            <NavBarTop />
            <Heroe />
            <Faq />
            <Properties />
            <Apply />
        </>
    );
}

export default App;