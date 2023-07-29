import { useEffect, useState } from 'react';
import ProductDetails from './productDetails';
import "../styles/productPage.scss"
import Offcanvas from './offcanvas';

export default function ProductPage(){
    const [data, setData] = useState();
    const [org, setOrg] = useState();
    const [open, setOpen] = useState(false);
    const fetchData = async() => {
        try {
          const res = await fetch("https://ogami-api.vercel.app/api/product?&_limit=12");
          const resout = await res.json();
          console.log(resout);
          setData(resout);
          setOrg(data);
         
        } catch (error) {
          console.log(error);
        }
      }
     
      const sortList = ["AtoZ","ZtoA"]
      const handleClick = () => {
        setOpen(!open);
      }
    
      const alphabetFunc = () => {
        //  setData([...data].sort((a,b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)))
        var arr = data;
        console.log(arr)
            for(let j = 0 ; j < arr.length ; j++){
              if(arr){
                if(arr[j].name.charCodeAt(0) > arr[j+1].name.charCodeAt(0)){
                  let swap = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = swap;  
              }
              } 
            }

      }
      const revAlphabetFunc = () => {
        setData([...data].sort((a,b) => b.name.charCodeAt(0) - a.name.charCodeAt(0)))
     }
      console.log(data)

      useEffect(() => {
       fetchData()
      
      },[])
    return(
        <div className='productPage-container'>
                  <div className='productPage-header'>
                       <div style={{cursor: "pointer",fontWeight:"500"}}>Product List</div>
                       <div>
                            <div onClick={handleClick} style={{cursor: "pointer",fontWeight:"500"}}>Sort</div>
                            <div className='offCanvas-container'>
                              <Offcanvas open={open} >
                                  <div onClick={alphabetFunc} style={{cursor: "pointer", width:"6rem",textAlign:"center"}}>{sortList[0]}</div> 
                                  <div onClick={revAlphabetFunc} style={{cursor: "pointer", width:"6rem",textAlign:"center"}}>{sortList[1]}</div>  
                              </Offcanvas>
                            </div>
                       </div>
                  </div>
                  <div className='productPage-products'>
                        <ProductDetails data={data}/>
                  </div>            
        </div>
    )
}