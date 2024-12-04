    import React, { useEffect, useRef, useState } from 'react'
    import MediaItem from '../MediaItem/MediaItem'
    import axios from 'axios'
    import { Link } from 'react-router-dom';
    import CategoryItem from '../CategoryItem/CategoryItem';
    import BestProduct from '../BestProducts/BestProducts';
    import ExploreProducts from '../ExploreProducts/ExploreProducts';

    const ITEM_WIDTH=300;

    function Home() {

        const [Products, setProducts]= useState([])
        const [ProductsCategorie, setProductsCategorie]= useState([])
        const [BestProducts, setBestProducts]= useState([])
        const[second,setSecond]=useState(0)
        





        async function getDaysProducts(mediaTypes, callback){
            let {data}= await axios.get(`https://fakestoreapi.com/products/${mediaTypes}`)
            callback(data)

            console.log(data)
        }

        async function getlimitedProducts(mediaTypes,callback) {
            let{data}= await axios.get(`https://fakestoreapi.com/products?limit=4`)
            callback(data)
            console.log(data)
            
        }

    

        useEffect(()=>{
            getDaysProducts('',setProducts)
            getDaysProducts('categories',setProductsCategorie)
            getlimitedProducts('',setBestProducts)

        },[])

    

        const addsec = ()=>{
            setSecond(second+1)
        }

        useEffect(()=>{
            const time=setInterval(addsec ,1000)
            return()=>{
                clearInterval(time)
            }
        })


        const handelScroll=(scrollAmount,containerId)=>{
            const container= document.querySelector(`[data-container="${containerId}"]`);
            if (container) {
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                let newScrollPosition = container.scrollLeft + scrollAmount

                if (newScrollPosition >= maxScrollLeft) {
                    newScrollPosition = 0;
                } else if (newScrollPosition <= 0) {
                    newScrollPosition = maxScrollLeft; 
                }
                container.scrollLeft = newScrollPosition;
            }
        }
        
        return <>
        <div className='top-box flex-md-row flex-column d-flex justify-content-between'>
            <div className="w3-sidebar w3-light-grey w3-bar-block ps-5 " style={{min_width:"25%", borderRight:'1px solid gray'}}>
                <nav className='flex-column'>
                <div className="dropdown dropend">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                        Woman's Fashion
                    </button>
                </div>   
                <div className="dropdown dropend">
                    <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    Men's Fashion
                    </button>
                </div>              
                    <button href="#" className="btn border-0 w3-bar-item w3-button d-block text-decoration-none ps-2.5">Electronics</button>
                    <button href="#" className="btn border-0 w3-bar-item w3-button d-block text-decoration-none ps-2.5">Home & LifeStyle</button>
                    <button href="#" className="btn border-0 w3-bar-item w3-button d-block text-decoration-none ps-2.5">Medicine</button>
                    <button href="#" className="btn border-0 w3-bar-item w3-button d-block text-decoration-none ps-2.5">Sports & Outdoor</button>
                    <button href="#" className="btn border-0 w3-bar-item w3-button d-block text-decoration-none ps-2.5">Baby's & Toys</button>
                    <button href="#" className="btn border-0 w3-bar-item w3-button d-block text-decoration-none ps-2.5">Groceries & Pets</button>
                    <button href="#" className="btn border-0 w3-bar-item w3-button d-block text-decoration-none ps-2.5">Health & Beauty</button>



                </nav>
                
            </div>

            <div className='side-img pe-5 '>
                <div className='bg-black flex-md-row flex-column d-flex justify-content-between' style={{max_width:'892px', min_height:'352px'}}>
                    <div className='flex-column'>
                        <div className='mt-5 ms-5' style={{width:'190px', height:'49px'}}>
                            <img src='/apple.png' width={'40px'} height={'49px'}/>
                            <span className='text-light' style={{fontSize:'13px', fontWeight:'10'}}> iphone 14 series</span>
                        </div>
                        <div className='title text-light mt-3 ms-5' >
                            <h1 style={{fontSize:'50px'}}>Up to 10% <br/>off Voucher</h1>
                        </div>
                        <div className='title text-light mt-3 ms-5' style={{fontSize:'13px', fontWeight:'10'}}>
                            <p style={{textDecoration:'underline', textUnderlineOffset:'6px', display:'inline-block'}}>Shop Now </p><i className="ms-2 fa-solid fa-arrow-right" style={{width:'24px', height:'24px'}}></i>
                        </div>
                    
                    </div>
                    <div className='img-phone'>
                    <img src='/iphone.jpeg' className='right-0' width={'496px'} height={'352px'}/>
                    </div>
                
                </div>
                
            </div>
        </div>


        <div className='px-5 today' style={{marginTop:'90px'}}>
            <div className='d-flex'>
            <div className='box'></div>
            <p className='px-3 h3' style={{color:'#DB4444'}}>Today's</p>
            </div>
        </div>

        <div className='px-5 d-flex align-items-center justify-content-between'>

            
            <div className='d-flex gap-5'>
                    <div className='side-title'>
                        <h2 className='pe-5' style={{ fontWeight:'600', fontSize:'36px'}}>Flash Sales</h2>
                    </div>

                    <table style={{textAlign:'center', marginTop:'-35px'}}>
                        <tbody>
                        <tr style={{lineHeight:'18px'}}>
                            <td style={{fontWeight:'500', fontSize:'12px'}}>Days</td>
                            <td className='px-3'></td>
                            <td style={{fontWeight:'500', fontSize:'12px'}}>Hours</td>
                            <td className='px-3'></td>
                            <td style={{fontWeight:'500', fontSize:'12px'}}>Minutes</td>
                            <td className='px-3'></td>
                            <td style={{fontWeight:'500', fontSize:'12px'}}>Seconds</td>
                        </tr>
                        <tr style={{lineHeight:'18px'}}>
                            <td style={{fontWeight:'700', fontSize:'32px'}}>{Math.floor((second/60)*12)}</td>
                            <td style={{color:'#E07575', fontSize:'30px'}}>:</td>
                            <td style={{fontWeight:'700', fontSize:'32px'}}>{Math.floor(second/3600)}</td>
                            <td style={{color:'#E07575', fontSize:'30px'}}>:</td>
                            <td style={{fontWeight:'700', fontSize:'32px'}}>{Math.floor(second/60)}</td>
                            <td style={{color:'#E07575', fontSize:'30px'}}>:</td>
                            <td style={{fontWeight:'700', fontSize:'32px'}}>{second}</td>
                        </tr>
                        </tbody>
                        
                    </table>


                    
            </div>
            <div className='d-flex justify-content-evenly'>
                        <div onClick={()=>{handelScroll(-ITEM_WIDTH,"container1")}} className='rounded-circle p-3 mx-2' style={{backgroundColor:'#F5F5F5', cursor:'pointer'}}>
                            <i class="fa-solid fa-arrow-left"></i>
                        </div>
                        <div onClick={()=>{handelScroll(ITEM_WIDTH,"container1")}} className='rounded-circle p-3 mx-2' style={{backgroundColor:'#F5F5F5', cursor:'pointer'}}>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>

            </div>
                
        </div>

        <div  data-container="container1" className='containers py-2 d-flex flex-md-row flex-column align-items-center justify-centent-center'    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollBehavior: 'smooth'
                    }}>
                {Products.map((item,index)=><MediaItem key={index} item={item}/>)}
        </div>
        <div className='d-flex justify-content-center'>
            <Link to='/allmedia'>
                <button className='btn' style={{width:'234px', height:'56px', fontSize:'16px', backgroundColor:'#DB4444', color:'white'}}>
                    View All Products
                </button>
            </Link>
        </div>

    {/* ///////////////////////////////////////////////////////////////////////////////////////// */}


        <hr className='mx-5 mt-5'/>


    {/* ///////////////////////////////////////////////////////////////////////////////////////// */}


        <div>

        <div className='px-5 today' style={{marginTop:'90px'}}>
            <div className='d-flex'>
                <div className='box'></div>
                    <p className='px-3 h3' style={{color:'#DB4444'}}>Categories</p>
                </div>
        </div>


        <div className='px-5 d-flex align-items-center justify-content-between'>
            <div className='side-title'>
                <h2 className='pe-5' style={{ fontWeight:'600', fontSize:'36px'}}>Browse By Category</h2>
            </div>
            <div className='d-flex justify-content-evenly'>
                        <div onClick={()=>{handelScroll(-ITEM_WIDTH, "container2")}}  className='rounded-circle p-3 mx-2' style={{backgroundColor:'#F5F5F5', cursor:'pointer'}}><i class="fa-solid fa-arrow-left"></i></div>
                        <div onClick={()=>{handelScroll(ITEM_WIDTH, "container2")}}  className='rounded-circle p-3 mx-2' style={{backgroundColor:'#F5F5F5',cursor:'pointer'}}><i class="fa-solid fa-arrow-right"></i></div>

            </div>
        </div>

        </div>

        <div  data-container="container2" className='containers py-2 d-flex align-items-center justify-centent-center'    
                style={{
                    display: 'flex',
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth'
                }}>
            {ProductsCategorie.map((item,index)=><CategoryItem key={index} item={item}/>)}
        </div>

    {/* ///////////////////////////////////////////////////////////////////////////////////////// */}


    <hr className='mx-5 mt-5'/>


    {/* ///////////////////////////////////////////////////////////////////////////////////////// */}

        <div>
            <div className='px-5 today' style={{marginTop:'90px'}}>
                <div className='d-flex'>
                    <div className='box'></div>
                        <p className='px-3 h3' style={{color:'#DB4444'}}>This Month</p>
                    </div>
            </div>

            <div className='px-5 d-flex align-items-center justify-content-between'>
                <div className='side-title'>
                    <h2 className='pe-5' style={{ fontWeight:'600', fontSize:'36px'}}>Best Selling Products</h2>
                </div>
                <div className='d-flex justify-content-evenly'>
                            <Link to='/allmedia'>
                                <button className='btn' style={{backgroundColor:'#DB4444', color:'white', width:'159px', height:'56px', fontSize:'16px'}}>View All</button>
                            </Link>

                </div>

            </div>
        </div>
        <div className='container py-2 d-flex align-items-center justify-centent-center'>
            {BestProducts.map((item,index)=><BestProduct key={index} item={item}/>)}
        </div>

        {/* /////////////////////////////////////////////////////////////////////////////////// */}

        <div className='side-img mt-5' style={{width:'80%',margin:'auto'}}>
                <div className='bg-black flex-md-row flex-column d-flex justify-content-between align-items-center' style={{max_width:'892px', min_height:'352px'}}>
                    <div className='flex-column'>
                        <div className='ms-5' style={{width:'190px', height:'49px'}}>
                            <span className='' style={{fontSize:'16px', fontWeight:'600', color:'#00FF66'}}> Categories</span>
                        </div>
                        <div className='title text-light mt-3 ms-5' >
                            <h1 style={{fontSize:'48px'}}>Enhance Your <br/>Music Experience</h1>
                        </div>
                        <div className='title text-light mt-3 ms-5' style={{fontSize:'13px', fontWeight:'10'}}>
                            <button className='px-5 py-3' style={{backgroundColor:'#00FF66', color:'white', border:'none', borderRadius:'3px', fontSize:'16px'}}>Buy Now! </button>
                        </div>
                    
                    </div>
                    <div className='img-spaeker' >
                    <img src='/speaker-img.png' className='right-0' width={'600px'} height={'420px'}/>
                    </div>
                
                </div>
                
            </div>

            {/* ////////////////////////////////////////////////////////////////////////// */}

        <div>

            <div className='px-5 today' style={{marginTop:'90px'}}>
                <div className='d-flex'>
                    <div className='box'></div>
                        <p className='px-3 h3' style={{color:'#DB4444'}}>Our Products</p>
                    </div>
                 </div>


            <div className='px-5 d-flex align-items-center justify-content-between'>
                <div className='side-title'>
                    <h2 className='pe-5' style={{ fontWeight:'600', fontSize:'36px'}}>Explore Our Products</h2>
                </div>
                <div className='d-flex justify-content-evenly'>
                            <div onClick={()=>{handelScroll(-ITEM_WIDTH, "container2")}}  className='rounded-circle p-3 mx-2' style={{backgroundColor:'#F5F5F5', cursor:'pointer'}}><i class="fa-solid fa-arrow-left"></i></div>
                            <div onClick={()=>{handelScroll(ITEM_WIDTH, "container2")}}  className='rounded-circle p-3 mx-2' style={{backgroundColor:'#F5F5F5',cursor:'pointer'}}><i class="fa-solid fa-arrow-right"></i></div>

                </div>
            </div>

        </div>

        <div  data-container="container2" className='containers py-2 d-flex align-items-center justify-centent-center'    
                style={{
                    display: 'flex',
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth'
                }}>
            {Products.map((item,index)=><ExploreProducts key={index} item={item}/>)}
        </div>
        <div className='d-flex justify-content-evenly'>
                <Link to='/allmedia'>
                    <button className='btn' style={{backgroundColor:'#DB4444', color:'white', width:'159px', height:'56px', fontSize:'16px'}}>View All</button>
                </Link>
        </div>

        {/* /////////////////////////////////////////////////////////////////////////// */}


        <div className='my-2'> 
            <div className='px-5 today' style={{marginTop:'90px'}}>
                <div className='d-flex'>
                    <div className='box'></div>
                        <p className='px-3 h3' style={{color:'#DB4444'}}>Feathured</p>
                    </div>
            </div>

            <div className='px-5 d-flex align-items-center justify-content-between'>
                <div className='side-title'>
                    <h2 className='pe-5' style={{ fontWeight:'600', fontSize:'36px'}}>New Arrival</h2>
                </div>

            </div>
        </div>
        <div className='d-flex justify-content-evenly align-items-center'>
                    <div className='mx-5' style={{backgroundColor:'black'}}>
                        <img src='/playstation.png' width={'570px'} height={'600px'}/>  
                    </div>
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <div className='my-3'>
                            <img src="/cap.jpg" alt="cap-img" width={'570px'} height={'284px'} />
                        </div>
                        <div className='d-flex justify-content-evenly align-items-center gap-4'>
                            <div style={{backgroundColor:'black'}}>
                                <img src="/amazon.png" alt="cap-img" width={'270px'} height={'284px'} style={{marginRight:'3.9px'}}/>
                            </div>
                            <div style={{backgroundColor:'black'}}>
                                <img src="/perfeom.png" alt="cap-img" width={'270px'} height={'284px'} />
                            </div>
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

    export default Home
