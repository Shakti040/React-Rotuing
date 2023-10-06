import React from 'react';
import { NavLink } from 'react-router-dom';



const Common = (props) => {

    return (
        <>
        <section id="header" className="d-flex align-items-center">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                            <h1>{props.name} <strong className='brand-name'> S&A </strong></h1>
                            <h2 className='my-3'>We are the team of talented developer making websites</h2>
                            <div className='mt-3'>
                                <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                            </div>
                        </div>

                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_HBZhuhF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/nweeqf97l2md3tlqkjyt.jpg" className='img-fluid animated' alt="Home Image" />

                        </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        </>
    )
};

export default Common;