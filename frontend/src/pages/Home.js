
import Nav from './Nav'
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


/*books,Home,books2   book from index cannot be change */
function Home({Toggle}) {
  const [books2,setHome2] = useState([])
  const [books,setHome] = useState([])
  

  useEffect(()=>{
      const fetchAllHome2 = async ()=>{
      try{
          const res = await axios.get("http://localhost:8800/books2");
          
          setHome2(res.data); 
          }catch(err){
          console.log(err);
      }
    };




    
    fetchAllHome2();
  },[]);



  useEffect(()=>{
    const fetchAllHome = async ()=>{
    try{
        const res = await axios.get("http://localhost:8800/books");
        
        setHome(res.data); 
        }catch(err){
        console.log(err);
    }
  };




  
  fetchAllHome();
},[]);



  




 
 


  return (

    

    <div className='px-3'>
    <Nav Toggle={Toggle}/>
      <div className='container-fluid'>
      <div><h1 className='bg-white fs-2 text-center'>Daily Report</h1></div>
                        
        <div className='row g-3 my-2'>

        {
        books.map((book,index)=>(          
          <div className='col-md-2 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              
                <div>
                  <p className='fs-9'>Gross        Sale</p>
                  <h3 className='fs-5'>{book.grosssale}</h3>
                </div>  
                <i className='bi bi-cart-plus  fs-1'></i>           
              </div>
         </div>
    ))
  } 
   {
        books.map((book,index)=>(   
         <div className='col-md-2 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              
                <div>
                  <p className='fs-9'>Net         Sale</p>
                  <h3 className='fs-5'>{book.netsales}</h3>
                </div>
                <i className='bi bi-currency-dollar fs-1'></i>
              </div>
         </div>
  ))
}       
{
        books.map((book,index)=>(     
         <div className='col-md-2 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
             
                <div>
                  <p className='fs-9'>Gross Refund</p>
                  <h3 className='fs-5'>{book.grossrefund}</h3>               
                </div>
                <i className='bi bi-truck  fs-1'></i>
              </div>
         </div>
  ))
}    
{
        books.map((book,index)=>(            
         <div className='col-md-2 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              
                <div>
                  <p className='fs-9'>Less Discount</p>
                  <h3 className='fs-5'>{book.lessdiscount}</h3>                 
                </div>
                <i className='bi bi-graph-up-arrow  fs-1'></i>
              </div>
         </div>
 ))
}   
{
        books.map((book,index)=>(         
         <div className='col-md-2 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
             
                <div>
                  <p className='fs-9'>Old        Grand</p>
                  <h3 className='fs-5'>{book.oldgrandtotal}</h3>                 
                </div>   
                <i className='bi bi-truck fs-1'></i>           
              </div>
         </div>
 ))
}    
{
        books.map((book,index)=>(              
         <div className='col-md-2 p-1'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              
                <div>
                  <p className='fs-9'>New        Grand</p>
                  <h3 className='fs-5'>{book.newgrandtotal}</h3>                       
                </div>  
                <i className='bi bi-graph-up-arrow  fs-1'></i>               
              </div>
         </div>
          ))
        } 
      </div>
   </div>
      

   
    
     
     <div className='container'>
     
        <div class="table-wrapper">
       
        <table className="bg-white table border shadow table-condensed table-bordered  table-striped col mx-auto">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col px-2">Store Number</th>
      <th scope="col">Gross Sale</th>
      <th scope="col">Net Sale</th>
      <th scope="col">Gross Refund</th>
      <th scope="col">less Discount</th>
      <th scope="col">Old Grand Total</th>
      <th scope="col">New Grand Total</th>
      <th scope="col">Date</th>
     
    </tr>
  </thead>
  <tbody>

  {
        books2.map((book,index)=>(
<tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{book.storenum}</td>
      <td>{book.grosssale}</td>
      <td>{book.netsales}</td>
      <td>{book.grossrefund}</td>
      <td>{book.lessdiscount}</td>
      <td>{book.oldgrandtotal}</td>
      <td>{book.newgrandtotal}</td>
      <td>{book.date}</td>
     
      <td>
       
      </td>
    </tr>
        ))
    } 
    
  </tbody>
 </table>

</div>

    </div>
  

    </div>












  )
}

export default Home