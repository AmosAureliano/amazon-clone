import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carrousel1 from '../../Assets/Images/carrousel-home-1.jpg';
import Carrousel2 from '../../Assets/Images/carrousel-home-2..jpg';
import Carrousel3 from '../../Assets/Images/carrousel-home-3.jpg';
import Carrousel4 from '../../Assets/Images/carrousel-home-4.jpg';
import Carrousel5 from '../../Assets/Images/carrousel-home-5.jpg';
import Carrousel6 from '../../Assets/Images/carrousel-home-6.jpg';


class CarrouselHome extends Component{
     
    render(){
        
        return(
            <Carousel>
                <img src={Carrousel1} />
                <img src={Carrousel2} />
                <img src={Carrousel3} />
                <img src={Carrousel4} />
                <img src={Carrousel5} />
                <img src={Carrousel6} />
            </Carousel>
        )
    }
}


export default CarrouselHome;