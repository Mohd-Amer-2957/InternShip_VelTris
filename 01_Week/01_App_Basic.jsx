
function App(){


function clicked(){
    console.log("clicked")
}


 return (<> 

 <h1>hello from React</h1>  

 {/* <input onChange={clicked} type="text" placeholder="Enter " /><br /> */}
 {/* <button onClick={clicked}>Click</button> */}



  <input onChange={(ele)=>{
    console.log(ele.target.value)
    // readInput(ele.target.value);
   
  }} 
type="text" placeholder="Enter " /><br />

 </>)
}

// make sure the opening <> tag always beside the return  (return <>), otherwise it wont consider the next line 

export default App

