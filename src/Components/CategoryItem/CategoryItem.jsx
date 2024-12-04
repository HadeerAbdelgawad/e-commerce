import React from 'react'

function CategoryItem({item}) {
    return <>
    <div className='col-md-3 d-flex justify-content-center align-items-center'>
        <div className="products position-relative">
          <div className='contain p-2' style={{width:'170px', height:'145px',  border:'1px solid #000000',borderRadius:'4px', textAlign:'center'}}>
            {item=='electronics'&&(<img src="/electronics.png" width={'90px'}/>)}
            {item=='jewelery'&&(<img src="/jewellery.png" width={'90px'}/>)}
            {item=="men's clothing"&&(<img src="/men's clothes.png" width={'90px'}/>)}
            {item=="women's clothing"&&(<img src="/women's clothing.png" width={'90px'}/>)}


        
            <p className='p-2' style={{fontWeight:'400', fontSize:'16px', lineHeight:'24px', textTransform:'capitalize'}}>{item}</p>
          </div>
          
          

          
           

            
            


        </div>

    </div>
    </>
       
}

export default CategoryItem
