import React from 'react';

import photo1 from '../img/DSC_3114.jpg';
import photo2 from '../img/DSC_3163.jpg';
import photo3 from '../img/DSC_3218.jpg';


class Carousel extends React.Component {
    render() {
        return (

                <div class="carousel slide w-50" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={photo1} class="d-block w-50" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={photo2} class="d-block w-50" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={photo3} class="d-block w-50" alt="..." />
                        </div>
                    </div>

                </div>

        );
    }
}

export default Carousel;