import React, { useEffect, useState } from 'react'

const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)


  useEffect(() => {
    console.log("useEffect calling");
  },[])                                  // passing dependencies to call useEfect when we need



  return (
    <div><center><h1>UseEffect</h1></center>
    <div>

      <div><span><h2>{num1}</h2>  <h2>{num2}</h2></span></div>
      <button onClick={function(){
        setNum1(num1+1)
      }} 
      >change Num1</button>
      <button onClick={function(){
        setNum2(num2+10)
      }}
      >change Num2</button>

    </div>
    
    </div>
  )
}

export default App
