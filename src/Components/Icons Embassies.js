import React from "react";
import imge1 from './11.jpg'
import imge2 from './22.jpg'
import imge3 from './33.jpg'
import imge4 from './44.jpg'

function IconsEmbassies() {
    return (
        <div>
            <div className="container text-center mt-5">
                <h1>Our picket</h1>
                <div className="row">
                    <div className="icons col-md-3 col-sm-6  ">
                       <img src={imge1} className=' shadow rounded-circle'/>
                        <h1>austrail</h1>
                        <p>You do not have to comply with the license for elements of the material in the public domain
                            or where your use is permitted by an applicabl</p>
                    </div>
                    <div className="icons col-md-3 col-sm-6 wow animate__backInDown">
                        <img src={imge2}  className=' shadow rounded-circle'/>
                        <h1>canada</h1>
                        <p>You do not have to comply with the license for elements of the material in the public domain
                            or where your use is permitted by an applicabl</p>
                    </div>
                    <div className="icons col-md-3 col-sm-6 wow animate__backInDown">

                        <img src={imge3}  className=' shadow rounded-circle'/>
                        <h1>france</h1>
                        <p>You do not have to comply with the license for elements of the material in the public domain
                            or where your use is permitted by an applicabl</p>
                    </div>
                    <div className="icons col-md-3 col-sm-6 wow animate__backInDown">

                        <img src={imge4}  className='shadow rounded-circle'/>
                        <h1>holanda</h1>
                        <p>You do not have to comply with the license for elements of the material in the public domain
                            or where your use is permitted by an applicabl</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export  default IconsEmbassies