import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

    const [userData, setUserData] = useState([])
    const [pageIndex, setPageIndex] = useState(1)

    const getData = async () =>{
        const response = await axios.get(`https://picsum.photos/v2/list?page=${pageIndex}&limit=25`)
        //  console.log(response.data);

         setUserData(response.data)
        //  console.log(userData[0]);                  
    }

    useEffect(function(){
      getData()
    },[pageIndex])         //  calling getData once without any action, calling getData when page changing(pageIndex)

    
    let printData='Please wait Loading.....'

    if(userData.length>0){
      printData=userData.map(function(ele,idx){    

        return <div className='print_img'>
                <a href={ele.url} target='_blank'><img src={ele.download_url} /></a>
              </div>
      })
    }


   

    // React dom will start here
  return (
    <div className='parent'><center>
        <div><center><h1>Gallery</h1></center></div>
        {/* <button onClick={getData}>get Data</button>   // here we are using useEffect to auto call getData once  */}

        <div className='print_data'>{printData}
        </div>

        <div><center>
          <button onClick={()=>{
                    console.log("Prev Clicked ",pageIndex);
                    if(pageIndex>1){
                      setPageIndex(pageIndex-1)
                      // setUserData([])
                    } 
                  }}>
            Prev
          </button>
        
        
        


        <button onClick={()=>{
                  console.log("Next Clicked ",pageIndex);
                  setPageIndex(pageIndex+1)
                  // setUserData([])       // making emty just for fast laoding content
                }}>
         Next
        </button>
        <h4>Page {pageIndex}</h4>
        </center>
        </div>
        </center>
    </div>
  )
}

export default App