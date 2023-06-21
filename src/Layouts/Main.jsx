import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../Pages/Share/Fotter';
import Navber from '../Pages/Share/Navber/Navber';

const Main = () => {
    return (
        <div>
           <Navber></Navber>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;