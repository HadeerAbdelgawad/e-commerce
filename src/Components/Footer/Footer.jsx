import React from 'react';

function Footer() {
    return<>
        <footer className='footer bottom-0 flex-column w-100' style={{ backgroundColor: 'black' ,marginTop:'120px'}}>
            <div className='flex-md-row flex-column d-flex justify-content-evenly align-items-stretch text-light p-4' >

                <div className='flex-md-column flex-row'>
                    <h2>Exclusive</h2>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="input-group mt-4" style={{ border: '1px solid white'}}>
                        <input
                            type="text"
                            className="form-control border-0 bg-transparent input-placeholder"
                            style={{color:'white'}}
                            placeholder="Enter your email"
                            aria-label="Enter your email"
                            aria-describedby="basic-addon2"
                        />
                        <span className="input-group-text border-0 bg-transparent text-white" id="basic-addon2">
                            <i className="far fa-paper-plane"></i>
                        </span>
                    </div>
                </div>

                <div className='flex-md-column flex-row'>
                    <h3>Support</h3>
                    <p>111 Bijoy Sarani, Dhaka,<br/> DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                <div className='flex-md-column flex-row'>
                    <h3>Account</h3>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>

                <div className='flex-md-column flex-row'>
                    <h3>Quick Link</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>

                <div className='flex-md-column flex-row '>
                    <h3>Download App</h3>
                    <p style={{color:'rgb(171, 171, 171)', fontSize:'13px'}}>Save $3 with App New User Only</p>
                    <div className='d-flex flex-md-row flex-column align-items-center gap-2'>
                        <div>
                            <img src="/qrCode.jpeg" width={"70px"} alt="QR Code" />
                        </div>
                        <div className='flex-md-column gap-5'>
                            <div>
                            <img src='/googlePlay.jpeg' alt="Google Play" width={"100px"} />
                            </div>
                            <div>
                            <img src='/Apple app.jpeg' alt="Apple Store" width={"100px"} className="mt-2" />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex pt-3'>
                        <i className="fab fa-facebook-f px-3"></i>
                        <i className="fab fa-twitter px-3"></i>
                        <i className="fab fa-instagram px-3"></i>
                        <i className="fab fa-linkedin-in px-3"></i>
                        </div>
                </div>
            </div>
            <div className='text-center p-2 text-Secondary'>
                <p>&copy;Copyright Rimel 2022. All right reserved</p>
            </div>
           
        </footer>
    </>;
}

export default Footer;
