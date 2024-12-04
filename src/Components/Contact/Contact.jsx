import React from 'react'

function Contact() {
    return <>
        <div className='d-flex flex-row justify-content-evenly align-items-center gap-5'>
            <div className='d-flex flex-column gap-5'>
                    <div className='p-3' style={{boxShadow:'0.5px 0.5px 60px 0.2px rgba(47, 46, 48, 0.1)', borderRadius:'4px'}}>
                        <i className="fa-solid fa-phone rounded-circle text-light p-2 my-2" style={{backgroundColor:'rgba(219, 68, 68, 1)'}}></i>
                        <span> Call To Us</span>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <div className='p-3' style={{boxShadow:'0.5px 0.5px 60px 0.2px rgba(47, 46, 48, 0.1)', borderRadius:'4px'}}>
                        <i className="fa-regular fa-envelope rounded-circle text-light p-2 my-2" style={{backgroundColor:'rgba(219, 68, 68, 1)'}}></i>
                        <span> Write To US</span>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
            </div>
            <div className='p-5' style={{boxShadow:'0.5px 0.5px 60px 0.2px rgba(47, 46, 48, 0.1)', borderRadius:'4px'}}>
                <form>
                    <div className='d-flex flex-row gap-2 my-2'>
                        <input className='p-2' style={{border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} type="text" placeholder='Your Name'/>
                        <input className='p-2' style={{border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} type="email" placeholder='Your Email'/>
                        <input className='p-2' style={{border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} type="tel" placeholder='Your Phone'/>
                    </div>
                    <textarea className='p-2' placeholder='Your Massage' style={{border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} cols={'78'} rows={'10'}></textarea>
                    <div className='d-flex align-items-center justify-content-end'>
                        <button style={{backgroundColor:'rgba(219, 68, 68, 1)', border:'none', borderRadius:'4px'}} className='px-5 py-3 text-light'>Send Massage</button>
                    </div>
                </form>
                
            </div>
        </div>
    </>
}

export default Contact
