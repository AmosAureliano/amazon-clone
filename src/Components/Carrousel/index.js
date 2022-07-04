import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carrousel1 from '../../assets/Images/carrousel-home-1.jpg';
import Carrousel2 from '../../assets/Images/carrousel-home-2..jpg';
import Carrousel3 from '../../assets/Images/carrousel-home-3.jpg';
import Carrousel4 from '../../assets/Images/carrousel-home-4.jpg';
import Carrousel5 from '../../assets/Images/carrousel-home-5.jpg';
import Carrousel6 from '../../assets/Images/carrousel-home-6.jpg';


class CarrouselHome extends Component{

    render(){
        return(
            <Carousel>
                <img src={Carrousel1} alt=""/>
                <img src={Carrousel2} alt=""/>
                <img src={Carrousel3} alt=""/>
                <img src={Carrousel4} alt=""/>
                <img src={Carrousel5} alt=""/>
                <img src={Carrousel6} alt=""/>
            </Carousel>
        )
    }
}

export default CarrouselHome;