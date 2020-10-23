import React from "react";
import img2 from './123.jpg'

function Massege() {
    return (
        <div className='container mt-5'>
           <h1 className='text-center'>Our ambitions</h1>
            <div className="card shadow p-3 mb-5 bg-white rounded ">
                <div className="row">
                    <div className="immg col-6">
                        <img src={img2} />
                    </div>
                    <div className="carddd col-6 ">
                        <h5 className="card-title  ">tittle text</h5>
                        <p className="card-text">It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                            here, content here', making it look like readable English. Many desktop publishing packages
                            and web page editors now use </p>
                        <button href="#" className="card-link btn btn-outline-success text-center">get link</button>


                    </div>
                </div>
            </div>
        </div>
    );
}
export default Massege