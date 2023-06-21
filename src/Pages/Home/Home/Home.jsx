import React from 'react';
import Banner from './Banner/Banner';
import Tools from '../Tools/Tools';
import About from '../About/About';
import OurTeam from '../OurTeam/OurTeam';
import GetUpdate from '../GetUpdate/GetUpdate';
import OurClient from '../OurClient/OurClient';
import OurServices from '../../OurServices/OurServices';
import Features from '../Features/Features';
import usetitle from '../../../Hooktitle/usetitle';


const Home = () => {
    usetitle('Home')
    return (
        <div className=' overflow-hidden'>
           <Banner></Banner> 
           <Tools></Tools>
           <About></About>
           <Features></Features>
           <OurServices></OurServices>
           <OurTeam></OurTeam>
           <OurClient></OurClient>
           <GetUpdate></GetUpdate>

        </div>
    );
};

export default Home;