import React from "react";
import {Carousel,Button} from "react-bootstrap";
import Img44 from "./111.jpg";
import Img22 from "./222.jpg";
import Img33 from "./333.jpg";
import Img11 from "./444.jpg";

function Whoareyou() {
    return (
        <div >

            <div>
                <div className="container text-center mt-5">
                    <h1>Founders</h1>
                    <div className="row">
                        <div className="icons col-md-3 col-sm-6  ">
                            <img src={Img11} className=' shadow rounded-circle' />
                            <h1 className='fonts mt-3'>Muawiya </h1>
                            <p>You do not have to comply with the license for elements of the material in the public domain
                                or where your use is permitted by an applicabl</p>
                            <a href="https://www.facebook.com/Moawya.abu.hameda">  <Button className='face mr-2' >facecook</Button></a>
                            <Button className='whats'>whatsupp</Button>

                        </div>
                        <div className="icons col-md-3 col-sm-6 wow animate__backInDown">
                            <img src={Img22}  className=' shadow rounded-circle '/>
                            <h1  className='fonts mt-3'>Iman </h1>
                            <p>You do not have to comply with the license for elements of the material in the public domain
                                or where your use is permitted by an applicabl</p>
                            <a href="https://www.facebook.com/profile.php?id=100005691938861">  <Button className='face mr-2' >facecook</Button></a>
                            <Button className='whats'>whatsupp</Button>
                        </div>
                        <div className="icons col-md-3 col-sm-6 wow animate__backInDown">

                            <img src={Img44}  className=' shadow rounded-circle'/>
                            <h1  className='fonts mt-3'>Muhannad </h1>
                            <p>You do not have to comply with the license for elements of the material in the public domain
                                or where your use is permitted by an applicabl</p>
                            <Button className='face mr-2' >facecook</Button>
                            <Button className='whats'>whatsupp</Button>
                        </div>
                        <div className="icons col-md-3 col-sm-6 wow animate__backInDown">

                            <img src={Img33}  className=' shadow rounded-circle'/>
                            <h1  className='fonts mt-3'>yousef</h1>
                            <p>You do not have to comply with the license for elements of the material in the public domain
                                or where your use is permitted by an applicabl</p>
                            <Button className='face mr-2' >facecook</Button>
                            <Button className='whats'>whatsupp</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Whoareyou;