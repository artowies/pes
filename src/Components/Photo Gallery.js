import React from "react";
import Img1 from './1.jpg'
import Img2 from './2.jpg'
import Img4 from './4.jpg'

import {Carousel} from "react-bootstrap";

function PhotoGallery() {
    return (
        <div>
            <div className='container mt-5'>
            <Carousel size="small">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>The Palestinian Youth Authority of Syria</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>The Palestinian Youth Authority of Syria</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>The Palestinian Youth Authority of Syria</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}

export default PhotoGallery
