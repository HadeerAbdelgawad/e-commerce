import React from 'react'

function About() {
    return <>
    <div className='my-5 d-flex flex-md-row flex-column justify-content-between align-items-center'>
        <div className='info px-3'>
            <h2 style={{fontFamily:'"Poppins", serif', fontWeight:'600',fontSize:'54px', lineHeight:'64px'}}>Our Story</h2>
            <p style={{fontFamily:'"Poppins", serif', fontWeight:'400', fontSize:'16px', lineHeight:'26px'}}>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p style={{fontFamily:'"Poppins", serif', fontWeight:'400', fontSize:'16px', lineHeight:'26px'}}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className="aboutImg">
            <img src="/about.jpeg" alt="" width={'800px'} height={'600px'}/>
        </div>
    </div>

    <div className='px-3 py-5 d-flex flex-md-row flex-column justify-content-evenly align-items-center'>
        <div style={{border:'1px solid rgba(0, 0, 0, 0.3)', width:'270px', height:'230px', textAlign:'center'}} className='icon-box pt-5'>
            <i style={{fontSize:'40px', color:'white', backgroundColor:'black',outline:'7px solid rgba(47, 46, 48, 0.3)', width:'60px', textAlign:'center'}} className="fa-solid fa-building rounded-circle py-2 px-2 mb-3"></i>
            <h2 style={{fontFamily:'"Inter", sans-serif', fontWeight:'700', fontSize:'32px'}}>10.5k</h2>
            <span style={{fontFamily:'"Poppins", serif',fontWeight:'400', fontSize:'16px'}}>Sallers active our site</span>
        </div>
        <div style={{border:'1px solid rgba(0, 0, 0, 0.3)', width:'270px', height:'230px' , textAlign:'center'}} className=' icon-box pt-5'>
            <i style={{fontSize:'40px', color:'white', backgroundColor:'black',outline:'7px solid rgba(47, 46, 48, 0.3)', width:'60px', textAlign:'center'}} className="fa-solid fa-dollar-sign rounded-circle py-2 px-2 mb-3"></i>
            <h2 style={{fontFamily:'"Inter", sans-serif', fontWeight:'700', fontSize:'32px'}}>33k</h2>
            <span style={{fontFamily:'"Poppins", serif',fontWeight:'400', fontSize:'16px'}}>Mopnthly Produduct Sale</span>
        </div>
        <div style={{border:'1px solid rgba(0, 0, 0, 0.3)', width:'270px', height:'230px' , textAlign:'center'}} className='icon-box pt-5'>
            <i style={{fontSize:'40px', color:'white', backgroundColor:'black',outline:'7px solid rgba(47, 46, 48, 0.3)', width:'60px', textAlign:'center'}} className="fa-solid fa-bag-shopping rounded-circle py-2 px-2 mb-3"></i>
            <h2 style={{fontFamily:'"Inter", sans-serif', fontWeight:'700', fontSize:'32px'}}>45.5k</h2>
            <span style={{fontFamily:'"Poppins", serif',fontWeight:'400', fontSize:'16px'}}>Customer active in our site</span>
        </div>
        <div style={{border:'1px solid rgba(0, 0, 0, 0.3)', width:'270px', height:'230px' , textAlign:'center'}} className='icon-box pt-5'>
            <i style={{fontSize:'40px', color:'white', backgroundColor:'black',outline:'7px solid rgba(47, 46, 48, 0.3)', width:'60px', textAlign:'center'}} className="fa-solid fa-sack-dollar rounded-circle py-2 px-2 mb-3"></i>
            <h2 style={{fontFamily:'"Inter", sans-serif', fontWeight:'700', fontSize:'32px'}}>25k</h2>
            <span style={{fontFamily:'"Poppins", serif',fontWeight:'400', fontSize:'16px'}}>Anual gross sale in our site</span>
        </div>

    </div>

    <div className='px-3 d-flex flex-md-row flex-column justify-content-evenly align-items-center'>
        <div className='d-flex flex-column px-4'>
            <div className='px-4' style={{backgroundColor:'rgba(245, 245, 245, 1)'}}>
                <img  src="/person1.png" alt="person1" width={'236px'} height={'391px'}/>
            </div>
            <h2>Tom Cruise</h2>
            <span>Founder & Chairman</span>
            <div>
            <i className="px-2 fab fa-twitter"></i>
            <i className="px-2 fa-brands fa-instagram"></i>
            <i className="px-2 fa-brands fa-linkedin-in"></i>
            </div>
        </div>
        <div  className='d-flex flex-column px-4'>
            <div className='px-4' style={{ backgroundColor:'rgba(245, 245, 245, 1)'}}>
                <img style={{backgroundColor:'rgba(245, 245, 245, 1)'}} src="/person2.png" alt="person1" width={'236px'} height={'391px'}/>
            </div>
            <h2>Emma Watson</h2>
            <span>Managing Director</span>
            <div>
            <i className="px-2 fab fa-twitter"></i>
            <i className="px-2 fa-brands fa-instagram"></i>
            <i className="px-2 fa-brands fa-linkedin-in"></i>
            </div>
        </div>
        <div className='d-flex flex-column px-4'>
            <div className='px-4'v style={{backgroundColor:'rgba(245, 245, 245, 1)'}}>
                <img style={{backgroundColor:'rgba(245, 245, 245, 1)'}} src="/person3.png" alt="person1" width={'236px'} height={'391px'}/>
            </div>
            <h2>Will Smith</h2>
            <span>Product Designer</span>
            <div>
            <i className="px-2 fab fa-twitter"></i>
            <i className="px-2 fa-brands fa-instagram"></i>
            <i className="px-2 fa-brands fa-linkedin-in"></i>
            </div>
        </div>

    </div>

    <div className='d-flex flex-md-row flex-column align-items-center justify-content-evenly mt-5 pt-5'>
            <div style={{textAlign:'center'}}>
                <div className='mb-2'>
                    <i style={{fontSize:'35px', color:'white', backgroundColor:'black', outline:'7px solid rgba(47, 46, 48, 0.3)', width:'60px'}} className="fa-solid fa-van-shuttle rounded-circle px-2 py-2"></i>
                </div>
                <p style={{fontFamily:'"Poppins", serif', fontWeight:'600', fontSize:'20px', lineHeight:'28px'}}>FREE AND FAST DELIVERY</p>
                <span style={{fontFamily:'"Poppins", serif', fontWeight:'400', fontSize:'14px', lineHeight:'21px'}}>Free delivery for all orders over $140</span>
            </div>
            <div style={{textAlign:'center'}}>
                <div className='mb-2'>
                    <i style={{fontSize:'40px', color:'white', backgroundColor:'black',outline:'7px solid rgba(47, 46, 48, 0.3)', width:'60px'}} className="fa-solid fa-headphones-simple rounded-circle px-2 py-2"></i>
                </div>
                <p style={{fontFamily:'"Poppins", serif', fontWeight:'600', fontSize:'20px', lineHeight:'28px'}}>24/7 CUSTOMER SERVICE</p>
                <span tyle={{fontFamily:'"Poppins", serif', fontWeight:'400', fontSize:'14px', lineHeight:'21px'}}>Friendly 24/7 customer support</span>
            </div>
            <div style={{textAlign:'center'}}>
                <div className='mb-2'>
                    <img src="/protection (2).png" alt="anthentication" width={'60px'} style={{backgroundColor:'black', outline:'7px solid rgba(47, 46, 48, 0.3)'}} className='rounded-circle py-2 px-2'/>
                </div>
                <p style={{fontFamily:'"Poppins", serif', fontWeight:'600', fontSize:'20px', lineHeight:'28px'}}>MONEY BACK GUARANTEE</p>
                <span tyle={{fontFamily:'"Poppins", serif', fontWeight:'400', fontSize:'14px', lineHeight:'21px'}}>We reurn money within 30 days</span>
            </div>
        </div>
    </>
}

export default About
