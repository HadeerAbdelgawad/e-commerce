import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Profile({userData}) {

    
    const[changeData, setAccountData]= useState(userData || {})

    // async function changeUserData(){
    //     try{
    //         const {data}=await axios.put(`https://wezaaa.runasp.net/api/Account`)
    //         setAccountData(data)
    //         console.log(data)
    //     }catch(error){
    //         console.log(error.message)
    //     }
        
    // }
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await changeUserData()
        console.log('Form submitted');
      };
    //   changeUserData()
    
    
    return<>
    <div className='container d-flex flex-md-row flex-column  gap-5'>
        <div>
            <ul style={{listStyle:'none'}}>
                <li><h2 style={{fontFamily:'"Poppins", serif', fontWeight:'500', fontSize:'16px'}}>Manage My Account</h2></li>
                <li style={{fontFamily:'"Poppins"serif', fontWeight:'400'}} className='ps-2 text-muted'>My Profile</li>
                <li style={{fontFamily:'"Poppins"serif', fontWeight:'400'}} className='ps-2 text-muted'>Address Book</li>
                <li style={{fontFamily:'"Poppins"serif', fontWeight:'400'}} className='ps-2 text-muted'>My Payment Options</li>
            </ul>
            <ul style={{listStyle:'none'}}>
                <li><h2 style={{fontFamily:'"Poppins", serif', fontWeight:'500', fontSize:'16px'}}>My Orders</h2></li>
                <li style={{fontFamily:'"Poppins"serif', fontWeight:'400'}} className='ps-2 text-muted'>My Returns</li>
                <li style={{fontFamily:'"Poppins"serif', fontWeight:'400'}} className='ps-2 text-muted'>My Cancellations</li>
            </ul>
            <ul style={{listStyle:'none'}}>
                <Link to="/wishlist"  style={{textDecoration:'none' , color:'black'}}>
                    <li><h2 style={{fontFamily:'"Poppins", serif', fontWeight:'500', fontSize:'16px'}}>My WishList</h2></li>
                </Link>
            </ul>
           
            
        </div>
        <div className='card-acc p-5' style={{boxShadow:'0.2px 0.2px 60px 0.2px rgba(240, 240, 240, 1)', width:'870px', height:'630px'}}>
            <h2 style={{color:'rgba(219, 68, 68, 1)', fontFamily:'"Poppins", serif', fontWeight:'500', fontSize:'20px'}}>Edit Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-row gap-5'>
                    <div className='d-flex flex-column gap-2'>
                        <label htmlFor='fname' style={{fontFamily:'"Poppins", serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px'}}>First Name</label>
                        <input id='fname' style={{width:'330px', height:'50px', border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} className='p-2' type='text' readOnly placeholder={userData?.first_name || 'First Name'}/>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <label htmlFor='lname' style={{fontFamily:'"Poppins", serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px'}}>Last Name</label>
                        <input id='lname' style={{width:'330px', height:'50px' , border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} className='p-2' type='text' readOnly placeholder={userData?.last_name || 'Last Name'}/> 
                    </div>
                    
                </div>
                <div className='d-flex flex-row gap-5'>
                    <div className='d-flex flex-column gap-2'>
                        <label htmlFor='email' style={{fontFamily:'"Poppins", serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px'}}>Email</label>
                        <input id='email' style={{width:'330px', height:'50px', border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} className='p-2' type='email' placeholder={userData?.email || 'Email'}/>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <label htmlFor='address' style={{fontFamily:'"Poppins", serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px'}}>Address</label>
                        <input id='address' style={{width:'330px', height:'50px', border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} className='p-2' type='text' placeholder={userData?.user_address || 'Address'}/> 
                    </div>
                    
                    
                </div>
                <br/>

                <div className='d-flex flex-column gap-2'>
                    <label htmlFor='pass' style={{fontFamily:'"Poppins", serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px'}}>Password Changes</label>
                    <div className=' d-flex flex-column gap-2'>
                        <input id='pass' type='password' style={{width:'710px', height:'50px', border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} className='p-2' placeholder='Current Password'/>
                        <input id='pass' type='password' style={{width:'710px', height:'50px', border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} className='p-2' placeholder='New Password'/>
                        <input id='pass' type='password' style={{width:'710px', height:'50px', border:'none', backgroundColor:'rgba(245, 245, 245, 1)'}} className='p-2' placeholder='Confirm New Password'/>
                    </div>
                    

                </div>
                <div className='d-flex justify-content-end my-3' style={{height:'56px'}}>    
                    <button style={{border:'none', fontFamily:'"Poppins", serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px'}} className='btn btn-transparent' type='reset'>cancel</button>
                    <button style={{border:'none', backgroundColor:'rgba(219, 68, 68, 1)', width:'214px', color:'white', fontFamily:'"Poppins", serif', fontSize:'16px', fontWeight:'400', lineHeight:'24px', borderRadius:'4px'}} className='btn' type='submit'>Save Changes</button>

                </div>
                   
            </form>
        </div>
    </div>
        
    </>
}

export default Profile
