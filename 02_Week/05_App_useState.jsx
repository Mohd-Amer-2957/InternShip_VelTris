import { useState } from "react";


const App = () => {

    const num=0;
    const [number, setnum] = useState(0)
    const [name, setname] = useState('Mohd Amer')
    // const [arr, setarr] = useState([10,20,30])

    function IncreaseNum(){
      setnum(num+1)
         
      setname('Pardhu bhai')
      // setarr([40,50,60])
    }

    function DecreaseNum(){
      setnum(number-1)
      setname('Mohd Amer')
    }

    

  return (
    <div>
        <div><center><h1>I am {name}</h1></center></div>
        <div><center><h1>The Value is {number}</h1></center></div>

    <center>
      <button onClick={IncreaseNum}>Increase</button> 
      <button onClick={DecreaseNum}>Decrease</button>   
    </center>
    
    </div>)
}

export default App




// setnum(num+1)  using 3 times ,this will take only one time,   value increase by 1 only
// setnum(num+1)   instead we can use prev method
// setnum(num+1)   

//           setnum(prev=>(prev+1))      this will increase by 3, bcz we using prev
//           setnum(prev=>(prev+1))
//           setnum(prev=>(prev+1))