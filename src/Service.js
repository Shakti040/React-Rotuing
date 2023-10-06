import React from 'react';
import Card from './Card';

import SData from './SData';

const Service = () => {

    return (
        <>
           <div className='my-5'>
                <h1 className='text-center'> Our Services </h1>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                           {SData.map((val,index)=>{
                                return <Card 
                                key={index}
                                id={index}
                                title={val.title}
                                imgsrc={val.imgsrc}
                                />
                           })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Service;