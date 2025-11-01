//**********************          Axios        ************************


import axios from 'axios';
import { useState } from 'react';

const App = () => {

    const [data_01, setdata] = useState([])

  const getData = async () => {

    const mydata= await axios.get('https://jsonplaceholder.typicode.com/todos');   // fake data link

    console.log("Get the data", mydata.data)
    setdata(mydata.data)
  }


  return (
    <div><center><h1>API Calling</h1></center>
    
    <div><button onClick={getData}>getData</button></div>

      {/* // here just printing the arry data in page */}
    <div> {data_01.map(function(ele){

      return   <h3>Hello {ele.title}</h3>
    })}
       </div>
    
    </div>
  )
}

export default App











// ASYNC FUCNTION 


// const getData = async () => {

//     const data= await fetch('https://jsonplaceholder.typicode.com/todos/1');

//     console.log("Get the data",data)
//   }
