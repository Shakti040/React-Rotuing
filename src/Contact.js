import React, { useState } from 'react';



const Contact = () => {

    const [data,setdata]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:'',
    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setdata((prev)=>{
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const FormSubmit=(e)=>{
        e.preventDefault();
        alert("Form submitted");
    }

    return (
        <>
        <div className='my-5'>
            <h1 className='text-center'> Contact US </h1>

        </div>

        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                    <form onSubmit={FormSubmit}>
                    <div className="mb-3">
  <label  className="form-label">FullName</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your full name" />
</div>
<div className="mb-3">
  <label  className="form-label">Phone </label>
  <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number" />
</div>
<div className="mb-3">
  <label  className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
</div>

            <div className='col-12'>
                <button className='btn btn-outline-primary' type="submit"> Submit Form </button>

            </div>
                    </form>

                </div>

            </div>

        </div>

        </>
    )
};

export default Contact;